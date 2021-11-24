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
        console.log(response.data.first_analysis);
        // Check if there is an error
        if (response.status !== 200) {
          dispatch({
            type: "REJECTED_NLP",
          });
        } else {
          // Natural Language Processing Info
          const results_before_nlp = response.data.total_results;
          const results_after_nlp = response.data.results_after_nlp;
          // First Analysis-------------------------------------------------------------------------------------------------------------------------------
          // Get data from response
          const publications_per_author =
            response.data.first_analysis.pubs_per_author;
          const publications_per_affiliation =
            response.data.first_analysis.pubs_per_affiliation;
          const publications_per_year =
            response.data.first_analysis.pubs_per_year;
          // Lists to store the data for graphing
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
            console.log("index: ", indexAuthor);
            getTopAuthorsName[i] = ppAuthorsTop[indexAuthor];
            ppAuthorsPubs.splice(indexAuthor, 1);
            ppAuthorsTop.splice(indexAuthor, 1);
            getPublicationsAffiliation[i] = Math.max(
              ...ppGetPublicationsAffiliation
            );
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
            firstAnalysisLoading: false,
            payload: {
              getTopAuthors,
              getTopAuthorsName,
              getYears,
              getPublicationsYear,
              getAffiliations,
              getPublicationsAffiliation,
            },
          });
          // End of First Analysis------------------------------------------------------------------------------------------------------------------------------

          // Second Analysis
          const allCitesPerAuthor =
            response.data.second_analysis.cites_per_author;
          const allCitesPerPaper =
            response.data.second_analysis.cites_per_paper;
          const allCitesPerSource =
            response.data.second_analysis.cites_per_source;

          console.log(allCitesPerAuthor, allCitesPerPaper, allCitesPerSource);
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
          let j = 0;
          while (j < 20) {
            // Get top authors per cites
            getTopAuthNumCites[j] = Math.max(...allNumberOfCites);
            let indexAuthor = allNumberOfCites.indexOf(
              Math.max(...allNumberOfCites)
            );
            getTopAuthNamesCites[j] = allAuthorsWithCites[indexAuthor];
            allNumberOfCites.splice(indexAuthor, 1);

            // Get top sources per cites
            getTopSrcPerCites[j] = Math.max(...allNumberOfCitesSources);
            let indexSource = allNumberOfCitesSources.indexOf(
              Math.max(...allNumberOfCitesSources)
            );
            getTopSrcNamesCites[j] = allSourcesWithCites[indexSource];
            allNumberOfCitesSources.splice(indexSource, 1);

            // Get top papers per cites
            getTopPapersPerCites[j] = Math.max(...allNumberOfCitesPapers);
            let indexPapers = allNumberOfCitesPapers.indexOf(
              Math.max(...allNumberOfCitesPapers)
            );
            getTopPapersNamesCites[j] = allPapersWithCites[indexPapers];
            allNumberOfCitesPapers.splice(indexPapers, 1);
            j++;
          }
          console.log(
            "second-grade results: ",
            getTopAuthNamesCites,
            getTopSrcNamesCites,
            getTopPapersNamesCites
          );
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
          // End of second analysis----------------------------------------------------------------------------------------------------------------------------

          // Third Analysis
          const thirdAnalysisFromAPI =
            response.data.third_analysis.num_sources_per_author;
          const allAuthorsPerSources = [];
          const numberOfSourcesPerAuthor = [];
          thirdAnalysisFromAPI.forEach((element) => {
            Object.keys(element).map((key) => {
              if (element[key] > 0) {
                allAuthorsPerSources.push(key);
                numberOfSourcesPerAuthor.push(element[key]);
              }
            });
          });

          // Load the top authors based on number of sources
          const getNamesOfTopAuthPerSources = [];
          const getNumberOfSources = [];
          let m = 0;
          // change to dynamic field input
          while (m < 20) {
            getNumberOfSources[m] = Math.max(...numberOfSourcesPerAuthor);
            let indexSources = numberOfSourcesPerAuthor.indexOf(
              Math.max(...numberOfSourcesPerAuthor)
            );
            getNamesOfTopAuthPerSources[m] = allAuthorsPerSources[indexSources];
            allAuthorsPerSources.splice(indexSources, 1);
            numberOfSourcesPerAuthor.splice(indexSources, 1);
            m++;
          }
          dispatch({
            type: "SUCCESS_THIRD_ANALYSIS",
            loading: false,
            payload: {
              getNamesOfTopAuthPerSources,
              getNumberOfSources,
            },
          });
          // End of third analysis

          // Load data into the nlpProcessReducer
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


    */
    } catch (e) {
      dispatch({
        type: "REJECTED_NLP",
      });
      console.log("Error in nlpAnalysis: ", e);
    }
  };
