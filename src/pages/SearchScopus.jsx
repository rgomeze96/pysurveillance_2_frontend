import React from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { Page } from "../components/Page";
import { ScopusInput } from "../components/ScopusInput";

export const SearchScopus = () => {
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
              <div className="small">
                The API key is required by Scopus™ in order to access their
                database and retrieve the research material. Without a valid API
                Key you cannot utilize this part of PySurveillance. If you have
                access to the Scopus™ website, you can perform your search query
                there and download a CSV file with all of the research material.
                You can then upload the CSV file and perform a PySurveillance
                analysis.
              </div>
              <hr className="border border-dark" />
            </div>
          )}
        </div>
      </Page>
    </div>
  );
};
