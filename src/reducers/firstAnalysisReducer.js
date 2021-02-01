const initialState = {
    loading: false,
}

const firstAnalysisReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case "AWAITING_FIRST_ANAYLSIS":
            return {   
                state,
                loading: true
            }
        case 'REJECTED_FIRST_ANALYSIS':
            return {
                ...state,
                loading: false
            }
        case 'SUCCESS_FIRST_ANALYSIS':
            return {
                ...state,
                loading: false,
                data: {
                    labels: payload.getTopAuthorsName,
                    datasets: [{
                        label: "Publications",
                        data: payload.getTopAuthors,
                        backgroundColor: '#003366',
                        borderColor: '#b2ff59',
                        pointBorderColor: '#b2ff59',
                        background: 'white'
                        
                    }]
                },
                data1: {
                    labels: payload.getYears,
                    datasets: [{
                        label: "Publications",
                        data: payload.getPublicationsYear,
                        backgroundColor: '#003366',
                        borderColor: '#b2ff59',
                        pointBorderColor: '#b2ff59',
                        
                    }]
                },
                data2: {
                    labels: payload.getAffiliations,
                    datasets: [{
                        label: "Publications",
                        data: payload.getPublicationsAffiliation,
                        backgroundColor: '#003366',
                        borderColor: '#b2ff59',
                        pointBorderColor: '#b2ff59',
                        
                    }]
                }
            }
        default:
            return state;
    }

}

export default firstAnalysisReducer;