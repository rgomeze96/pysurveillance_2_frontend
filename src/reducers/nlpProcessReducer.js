const initialState = {
  loading: false,
  analysisCompleted: false,
  fileLoaded: false
};

const nlpProcessReducer = (state = initialState, action) => {
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
    case "NLP_FILE_UPLOADED":
      return {
        ...state,
        loading: false,
        fileLoaded: true,
      };
    case "SUCCESS_NLP":
      return {
        ...state,
        loading: false,
        analysisCompleted: true,
        fileLoaded: true,
        results_before: payload.results_before_nlp,
        results_after: payload.results_after_nlp
      };
    default:
      return state;
  }
};

export default nlpProcessReducer;
