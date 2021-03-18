import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import { Bar, Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";

export const FirstAnalysisGraphs = () => {
  const dispatch = useDispatch();
  const [fileUploaded, setFileUploaded] = useState(false);
  const firstState = useSelector((firstState) => firstState.firstAnalysis);

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
              {/* First graph of first analysis see reducer and actions for more details */}
              <Bar data={firstState.data} options={optionToSetAxes} />
            </Row>
            <Row>
              {/* Second graph of first analysis see reducer and actions for more details */}
              <Line data={firstState.data1} options={optionToSetAxes} />
            </Row>
            <Row>
              {/* Third graph of first analysis see reducer and actions for more details */}
              <Bar data={firstState.data2} options={optionToSetAxes} />
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};
