import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Button, Card, Container, Row } from "react-bootstrap";
import { Bar, Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";

export const SecondAnalysisGraphs = () => {
  const dispatch = useDispatch();
  const [fileUploaded, setFileUploaded] = useState(false);
  const secondState = useSelector((secondState) => secondState.secondAnalysis);

  /* Options to make the graph look better */
  const optionToSetAxes = {
    labels: {
      padding: 10,
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          scaleLabel: { display : true, labelString: 'Number of Citations'}, 
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
              {/* First graph of second analysis see reducer and actions for more details */}
              <Bar data={secondState.data} options={optionToSetAxes} />
            </Row>
            <Row>
              {/* Second graph of second analysis see reducer and actions for more details */}
              <Line data={secondState.data1} options={optionToSetAxes} />
            </Row>
            <Row>
              {/* Third graph of second analysis see reducer and actions for more details */}
              <Bar data={secondState.data2} options={optionToSetAxes} />
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};
