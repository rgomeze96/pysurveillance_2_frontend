const initialState = {
  loading: false,
};

const secondAnalysisReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "AWAITING_SECOND_ANALYSIS":
      return {
        state,
        loading: true,
      };

    case "REJECTED_SECOND_ANALYSIS":
      return {
        ...state,
        loading: false,
      };

    case "SUCCESS_SECOND_ANALYSIS":
      return {
        ...state,
        loading: false,
        data: {
          labels: payload.getTopAuthNamesCites,
          datasets: [
            {
              label: "Top Authors per Citations",
              data: payload.getTopAuthNumCites,
              backgroundColor: "#003366",
              borderColor: "#EF8104",
              pointBorderColor: "#EF8104",
            },
          ],
        },
        data1: {
          labels: payload.getTopSrcNamesCites,
          datasets: [
            {
              label: "Top Sources per Citations",
              data: payload.getTopSrcPerCites,
              backgroundColor: "#003366",
              borderColor: "#EF8104",
              pointBorderColor: "#EF8104",
            },
          ],
        },
        data2: {
          labels: payload.getTopPapersNamesCites,
          datasets: [
            {
              label: "Top Papers per Citations",
              data: payload.getTopPapersPerCites,
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

export default secondAnalysisReducer;
