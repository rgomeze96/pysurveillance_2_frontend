import axios from 'axios';


export const getSecondAnalysis = ({}) => async dispatch => {
    try {
        dispatch({
            type: 'AWAITING_SECOND_GRADE_ANALYSIS'
        })
        
    } catch(error) {
        dispatch({
            type: 'REJECTED_SECOND_GRADE_ANALYSIS'
        })
        console.log('Error', error)
    }
}