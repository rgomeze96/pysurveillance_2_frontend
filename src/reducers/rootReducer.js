import { combineReducers } from "redux";
import firstAnalysisReducer from "./firstAnalysisReducer";
import secondAnalysisReducer from "./secondAnalysisReducer";
import thirdAnalysisReducer from "./thirdAnalysisReducer";

const rootReducer = combineReducers({
  firstAnalysis: firstAnalysisReducer,
  secondAnalysis: secondAnalysisReducer,
  thirdAnalysis: thirdAnalysisReducer,
});

export default rootReducer;
