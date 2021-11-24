import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
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
  };

  const updateFileInfo = (CSVFile) => {
    setFile(CSVFile);
    setFileEntered(true);
  };

  const sendFileForAnalysis = (e) => {
    e.preventDefault();
    dispatch(
      nlpAnalysis({
        fileFromState: file,
        searchParameters: searchParams,
      })
    );
  };

  return (
    <form>
      {fileEntered === false && (
        <div>
          <hr className="border-dark" />
          <Button style={{ width: "170px", height: "40px" }} variant="dark">
            <label style={{ cursor: "pointer" }} htmlFor="fileInput">
              Browse for CSV File
            </label>
          </Button>
          <hr className="border-dark" />
        </div>
      )}
      {fileEntered === true && (
        <div>
          <hr className="border border-success" />
          <Button style={{ width: "170px", height: "40px" }} variant="dark">
            <label style={{ cursor: "pointer" }} htmlFor="fileInput">
              Change CSV File
            </label>
          </Button>
          <div className="text-success">File Uploaded Successfully</div>
          <hr className="border border-success" />
        </div>
      )}
      {/* Input to Load CSV File */}
      <input
        required
        style={{
          opacity: "0",
          height: "0",
          width: "0",
        }}
        type="file"
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        onChange={(e) => updateFileInfo(e.target.files[0])}
        id="fileInput"
      />
      <label htmlFor="query">
        Filter Parameters for Natural Language Processing
      </label>
      <textarea
        required
        className="form-control col-8 mx-auto"
        id="query"
        name="query"
        onChange={(e) => updateParams(e.target.value)}
        rows="3"
      ></textarea>
      <div className="small">
        Enter word(s) you expect to be in the title of the scientific papers you
        want to be included in the analysis. If the title does not contain at
        least 1 of the word(s) that you entered, then the scientific paper will
        be exlcuded from the analysis, if you leave this blank then we will
        analyze the entire data set that you enter.
      </div>
      <Button variant="outline-dark" href="/analyticalprocess">
        Learn More Here
      </Button>
      {paramsEntered === false && (
        <div className="small text-danger">
          Without search parameters PySurveillance cannot utilize Natural
          Language Processing in the analysis
        </div>
      )}
      {fileEntered === false && (
        <div>
          <hr className="border-danger" />
          <Button
            disabled
            className="btn btn-danger mt-2"
            type="submit"
            onClick={(e) => sendFileForAnalysis(e)}
          >
            Perform Analysis
          </Button>
          <div className="small text-danger font-weight-bold">
            Without a CSV file there is nothing to analyze
          </div>
          <hr className="border-danger" />
        </div>
      )}
      {fileEntered === true && (
        <div>
          <hr className="border-success" />
          <Button
            className="btn btn-info mt-2"
            type="submit"
            onClick={(e) => sendFileForAnalysis(e)}
          >
            Perform Analysis
          </Button>
          <div className="small text-success">Now able to perform analysis</div>
          <hr className="border-success" />
        </div>
      )}
    </form>
  );
};
