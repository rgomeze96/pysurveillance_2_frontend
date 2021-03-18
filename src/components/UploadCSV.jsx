import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { getFirstGrade } from "../actions/firstAnalysisActions";
import { getSecondAnalysis } from "../actions/secondAnalysisActions";
import { getThirdAnalysis } from "../actions/thirdAnalysisActions";

export const UploadCSV = () => {
  const dispatch = useDispatch();

  const sendFileForAnalysis = (e) => {
    // Get the data for the First Analysis using firstAnalysisActions.js
    dispatch(
      getFirstGrade({
        fileFromState: e.target.files[0],
      })
    );
    // Get the data for the Second Analysis using secondAnalysisActions.js
    dispatch(
      getSecondAnalysis({
        fileFromState: e.target.files[0],
      })
    );
    // Get the data for the Third Analysis using thirdAnalysisActions.js
    dispatch(
      getThirdAnalysis({
        fileFromState: e.target.files[0],
      })
    );
  };

  return (
    <div>
      <Button style={{ width: "170px" }} variant="info">
        <label style={{ color: "white" }} htmlFor="fileInput" className="btn">
          Select CSV File
        </label>
        {/* Input to Load CSV File */}
        <input
          style={{
            opacity: "0",
            height: "0",
            width: "0",
          }}
          type="file"
          accept=".csv"
          onChange={(e) => sendFileForAnalysis(e)}
          id="fileInput"
        />
      </Button>
    </div>
  );
};
