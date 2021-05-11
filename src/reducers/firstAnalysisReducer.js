const initialState = {
  loading: false,
  fileLoaded: false,
};

const firstAnalysisReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "AWAITING_FIRST_ANAYLSIS":
      return {
        state,
        loading: true,
        fileLoaded: false,
      };
    case "REJECTED_FIRST_ANALYSIS":
      return {
        ...state,
        loading: false,
        fileLoaded: false,
      };
    case "SUCCESS_FIRST_ANALYSIS":
      return {
        ...state,
        loading: false,
        fileLoaded: true,
        data: {
          // Author Names
          labels: payload.getTopAuthorsName,
          datasets: [
            {
              // Label for Graph
              label: "Publications per Author",
              // Number of publications data
              data: payload.getTopAuthors,
              backgroundColor: "#4B8BBE",
              borderColor: "#EF8104",
              pointBorderColor: "#EF8104",
              background: "white",
            },
          ],
        },
        data1: {
          // load all the years into graph
          labels: payload.getYears,
          datasets: [
            {
              label: "Total Publications per Year",
              // load the number of publications of each year
              data: payload.getPublicationsYear,
              backgroundColor: "#4B8BBE",
              borderColor: "#EF8104",
              pointBorderColor: "#EF8104",
            },
          ],
        },
        data2: {
          // Load all of the affiliations
          labels: payload.getAffiliations,
          datasets: [
            {
              label: "Publications per Affiliation",
              // Load number of publications per affiliation
              data: payload.getPublicationsAffiliation,
              backgroundColor: "#4B8BBE",
              borderColor: "#EF8104",
              pointBorderColor: "#EF8104",
            },
          ],
        },
      };
    default:
      return state;
  }
};

export default firstAnalysisReducer;
