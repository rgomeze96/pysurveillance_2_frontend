import axios from 'axios';


export const getFirstAnalysis = ({authors, years, affiliations}) => async dispatch => {
    try {
        dispatch({
            type: 'AWAITING_FIRST_GRADE_ANALYSIS'
        })
        const authorsArray = []
        const yearsArray = []
        const affiliationsArray = []
        Object.values(authors).map((element) => (
            element.map((row, index) => (
                authorsArray[index] = row
            ))
        ))
        Object.values(years).map((element) => (
            element.map((row, index) => (
                yearsArray[index] = row
            ))
        ))
        Object.values(affiliations).map((element) => (
            element.map((row, index) => (
                affiliationsArray[index] = row
            ))
        ))
        const response = await axios.get(`http://localhost:5000/api/first_grade_analysis/`, {
            params: {
                authorsParam: JSON.stringify(authorsArray),
                yearsParam: JSON.stringify(yearsArray),
                affiliationsParam: JSON.stringify(affiliationsArray)
            }
        })
        const publications_per_author = response.data.publications_per_author
        const publications_per_year = response.data.publications_per_year
        const publications_per_affiliation = response.data.publications_per_affiliation
        delete publications_per_author["No author name available"]
        const ppAuthorsTop = []
        const ppAuthorsPubs = []
        const getTopAuthors = []
        const getTopAuthorsName = []
        const getPublicationsYear = []
        const getYears = []
        const getPublicationsAffiliation = []
        const getAffiliations = []
        const ppGetPublicationsAffiliation = []
        const ppGetAffiliations = []
        
        Object.keys(publications_per_author).map((element, index) => (
            ppAuthorsTop[index] = element,
            ppAuthorsPubs[index] = publications_per_author[element]
        ))
        Object.keys(publications_per_year).map((element, index) => (
            getYears[index] = element,
            getPublicationsYear[index] = publications_per_year[element]
        ))
        Object.keys(publications_per_affiliation).map((element, index) => (
            ppGetAffiliations[index] = element,
            ppGetPublicationsAffiliation[index] = publications_per_affiliation[element]
        ))
        let i = 0
        while (i < 20) {
            getTopAuthors[i] = Math.max(...ppAuthorsPubs)
            let indexAuthor = ppAuthorsPubs.indexOf(Math.max(...ppAuthorsPubs))
            getTopAuthorsName[i] = ppAuthorsTop[indexAuthor]
            ppAuthorsPubs.splice(indexAuthor, 1)
            getPublicationsAffiliation[i] = Math.max(...ppGetPublicationsAffiliation)
            let indexAffiliation = ppGetPublicationsAffiliation.indexOf(Math.max(...ppGetPublicationsAffiliation))
            getAffiliations[i] = ppGetAffiliations[indexAffiliation]
            ppGetPublicationsAffiliation.splice(indexAffiliation, 1)
            i++;
        }
        dispatch({
            type:"SUCCESS_FIRST_ANALYSIS",
            loading: false,
            payload: {
                getTopAuthors,
                getTopAuthorsName,
                getYears,
                getPublicationsYear,
                getAffiliations,
                getPublicationsAffiliation
            }
        })
        
    } catch(e) {
        dispatch({
            type: 'REJECTED_FIRST_GRADE_ANALYSIS'
        })
        console.log(e)
    }
}