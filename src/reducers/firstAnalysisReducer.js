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
          labels: payload.getTopAuthorsName,
          datasets: [
            {
              label: "Publications",
              data: payload.getTopAuthors,
              backgroundColor: "#003366",
              borderColor: "#EF8104",
              pointBorderColor: "#EF8104",
              background: "white",
            },
          ],
        },
        data1: {
          labels: payload.getYears,
          datasets: [
            {
              label: "Publications",
              data: payload.getPublicationsYear,
              backgroundColor: "#003366",
              borderColor: "#EF8104",
              pointBorderColor: "#EF8104",
            },
          ],
        },
        data2: {
          labels: payload.getAffiliations,
          datasets: [
            {
              label: "Publications",
              data: payload.getPublicationsAffiliation,
              backgroundColor: "#003366",
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
