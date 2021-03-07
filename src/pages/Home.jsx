import React from "react";
import { Page } from "../components/Page";
import { Button, Card } from "react-bootstrap";

export const Home = () => {
  return (
    <Page title="Home Page">
      <div style={{ marginTop: "115px" }}>
        <Card
          style={{ width: "60%" }}
          bg="dark"
          text="white"
          className="ml-auto mr-auto border border-info rounded"
        >
          <Card.Body>
            <Card.Title>
              <strong>
                Choose whether to analyze a CSV file or use data from the Scopus
                Database
              </strong>
            </Card.Title>
            <Button variant="info" href="/CSV_Input">
              Import CSV File
            </Button>
            <Button className="ml-3" variant="info" href="/SearchScopus">
              Search Scopus
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Page>
  );
};
