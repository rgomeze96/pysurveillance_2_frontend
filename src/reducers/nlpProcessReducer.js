const initialState = {
  loading: false,
  fileLoaded: false,
};

const firstAnalysisReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "AWAITING_NLP":
      return {
        state,
        loading: true,
        fileLoaded: false,
      };
    case "REJECTED_NLP":
      return {
        ...state,
        loading: false,
        fileLoaded: false,
      };
    case "SUCCESS_NLP":
      return {
        ...state,
        loading: false,
        fileLoaded: true,

      };
    default:
      return state;
  }
};

export default firstAnalysisReducer;
