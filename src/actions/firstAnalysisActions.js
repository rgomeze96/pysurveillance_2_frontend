import axios from "axios";

export const getFirstGrade = ({ fileFromState }) => async (dispatch) => {
  try {
    dispatch({
      type: "AWAITING_FIRST_GRADE",
    });
    const formData = new FormData();
    formData.append("file", fileFromState);
    const response = await axios.post(
      `http://localhost:5000/api/first_grade/`,
      formData
    );
    const publications_per_year = response.data.pubs_per_year;
    const publications_per_author = response.data.pubs_per_author;
    const publications_per_affiliation = response.data.pubs_per_affiliation;

    const ppAuthorsTop = [];
    const ppAuthorsPubs = [];
    const getTopAuthors = [];
    const getTopAuthorsName = [];
    const getPublicationsYear = [];
    const getYears = [];
    const getPublicationsAffiliation = [];
    const getAffiliations = [];
    const ppGetPublicationsAffiliation = [];
    const ppGetAffiliations = [];

    Object.keys(publications_per_year).map(
      (element, index) => (
        (getYears[index] = element),
        (getPublicationsYear[index] = publications_per_year[element])
      )
    );
    Object.keys(publications_per_author).map(
      (element, index) => (
        (ppAuthorsTop[index] = element),
        (ppAuthorsPubs[index] = publications_per_author[element])
      )
    );
    Object.keys(publications_per_affiliation).map(
      (element, index) => (
        (ppGetAffiliations[index] = element),
        (ppGetPublicationsAffiliation[index] =
          publications_per_affiliation[element])
      )
    );
    let i = 0;
    while (i < 20) {
      getTopAuthors[i] = Math.max(...ppAuthorsPubs);
      let indexAuthor = ppAuthorsPubs.indexOf(Math.max(...ppAuthorsPubs));
      getTopAuthorsName[i] = ppAuthorsTop[indexAuthor];
      ppAuthorsPubs.splice(indexAuthor, 1);
      getPublicationsAffiliation[i] = Math.max(...ppGetPublicationsAffiliation);
      let indexAffiliation = ppGetPublicationsAffiliation.indexOf(
        Math.max(...ppGetPublicationsAffiliation)
      );
      getAffiliations[i] = ppGetAffiliations[indexAffiliation];
      ppGetPublicationsAffiliation.splice(indexAffiliation, 1);
      i++;
    }

    dispatch({
      type: "SUCCESS_FIRST_ANALYSIS",
      loading: false,
      payload: {
        getTopAuthors,
        getTopAuthorsName,
        getYears,
        getPublicationsYear,
        getAffiliations,
        getPublicationsAffiliation,
      },
    });
  } catch (e) {
    dispatch({
      type: "REJECTED_FIRST_GRADE",
    });
    console.log("Error in getFirstGrade: ", e);
  }
};
