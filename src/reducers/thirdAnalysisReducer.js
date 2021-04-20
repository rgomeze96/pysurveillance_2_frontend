import { findAllByTestId } from "@testing-library/react";

const initialState = {
  loading: false,
};

const thirdAnalysisReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "AWAITING_THIRD_ANALYSIS":
      return {
        ...state,
        loading: true,
      };
    case "REJECTED_THIRD_ANAYLSIS":
      return {
        ...state,
        loading: false,
      };
    case "SUCCESS_THIRD_ANALYSIS":
      return {
        ...state,
        loading: false,
        data: {
          // load the names of the top authors based on the sources they publish in
          labels: payload.getNamesOfTopAuthPerSources,
          datasets: [
            {
              label: "Top Authors per Sources",
              // load the data of the sources
              data: payload.getNumberOfSources,
              backgroundColor: "#43607d",
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

export default thirdAnalysisReducer;
