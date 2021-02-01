import { combineReducers } from 'redux'
import firstAnalysisReducer from './firstAnalysisReducer'

const rootReducer = combineReducers ({
    firstAnalysis: firstAnalysisReducer
})

export default rootReducer