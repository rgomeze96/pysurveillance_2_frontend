import React from "react";
import { Page } from "../components/Page";
import { Button, Col, Container, Jumbotron, Row } from "react-bootstrap";

export const Home = () => {
  return (
    <div className="bg-light">
      <Page title="Home Page">
        <div style={{ maxWidth: "1000px" }} className="mx-auto bg-light">
          <h2>Welcome to Pysurveillance</h2>
          <h4>Your Literature Review Partner</h4>
          <hr className="border-dark" />
          <Jumbotron className="bg-light">
            <Container>
              <Row>
                <Col lg={4} xs={12}>
                  <img
                    src={`/images/pysurv_logo_bright_1.png`}
                    alt="pySurveillance_logo"
                    width="300"
                    height="300"
                  />
                </Col>
                <Col>
                  <hr className="border-dark" />
                  <h4>Perform a Pysurveillance Analysis</h4>
                  <Button
                    className="mr-auto"
                    variant="dark"
                    href="/SearchScopus"
                  >
                    Query Scopus™ Database
                  </Button>
                  <Button className="ml-2" variant="dark" href="/CsvInput">
                    Import Scopus™ CSV File
                  </Button>
                  <hr className="border-dark" />
                  <h4>What is PySurveillance?</h4>
                  <p className="lead">
                    Tired of spending countless hours going through pages and
                    pages of results trying to find relevant scientific papers?
                    With PySurveillance we will analyze and provide you with the
                    most relevant results from the Scopus™ Database and show you
                    these results in easy to read graphs that you can download
                    for future use.
                    <i> PySurveillance</i> will help you invest your valuable
                    time during your research process in order to decrease the
                    amount of time needed to acquire meaningful research
                    material.
                  </p>
                </Col>
              </Row>
            </Container>
            <hr className="border-dark" />
            <Container>
              <Row>
                <Col lg={4} xs={12}>
                  <img
                    className="rounded"
                    src={`/images/graph.jpg`}
                    alt="graph_image"
                    width="300"
                    height="300"
                  />
                </Col>
                <Col>
                  <h4>Our Analytical Process</h4>
                  <p className="lead">
                    <i>PySurveillance</i> provides an in-depth analysis of
                    results provided by the Scopus™ Database and utilizes
                    Machine Learning (Natural Language Processing) to filter the
                    results so you can only include the research material that
                    is relevant to your research. You can either download the
                    results from the Scopus™ website or perform a search query
                    on the Scopus™ Database directly from <i>PySurveillance</i>.
                    In order to learn more about how we provide you with the
                    most relevant results, click the button beloiw
                  </p>
                  <Button
                    className="mr-auto"
                    variant="outline-dark"
                    href="/analyticalprocess"
                  >
                    Learn About Our Analysis
                  </Button>
                </Col>
              </Row>
            </Container>
            <hr className="border-dark" />
            <Container>
              <Row>
                <Col lg={4} xs={12}>
                  <img
                    className="card-img-top rounded"
                    src={`/images/scopus.jpg`}
                    alt="scopus_image"
                    width="300"
                    height="250"
                  />
                </Col>
                <Col>
                  <h4>Using the Scopus™ Database</h4>
                  <p className="lead">
                    Below you can go directly to the Scopus™ website in order to
                    check if you have access to the Scopus™ Database.
                  </p>
                  <Button
                    className="mr-auto"
                    variant="outline-dark"
                    href="https://scopus.com"
                    target="blank"
                  >
                    Go To Scopus™
                  </Button>
                </Col>
              </Row>
            </Container>
            <hr className="border-dark" />
          </Jumbotron>
        </div>
        <hr className="border-dark" />
      </Page>
    </div>
  );
};
