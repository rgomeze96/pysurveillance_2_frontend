import axios from "axios";

export const getScopusJson = ({ scopusConfig }) => async (dispatch) => {
  try {
    dispatch({
      type: "AWAITING_SCOPUS_SEARCH",
    });

    // Save data from CSV File Input
    let config = {
      headers: {
        Accept: "application/json",
        "X-ELS-APIKey": scopusConfig["apiKeyUser"],
      },
      params: { query: scopusConfig["query"], view: "COMPLETE", start: 0 },
    };

    const response = await axios.get(
      `https://api.elsevier.com/content/search/scopus`,
      config
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
