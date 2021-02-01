import React, { useState, useEffect } from "react";
import { Page } from "../components/Page";
import { CSV_Input } from "./CSV_Input";
import { NotFound } from "./NotFound";
import { A, useRoutes } from "hookrouter";
import { Button, Alert, Card } from "react-bootstrap";

const routes = {
  "/CSV_Input": () => <CSV_Input />,
};

export const Home = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [userArray, setUserArray] = useState([]);
  const match = useRoutes(routes);

  useEffect(() => {
    fetch("/api/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  return (
    <Page title="Home Page">
      <div style={{ marginTop: "130px" }}>
        <Card
          style={{ width: "60%" }}
          bg="secondary"
          text="white"
          className="ml-auto mr-auto border border-info rounded"
        >
          <Card.Body>
            <Card.Title>
              <strong>
                Choose whether to anaylze a CSV file to analyze or search the
                Scopus Database
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
