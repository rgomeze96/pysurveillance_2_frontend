import axios from "axios";

export const nlpAnalysis =
  ({ fileFromState, searchParameters }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "AWAITING_NLP",
      });
      const formData = new FormData();
      // Store data from CSV File that was uploaded in UploadCSV
      if (fileFromState) {
        formData.append("file", fileFromState);
        formData.append("searchParams", searchParameters);
        // Make call to FLASK RESTful API
        const response = await axios.post(
          `http://localhost:5000/api/nlp/`,
          formData
        );

        // Check if there is an error
        if (response.status !== 200) {
          dispatch({
            type: "REJECTED_NLP",
          });
        } else {
          const results_before_nlp = response.data.total_results;
          const results_after_nlp = response.data.results_after_nlp;
          console.log(response.data);
          console.log("results_before_nlp: ", results_before_nlp);
          console.log("results_after_nlp: ", results_after_nlp);
          dispatch({
            type: "SUCCESS_NLP",
            payload: {
              results_before_nlp,
              results_after_nlp,
            },
          });
        }
      } else {
        dispatch({
          type: "REJECTED_NLP",
        });
      }




      /*// Make variables in order to store the data for the graph
    const publications_per_year = response.data.pubs_per_year;
    const publications_per_author = response.data.pubs_per_author;
    const publications_per_affiliation = response.data.pubs_per_affiliation;

    const ppAuthorsTop = [];
    const ppAuthorsPubs = [];
    const getTopAuthors = [];
    const getTopAuthorsName = [];
    const getPublicationsYear = [];
    const getYears = [];
    const getPublicationsAffiliation = [];
    const getAffiliations = [];
    const ppGetPublicationsAffiliation = [];
    const ppGetAffiliations = [];

    // Store all the years and number of publications for each year into arrays for graph
    Object.keys(publications_per_year).map(
      (element, index) => (
        (getYears[index] = element),
        (getPublicationsYear[index] = publications_per_year[element])
      )
    );

    // Store all the authors names and the number of publications
    Object.keys(publications_per_author).map(
      (element, index) => (
        (ppAuthorsTop[index] = element),
        (ppAuthorsPubs[index] = publications_per_author[element])
      )
    );

    // Store all the affiliations and the number of publications into an array
    Object.keys(publications_per_affiliation).map(
      (element, index) => (
        (ppGetAffiliations[index] = element),
        (ppGetPublicationsAffiliation[index] =
          publications_per_affiliation[element])
      )
    );

    // Load the top (20) authors and affiliations based on publications
    // Change this to an input to allow the user to change the number of "top"
    let i = 0;
    while (i < 20) {
      getTopAuthors[i] = Math.max(...ppAuthorsPubs);
      let indexAuthor = ppAuthorsPubs.indexOf(Math.max(...ppAuthorsPubs));
      getTopAuthorsName[i] = ppAuthorsTop[indexAuthor];
      ppAuthorsPubs.splice(indexAuthor, 1);
      getPublicationsAffiliation[i] = Math.max(...ppGetPublicationsAffiliation);
      let indexAffiliation = ppGetPublicationsAffiliation.indexOf(
        Math.max(...ppGetPublicationsAffiliation)
      );
      getAffiliations[i] = ppGetAffiliations[indexAffiliation];
      ppGetPublicationsAffiliation.splice(indexAffiliation, 1);
      i++;
    }

    // Load the data into the firstAnalysisReducer.js
    dispatch({
      type: "SUCCESS_FIRST_ANALYSIS",
      loading: false,
      payload: {
        getTopAuthors,
        getTopAuthorsName,
        getYears,
        getPublicationsYear,
        getAffiliations,
        getPublicationsAffiliation,
      },
    });
    */
    } catch (e) {
      dispatch({
        type: "REJECTED_NLP",
      });
      console.log("Error in nlpAnalysis: ", e);
    }
  };
