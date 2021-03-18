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
    scales: {
      yAxes: [
        {
          stacked: true,
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
        </div>
      </div>
    </div>
  );
};
