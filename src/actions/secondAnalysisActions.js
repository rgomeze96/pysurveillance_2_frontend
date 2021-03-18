import axios from "axios";

export const getSecondAnalysis = ({ fileFromState }) => async (dispatch) => {
  try {
    dispatch({
      type: "AWAITING_SECOND_ANALYSIS",
    });

    // Store data from CSV File Input
    const formData = new FormData();
    formData.append("file", fileFromState);

    // Make call to FLASK RESTful API
    const response = await axios.post(
      `http://localhost:5000/api/second_grade/`,
      formData
    );

    // Check if there is an error
    if (response.status !== 200) {
      dispatch({
        type: "REJECTED_SECOND_ANALYSIS",
      });
    }

    // Get data from response
    const allCitesPerAuthor = response.data["cites_per_author"];
    const allCitesPerSource = response.data["cites_per_source"];
    const allCitesPerPaper = response.data["cites_per_paper"];

    // Set arrays for cites per author
    const allAuthorsWithCites = [];
    const allNumberOfCites = [];
    allCitesPerAuthor.forEach((element) => {
      Object.keys(element).map((key) => {
        if (element[key] > 0) {
          allAuthorsWithCites.push(key);
          allNumberOfCites.push(element[key]);
        }
      });
    });

    // Set arrays for cites per source
    const allSourcesWithCites = [];
    const allNumberOfCitesSources = [];
    allCitesPerSource.forEach((element) => {
      Object.keys(element).map((key) => {
        if (element[key] > 0) {
          allSourcesWithCites.push(key);
          allNumberOfCitesSources.push(element[key]);
        }
      });
    });

    // Set arrays for cites per paper
    const allPapersWithCites = [];
    const allNumberOfCitesPapers = [];
    allCitesPerPaper.forEach((element) => {
      Object.keys(element).map((key) => {
        if (element[key] > 0) {
          allPapersWithCites.push(key);
          allNumberOfCitesPapers.push(element[key]);
        }
      });
    });

    // Determine the top authors, sources and paper by number of citations
    const getTopAuthNumCites = [];
    const getTopAuthNamesCites = [];
    const getTopSrcPerCites = [];
    const getTopSrcNamesCites = [];
    const getTopPapersPerCites = [];
    const getTopPapersNamesCites = [];
    let i = 0;
    while (i < 20) {
      // Get top authors per cites
      getTopAuthNumCites[i] = Math.max(...allNumberOfCites);
      let indexAuthor = allNumberOfCites.indexOf(Math.max(...allNumberOfCites));
      getTopAuthNamesCites[i] = allAuthorsWithCites[indexAuthor];
      allNumberOfCites.splice(indexAuthor, 1);

      // Get top sources per cites
      getTopSrcPerCites[i] = Math.max(...allNumberOfCitesSources);
      let indexSource = allNumberOfCitesSources.indexOf(
        Math.max(...allNumberOfCitesSources)
      );
      getTopSrcNamesCites[i] = allSourcesWithCites[indexSource];
      allNumberOfCitesSources.splice(indexSource, 1);

      // Get top papers per cites
      getTopPapersPerCites[i] = Math.max(...allNumberOfCitesPapers);
      let indexPapers = allNumberOfCitesPapers.indexOf(
        Math.max(...allNumberOfCitesPapers)
      );
      getTopPapersNamesCites[i] = allPapersWithCites[indexPapers];
      allNumberOfCitesPapers.splice(indexPapers, 1);
      i++;
    }

    dispatch({
      type: "SUCCESS_SECOND_ANALYSIS",
      loading: false,
      payload: {
        getTopAuthNamesCites,
        getTopAuthNumCites,
        getTopSrcNamesCites,
        getTopSrcPerCites,
        getTopPapersNamesCites,
        getTopPapersPerCites,
      },
    });
  } catch (error) {
    dispatch({
      type: "REJECTED_SECOND_ANALYSIS",
    });
    console.log("Error", error);
  }
};
