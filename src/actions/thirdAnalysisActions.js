import axios from "axios";

export const getThirdAnalysis = ({ fileFromState }) => async (dispatch) => {
  try {
    dispatch({
      type: "AWAITING_THIRD_ANALYSIS",
    });

    const formData = new FormData();
    formData.append("file", fileFromState);
    console.log(formData);
    const response = await axios.post(`/api/third_grade/`, formData);

    const thirdAnalysisFromAPI = response.data["num_sources_per_author"];
    const allAuthorsPerSources = [];
    const numberOfSourcesPerAuthor = [];
    thirdAnalysisFromAPI.forEach((element) => {
      Object.keys(element).map((key) => {
        if (element[key] > 0) {
          allAuthorsPerSources.push(key);
          numberOfSourcesPerAuthor.push(element[key]);
        }
      });
    });

    const getNamesOfTopAuthPerSources = [];
    const getNumberOfSources = [];
    let i = 0;
    while (i < 20) {
      getNumberOfSources[i] = Math.max(...numberOfSourcesPerAuthor);
      let indexSources = numberOfSourcesPerAuthor.indexOf(
        Math.max(...numberOfSourcesPerAuthor)
      );
      getNamesOfTopAuthPerSources[i] = allAuthorsPerSources[indexSources];
      numberOfSourcesPerAuthor.splice(indexSources, 1);
      i++;
    }
    dispatch({
      type: "SUCCESS_THIRD_ANALYSIS",
      loading: false,
      payload: {
        getNamesOfTopAuthPerSources,
        getNumberOfSources,
      },
    });
  } catch (err) {
    dispatch({
      type: "REJECTED_THIRD_ANALYSIS",
    });
  }
};
