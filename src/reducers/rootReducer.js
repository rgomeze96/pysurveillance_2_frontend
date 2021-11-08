import { combineReducers } from "redux";
import firstAnalysisReducer from "./firstAnalysisReducer";
import secondAnalysisReducer from "./secondAnalysisReducer";
import thirdAnalysisReducer from "./thirdAnalysisReducer";
import nlpProcessReducer from "./nlpProcessReducer";

// Combine all of the reducers in order to be accessible in all components
const rootReducer = combineReducers({
  firstAnalysis: firstAnalysisReducer,
  secondAnalysis: secondAnalysisReducer,
  thirdAnalysis: thirdAnalysisReducer,
  nlpProcess: nlpProcessReducer
});

export default rootReducer;
