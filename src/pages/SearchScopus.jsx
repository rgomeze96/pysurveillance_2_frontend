import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Alert, Button, Card } from "react-bootstrap";
import { Page } from "../components/Page";
import { UploadCSV } from "../components/UploadCSV";
import { ScopusInput } from "../components/ScopusInput";
import { FirstAnalysisGraphs } from "../components/FirstAnalysisGraphs";
import { SecondAnalysisGraphs } from "../components/SecondAnalysisGraphs";
import { ThirdAnalysisGraphs } from "../components/ThirdAnalysisGraphs";

export const SearchScopus = () => {
  const [showFirstAnalysis, setShowFirstAnalysis] = useState(true);
  const [showSecondAnalysis, setShowSecondAnalysis] = useState(false);
  const [showThirdAnalysis, setShowThirdAnalysis] = useState(false);
  const stateCSV = useSelector((stateCSV) => stateCSV.firstAnalysis);

  return (
    <div className="bg-light">
      <Page title="Search Scopus">
        <div style={{ textAlign: "center" }}>
          {/* check if file has been loaded */}
          {stateCSV["fileLoaded"] === false && (
            <div>
              <h2>Enter Search Parameters for Querying the Scopus™ Database</h2>
              <p>
                You can read the Search Tips by Scopus™,{" "}
                <a
                  target="blank"
                  href="https://dev.elsevier.com/sc_search_tips.html"
                >
                  here
                </a>
              </p>
              <hr className="border border-dark" />
              <ScopusInput />
              <p>
                Below you can go directly to the developer portal and get your
                API key, copy and paste into the form above.
              </p>
              <Button
                variant="outline-dark"
                target="_blank"
                href="https://dev.elsevier.com/apikey/manage"
              >
                Check My API Key
              </Button>
              <hr className="border border-dark" />
            </div>
          )}
        </div>
      </Page>
    </div>
  );
};
