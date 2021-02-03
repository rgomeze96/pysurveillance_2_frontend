import React from "react";
import { getFirstGrade } from "../actions/firstAnalysisFileActions";
import { useDispatch } from "react-redux";
import { Button, Card } from "react-bootstrap";

export const UploadCSV = () => {
  const dispatch = useDispatch();
  const sendFileForFirstAnalysis = (e) => {
    dispatch(
      getFirstGrade({
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
          onChange={(e) => sendFileForFirstAnalysis(e)}
          id="fileInput"
        />
      </Button>
    </div>
  );
};
