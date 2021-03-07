import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { getFirstGrade } from "../actions/firstAnalysisActions";
import { getSecondAnalysis } from "../actions/secondAnalysisActions";
import { getThirdAnalysis } from "../actions/thirdAnalysisActions";

export const UploadCSV = () => {
  const dispatch = useDispatch();

  const sendFileForAnalysis = (e) => {
    dispatch(
      getFirstGrade({
        fileFromState: e.target.files[0],
      })
    );
    dispatch(
      getSecondAnalysis({
        fileFromState: e.target.files[0],
      })
    );
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
