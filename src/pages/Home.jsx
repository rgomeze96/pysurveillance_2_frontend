import React from "react";
import { Page } from "../components/Page";
import { Button, Card } from "react-bootstrap";

export const Home = () => {
  return (
    <div className="bg-light">
      <Page title="Home Page">
        <div style={{ maxWidth: "1000px" }} className="mx-auto bg-light">
          <h3>Welcome to Pysurveillance</h3>
          <h5>Your Research Partner</h5>
          <hr className="border border-dark" />

          <div className="card-group mx-auto rounded" style={{ width: "85%" }}>
            <div className="card bg-light mr-2 rounded border border-light">
              <img
                className="card-img-top rounded"
                src={`/images/scopus.jpg`}
                alt="scopus_image"
              />
              <div className="card-body rounded text-dark">
                <h5 className="card-title">Scopus™ Access</h5>
                <hr className="border border-dark" />
                <p className="card-text">
                  Click the button below to verify that you have access to the
                  Scopus™ Preview Database and if you do not already have one,
                  generate an API key to use with Pysurveillance.
                </p>
                <hr className="border border-dark" />
                <Button
                  className="mr-auto"
                  variant="outline-dark"
                  href="https://scopus.com"
                  target="blank"
                >
                  Go To Scopus™
                </Button>
                <hr className="border border-dark" />
              </div>
            </div>
            <div
              style={{ height: "100%" }}
              className="card bg-light mr-2 border border-light"
            >
              <img
                className="card-img-top rounded"
                src={`/images/pysurveillance_logo.jpg`}
                alt="pysurveillance_logo"
              />
              <div className="card-body rounded text-dark">
                <h5 className="card-title">What is Pysurveillance?</h5>
                <hr className="border border-dark" />
                <p className="card-text mb-3">
                  If you are new to using Pysurveillance, click the button below
                  to learn more about how our technology aims to support you in
                  your literature review process.
                </p>
                <hr className="border border-dark mt-3" />
                <Button
                  className="mr-auto"
                  variant="outline-dark"
                  href="https://scopus.com"
                  target="blank"
                >
                  Learn About Pysurveillance
                </Button>
                <hr className="border border-dark" />
              </div>
            </div>
            <div className="card bg-light border border-light">
              <img
                className="card-img-top"
                src={`/images/graph.jpg`}
                alt="graph_image"
              />
              <div className="card-body rounded text-dark">
                <h5 className="card-title">Our Analytical Process</h5>
                <hr className="border border-dark" />
                <p className="card-text">
                  Using this link, you can read further about the anaylsis we
                  perform on the research results. How to use our graphs and
                  anylsis in order to make your research process more efficient.
                </p>
                <hr className="border border-dark" />
                <Button
                  className="mr-auto"
                  variant="outline-dark"
                  href="https://scopus.com"
                  target="blank"
                >
                  Learn About Our Analysis
                </Button>
                <hr className="border border-dark" />
              </div>
            </div>
          </div>
          <hr className="border border-dark" />
          <div
            className="card-group bg-light mx-auto rounded"
            style={{ width: "85%" }}
          >
            <div className="card bg-light mr-2 rounded border border-light">
              <div className="card-body rounded text-dark">
                <h5 className="card-title">
                  Perform Analysis on Scopus™ Results
                </h5>
                <hr className="border border-dark" />
                <p className="card-text">
                  Click the button below in to run PySurveillance on the search
                  results given by the Scopus™ Database. The results used in our
                  analysis are the same results as if you were to search the
                  Scopus™ Database yourself
                </p>
                <hr className="border border-dark" />
                <Button className="mr-auto" variant="dark" href="/SearchScopus">
                  Query Scopus™ Database
                </Button>
                <hr className="border border-dark" />
              </div>
            </div>
            <div
              style={{ height: "100%" }}
              className=" bg-light mr-2  border border-light"
            >
              <div className="card-body rounded text-dark">
                <h5 className="card-title">Perform Analysis on CSV File</h5>
                <hr className="border border-dark" />
                <p className="card-text mb-3">
                  Click the button below if you have a CSV File to perform the
                  PySurveillance analysis on. PySurveillance requires that the
                  CSV File is generated by the Scopus™ database. Other CSV files
                  must be modified for PySurveillance.
                </p>
                <hr className="border border-dark" />
                <Button variant="dark" href="/CSV_Input">
                  Import Scopus™ CSV File
                </Button>
                <hr className="border border-dark" />
              </div>
            </div>
          </div>
          <hr className="border border-dark" />
        </div>
      </Page>
    </div>
  );
};
