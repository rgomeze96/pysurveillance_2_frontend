import React from "react";
import { Page } from "../components/Page";
import { Jumbotron } from "react-bootstrap";

export const Contact = () => {
  return (
    <Page title="Contact">
      <Jumbotron className="bg-light">
        <h1>Contact Us</h1>
        <p>
          You can Elizabeth Suescún for further information about PySurveillance
          at: <b>esuescu1@eafit.edu.co</b>
        </p>
        <p>
          Team Members: Julen Cestero, David Velasquez, Elizabeth Suescún,
          Rafael Gomez, Sara Rodríguez
        </p>
      </Jumbotron>
    </Page>
  );
};
