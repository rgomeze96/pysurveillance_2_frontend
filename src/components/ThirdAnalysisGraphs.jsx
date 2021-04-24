import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Button, Card, Container, Row } from "react-bootstrap";
import { Bar, Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";

export const ThirdAnalysisGraphs = () => {
  const dispatch = useDispatch();
  const [fileUploaded, setFileUploaded] = useState(false);
  const thirdState = useSelector((thirdState) => thirdState.thirdAnalysis);

  /* Options to make the graph look better */
  const optionToSetAxes = {
    labels: {
      padding: 10,
    },
    title: {
      display: true,
      text: "Top Authors based on Number of Sources in which They Published",
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          scaleLabel: { display: true, labelString: "Number of Sources" },
        },
      ],
      xAxes: [
        {
          stacked: true,
          scaleLabel: { display: true, labelString: "Authors" },
        },
      ],
    },
  };

  return (
    <div>
      <div>
        <div>
          <Container>
            <Row>
              {/* Third Analysis Graph */}
              <Bar data={thirdState.data} options={optionToSetAxes} />
            </Row>
          </Container>
          <hr className="border border-dark" />
        </div>
      </div>
    </div>
  );
};
