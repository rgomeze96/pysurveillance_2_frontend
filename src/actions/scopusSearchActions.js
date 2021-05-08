import axios from "axios";

export const getScopusJson = ({ scopusConfig }) => async (dispatch) => {
  try {
    dispatch({
      type: "AWAITING_SCOPUS_SEARCH",
    });

    const response = await axios.post(
      `http://localhost:5000/api/get_scopus/`,
      scopusConfig
    );
    console.log(response);

    dispatch({
      type: "SUCCESS_SCOPUS_SEARCH",
      loading: false,
    });
  } catch (err) {
    dispatch({
      type: "REJECTED_SCOPUS_SEARCH",
    });
  }
};
