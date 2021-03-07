import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Button, Card, Container, Row } from "react-bootstrap";
import { Bar, Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";

export const SecondAnalysisGraphs = () => {
  const dispatch = useDispatch();
  const [fileUploaded, setFileUploaded] = useState(false);
  const secondState = useSelector((secondState) => secondState.secondAnalysis);

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
              <Bar data={secondState.data} options={optionToSetAxes} />
            </Row>
            <Row>
              <Line data={secondState.data1} options={optionToSetAxes} />
            </Row>
            <Row>
              <Bar data={secondState.data2} options={optionToSetAxes} />
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};
