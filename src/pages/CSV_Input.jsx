import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Alert, Button, Card } from "react-bootstrap";
import { Page } from "../components/Page";
import { UploadCSV } from "../components/UploadCSV";
import { FirstAnalysisGraphs } from "../components/FirstAnalysisGraphs";
import { SecondAnalysisGraphs } from "../components/SecondAnalysisGraphs";
import { ThirdAnalysisGraphs } from "../components/ThirdAnalysisGraphs";

export const CSV_Input = () => {
  const [showFirstAnalysis, setShowFirstAnalysis] = useState(true);
  const [showSecondAnalysis, setShowSecondAnalysis] = useState(false);
  const [showThirdAnalysis, setShowThirdAnalysis] = useState(false);
  const stateCSV = useSelector((stateCSV) => stateCSV.firstAnalysis);

  return (
    <Page title="CSV Input">
      <div style={{ marginTop: "115px" }}>
        {/* check if file has been loaded */}
        {stateCSV["fileLoaded"] === false && (
          <div>
            <Card bg="dark" className="border border-info rounded text-white">
              <Card.Title>Select a CSV File to Analyze</Card.Title>
              {/* Component that allows the user to upload a CSV file */}
              <UploadCSV />
              <br />
            </Card>
          </div>
        )}
        {/* Make sure file has been loaded */}
        {stateCSV["fileLoaded"] && (
          <div>
            <Card bg="light" className="border border-success rounded">
              <Card.Title>
                <Alert
                  style={{ alignItems: "center", width: "65%" }}
                  variant="success"
                  className="ml-auto mr-auto mt-3"
                >
                  <strong style={{ color: "black" }}>
                    CSV File Uploaded Successfully
                  </strong>
                </Alert>
              </Card.Title>
              {/* Show First Analysis */}
              {!showFirstAnalysis && (
                <Button
                  onClick={() => setShowFirstAnalysis(!showFirstAnalysis)}
                  className="mb-3 mr-auto ml-auto"
                  variant="outline-dark"
                >
                  Show First Anaylsis
                </Button>
              )}
              {/* Hide First Analysis */}
              {showFirstAnalysis && (
                <div>
                  <Button
                    onClick={() => setShowFirstAnalysis(!showFirstAnalysis)}
                    className="mb-3"
                    variant="outline-danger"
                  >
                    Hide First Anaylsis
                  </Button>
                  <FirstAnalysisGraphs />
                </div>
              )}
              {/* Show Second Analysis */}
              {!showSecondAnalysis && (
                <Button
                  onClick={() => setShowSecondAnalysis(!showSecondAnalysis)}
                  className="mb-3 ml-auto mr-auto"
                  variant="outline-dark"
                >
                  Show Second Anaylsis
                </Button>
              )}
              {/* Hide Second Analysis */}
              {showSecondAnalysis && (
                <div>
                  <Button
                    onClick={() => setShowSecondAnalysis(!showSecondAnalysis)}
                    className="mb-3"
                    variant="outline-danger"
                  >
                    Hide Second Anaylsis
                  </Button>
                  <SecondAnalysisGraphs />
                </div>
              )}
              {/* Show Third Analysis */}
              {!showThirdAnalysis && (
                <Button
                  onClick={() => setShowThirdAnalysis(!showThirdAnalysis)}
                  className="mb-3 ml-auto mr-auto"
                  variant="outline-dark"
                >
                  Show Third Anaylsis
                </Button>
              )}
              {/* Hide Third Analysis */}
              {showThirdAnalysis && (
                <div>
                  <Button
                    onClick={() => setShowThirdAnalysis(!showThirdAnalysis)}
                    className="mb-3"
                    variant="outline-danger"
                  >
                    Hide Third Anaylsis
                  </Button>
                  <ThirdAnalysisGraphs />
                </div>
              )}
            </Card>
          </div>
        )}
      </div>
    </Page>
  );
};
