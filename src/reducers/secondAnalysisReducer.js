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
          // Load the names of the top authors based on cites
          labels: payload.getTopAuthNamesCites,
          datasets: [
            {
              label: "Top Authors per Citations",
              // load the number of citations for each author
              data: payload.getTopAuthNumCites,
              backgroundColor: "#22578c",
              borderColor: "#EF8104",
              pointBorderColor: "#EF8104",
            },
          ],
        },
        data1: {
          // Load the names of the best sources based on citations
          labels: payload.getTopSrcNamesCites,
          datasets: [
            {
              // load the number of citations per source
              label: "Top Sources per Citations",
              data: payload.getTopSrcPerCites,
              backgroundColor: "#22578c",
              borderColor: "#EF8104",
              pointBorderColor: "#1b6ec2",
            },
          ],
        },
        data2: {
          // load the names of the top papers based on citations
          labels: payload.getTopPapersNamesCites,
          datasets: [
            {
              label: "Top Papers per Citations",
              // load number of citations for the top papers
              data: payload.getTopPapersPerCites,
              backgroundColor: "#22578c",
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
