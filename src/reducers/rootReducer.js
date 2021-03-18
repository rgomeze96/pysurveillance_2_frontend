import { combineReducers } from "redux";
import firstAnalysisReducer from "./firstAnalysisReducer";
import secondAnalysisReducer from "./secondAnalysisReducer";
import thirdAnalysisReducer from "./thirdAnalysisReducer";

// Combine all of the reducers in order to be accessible in all components
const rootReducer = combineReducers({
  firstAnalysis: firstAnalysisReducer,
  secondAnalysis: secondAnalysisReducer,
  thirdAnalysis: thirdAnalysisReducer,
});

export default rootReducer;
