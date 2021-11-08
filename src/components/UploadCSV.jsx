import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { getFirstGrade } from "../actions/firstAnalysisActions";
import { getSecondAnalysis } from "../actions/secondAnalysisActions";
import { getThirdAnalysis } from "../actions/thirdAnalysisActions";
import { nlpAnalysis } from "../actions/nlpAnalysisActions";

export const UploadCSV = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useState("");
  const [paramsEntered, setParamsEntered] = useState(false);
  const [file, setFile] = useState();
  const [fileEntered, setFileEntered] = useState(false);

  const updateParams = (params) => {
    setSearchParams(params);
    if (params.length > 0) {
      setParamsEntered(true);
    }
  }

  const updateFileInfo = (CSVFile) => {
    setFile(CSVFile);
    setFileEntered(true);
  }

  const sendFileForAnalysis = (e) => {
    e.preventDefault();

    dispatch(
      nlpAnalysis({
        fileFromState: file,
        searchParameters: searchParams
      })
    )

    // Get the data for the First Analysis using firstAnalysisActions.js
    //dispatch(
    //  getFirstGrade({
    //    fileFromState: file,
    //  })
    //);
    //// Get the data for the Second Analysis using secondAnalysisActions.js
    //dispatch(
    //  getSecondAnalysis({
    //    fileFromState: file,
    //  })
    //);
    //// Get the data for the Third Analysis using thirdAnalysisActions.js
    //dispatch(
    //  getThirdAnalysis({
    //    fileFromState: file,
    //  })
    //);
  };

  useEffect(() => {
    console.log(file, fileEntered, searchParams, paramsEntered)
  })

  return (
    <form>
      <Button style={{ width: "170px", height: "40px" }} variant="dark">
        <label style={{ cursor: "pointer" }} htmlFor="fileInput">
          Browse for CSV File
        </label>
      </Button>
      <hr />
      {/* Input to Load CSV File */}

      <input required
        style={{
          opacity: "0",
          height: "0",
          width: "0",
        }}
        type="file"
        accept=".csv"
        onChange={(e) => updateFileInfo(e.target.files[0])}
        id="fileInput"
      />
      <label htmlFor="query">Search Parameters</label>
      <textarea required
        className="form-control col-8 mx-auto"
        id="query"
        name="query"
        onChange={e => updateParams(e.target.value)}
        defaultValue='Enter words that you are expecting the title of the scientific papers to contain, if you leave this field how it is, it will return all of the results'
        rows="3"
      ></textarea>
      <br />
      <Button className="btn btn-info mt-2" type="submit" onClick={e => sendFileForAnalysis(e)}>
        Perform Analysis
      </Button>
    </form>
  );
};