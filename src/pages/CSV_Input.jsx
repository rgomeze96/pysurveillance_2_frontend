import React, { useEffect, useState, useRef } from "react";
import { Page } from "../components/Page";
import { FirstAnalysisGraphs } from "../components/FirstAnalysisGraphs";
import { UploadCSV } from "../components/UploadCSV";
import { useSelector } from "react-redux";
import { Alert, Button, Card } from "react-bootstrap";

export const CSV_Input = () => {
  const [showFirstAnalysis, setShowFirstAnalysis] = useState(true);
  const stateCSV = useSelector((stateCSV) => stateCSV.firstAnalysis);

  return (
    <Page title="CSV Input">
      <div style={{ marginTop: "115px" }}>
        {stateCSV["fileLoaded"] === false && (
          <div>
            <Card bg="dark" className="border border-info rounded text-white">
              <Card.Title>Select a CSV File to Analyze</Card.Title>
              <UploadCSV />
              <br />
            </Card>
          </div>
        )}
        {stateCSV["fileLoaded"] && (
          <div>
            <Card bg="light" className="border border-success rounded">
              <Card.Title>
                <Alert
                  style={{ alignItems: "center", width: "65%" }}
                  variant="success"
                  className="ml-auto mr-auto mt-3"
                >
                  <strong>CSV File Uploaded Successfully</strong>
                </Alert>
              </Card.Title>
              {!showFirstAnalysis && (
                <Button
                  onClick={() => setShowFirstAnalysis(!showFirstAnalysis)}
                  className="mb-3 mr-auto ml-auto"
                  variant="success"
                >
                  Show First Anaylsis
                </Button>
              )}
              {!showFirstAnalysis && (
                <Button
                  onClick={() => setShowFirstAnalysis(!showFirstAnalysis)}
                  className="mb-3 ml-auto mr-auto"
                  variant="success"
                >
                  Show Second Anaylsis
                </Button>
              )}
              {showFirstAnalysis && (
                <div>
                  <FirstAnalysisGraphs />
                  <Button
                    onClick={() => setShowFirstAnalysis(!showFirstAnalysis)}
                    className="mb-3"
                    variant="warning"
                  >
                    Hide First Anaylsis
                  </Button>
                </div>
              )}
            </Card>
          </div>
        )}
      </div>
    </Page>
  );
};
