import React from "react";
import { Page } from "../components/Page";
import { Button, Card } from "react-bootstrap";

export const Home = () => {
  return (
    <Page title="Home Page">
      <div style={{ marginTop: "125px", width: "80%" }} className="mx-auto">
        <Card bg="light" className="border border-dark rounded mb-5">
          <Card.Body>
            <Card.Title style={{ fontSize: "25px" }}>
              Welcome to Pysurveillance!
              <br />
              <small>Your Research Partner</small>
              <hr className="border border-dark" />
            </Card.Title>
            <div className="card-group mx-auto" style={{ width: "85%" }}>
              <div className="card mr-2 border border-dark rounded">
                <img
                  className="card-img-top"
                  src={`/images/scopus.jpg`}
                  alt="scopus_image"
                />
                <div className="card-body bg-dark text-light">
                  <h5 className="card-title">Scopus Access</h5>
                  <hr className="border border-light" />
                  <p className="card-text">
                    Click the button below to verify that you have access to the
                    Scopus Preview Database and if you do not already have one,
                    generate an API key to use with Pysurveillance.
                  </p>
                </div>
                <div className="card-footer">
                  <Button
                    className="mr-auto"
                    variant="dark"
                    href="https://scopus.com"
                    target="blank"
                  >
                    Go To Scopus
                  </Button>
                </div>
              </div>
              <div className="card mr-2 border border-dark rounded">
                <img
                  className="card-img-top"
                  src={`/images/pysurveillance_logo.jpg`}
                  alt="pysurveillance_logo"
                />
                <div className="card-body bg-dark text-light">
                  <h5 className="card-title">What is Pysurveillance?</h5>
                  <hr className="border border-light" />
                  <p className="card-text">
                    If you are new to using Pysurveillance, click the button
                    below to learn more about how our technology aims to support
                    you in your literature review process.
                  </p>
                </div>
                <div className="card-footer">
                  <Button
                    className="mr-auto"
                    variant="dark"
                    href="https://scopus.com"
                    target="blank"
                  >
                    Learn About Pysurveillance
                  </Button>
                </div>
              </div>
              <div className="card border border-dark rounded">
                <img
                  className="card-img-top"
                  src={`/images/graph.jpg`}
                  alt="graph_image"
                />
                <div className="card-body bg-dark text-light">
                  <h5 className="card-title">Our Analytical Process</h5>
                  <hr className="border border-light" />
                  <p className="card-text">
                    Here we provide an in-depth description of the analysis that
                    we perform on the research data. It is important to
                    understand what our analysis provides in order to make the
                    most of our tool.
                  </p>
                </div>
                <div className="card-footer">
                  <Button
                    className="mr-auto"
                    variant="dark"
                    href="https://scopus.com"
                    target="blank"
                  >
                    Learn About Our Analysis
                  </Button>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card
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
