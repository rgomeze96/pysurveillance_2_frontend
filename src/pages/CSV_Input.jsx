import React, { useEffect, useState, useRef } from "react";
import { Page } from "../components/Page";
import { parse } from "papaparse";
import { getFirstAnalysis } from "../actions/firstAnalysisActions";
import { useDispatch, useSelector } from "react-redux";
import { Bar, Line } from "react-chartjs-2";
import { Button, Container, Row, Card, Alert } from "react-bootstrap";
import Axios from "axios";
import { getFirstGrade } from "../actions/firstAnalysisFileActions";

export const CSV_Input = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileStatus, setFileStatus] = useState(false);
  const authors_from_file = [];
  const years_from_file = [];
  const affiliations_from_file = [];
  const cited_by_paper_from_file = [];
  const paper_titles_from_file = [];
  const sources_from_file = [];
  const firstState = useSelector((firstState) => firstState.firstAnalysis);
  const [firstToggle, setFirstToggle] = useState(true);
  const [showFirstAnalysis, setShowFirstAnalysis] = useState(false);
  const [notFirstLoad, setNotFirstLoad] = useState(false);

  useEffect(() => {
    data.map(
      (element, index) => (
        (authors_from_file[index] = element["Authors"]),
        (years_from_file[index] = element["Year"]),
        (affiliations_from_file[index] = element["Affiliations"]),
        (cited_by_paper_from_file[index] = element["Cited by"]),
        (paper_titles_from_file[index] = element["Title"]),
        (sources_from_file[index] = element["Source title"])
      )
    );
    authors_from_file.pop();
    years_from_file.pop();
    affiliations_from_file.pop();
    cited_by_paper_from_file.pop();
    paper_titles_from_file.pop();
    sources_from_file.pop();
  }, [data]);

  useEffect(() => {}, [fileStatus]);

  const sendFileForFirstAnalysis = (e) => {
    dispatch(
      getFirstGrade({
        fileFromState: e.target.files[0],
      })
    );
    setFileUploaded(true);
    setFirstToggle(false);
    setShowFirstAnalysis(true);
    setNotFirstLoad(true);
  };

  const apiFirstAnalysis = (
    authors_from_file,
    years_from_file,
    affiliations_from_file
  ) => {
    setFirstToggle(false);
    setShowFirstAnalysis(true);
    setNotFirstLoad(true);
    dispatch(
      getFirstAnalysis({
        authors: authors_from_file,
        years: years_from_file,
        affiliations: affiliations_from_file,
      })
    );
  };

  const uploadFileHandler = (e) => {
    var reader = new FileReader();
    reader.onload = function () {
      const text = reader.result;
      const result = parse(text, { header: true });
      setData((existingState) => [...existingState, ...result.data]);
    };
    reader.readAsText(e.target.files[0]);
  };

  const optionToSetAxes = {
    labels: {
      padding: 10,
    },
    scales: {
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  return (
    <Page title="CSV Input">
      <div style={{ marginTop: "135px" }}>
        {fileUploaded === false && (
          <Card
            style={{ width: "60%" }}
            bg="secondary"
            text="white"
            className="ml-auto mr-auto"
          >
            <Card.Body>
              <Card.Title>
                <strong>Select a CSV file to upload for analysis</strong>
              </Card.Title>
              <Button
                onClick={() => setFileStatus(true)}
                style={{ width: "170px" }}
                variant="outline-info"
              >
                <label
                  style={{ color: "white" }}
                  htmlFor="fileInput"
                  className="btn"
                >
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
            </Card.Body>
          </Card>
        )}
        {fileUploaded === true && (
          <div>
            <Alert variant="success">
              <strong>CSV File Uploaded Successfully</strong>

              {firstToggle && (
                <Button
                  className="mx-auto"
                  variant="outline-success"
                  onClick={() =>
                    apiFirstAnalysis(
                      { authors_from_file },
                      { years_from_file },
                      { affiliations_from_file }
                    )
                  }
                >
                  Run Analysis
                </Button>
              )}
            </Alert>
            <Container>
              <Row>
                {showFirstAnalysis && (
                  <Bar data={firstState.data} options={optionToSetAxes} />
                )}
              </Row>
              <Row>
                {showFirstAnalysis && (
                  <Line data={firstState.data1} options={optionToSetAxes} />
                )}
              </Row>
              <Row>
                {showFirstAnalysis && (
                  <Bar data={firstState.data2} options={optionToSetAxes} />
                )}
              </Row>
            </Container>
            {!showFirstAnalysis && notFirstLoad && (
              <Button
                variant="outline-info"
                onClick={() => setShowFirstAnalysis(true)}
              >
                Show First Analysis
              </Button>
            )}
            {showFirstAnalysis && (
              <Button
                className="mb-5"
                variant="outline-danger"
                onClick={() => setShowFirstAnalysis(false)}
              >
                Hide First Analysis
              </Button>
            )}
          </div>
        )}
      </div>
    </Page>
  );
};
