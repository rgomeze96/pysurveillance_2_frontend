import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import { Bar, Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";

export const FirstAnalysisGraphs = () => {
  const dispatch = useDispatch();
  const [fileUploaded, setFileUploaded] = useState(false);
  const firstState = useSelector((firstState) => firstState.firstAnalysis);

  /* Options to make the graph look better 
    Options graph 1
  */
  const optionsGraph1 = {
    labels: {
      padding: 10,
    },
    title: {
      display: true,
      text: "Top Authors based on Publications",
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          scaleLabel: { display: true, labelString: "Number of Publications" },
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
  // Options graph 2
  const optionsGraph2 = {
    labels: {
      padding: 10,
    },
    title: {
      display: true,
      text: "Total Number of Publications based on Year",
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          scaleLabel: { display: true, labelString: "Number of Publications" },
        },
      ],
      xAxes: [
        {
          stacked: true,
          scaleLabel: { display: true, labelString: "Years" },
        },
      ],
    },
  };
  // Options for graph 3
  const optionsGraph3 = {
    labels: {
      padding: 10,
    },
    title: {
      display: true,
      text: "Top Affiliations based on Publications",
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          scaleLabel: { display: true, labelString: "Number of Publications" },
        },
      ],
      xAxes: [
        {
          stacked: true,
          scaleLabel: { display: true, labelString: "Affiliations" },
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
              <Bar data={firstState.data} options={optionsGraph1} />
            </Row>
            <hr className="border border-dark" />
            <Row>
              {/* Second graph of first analysis see reducer and actions for more details */}
              <Line data={firstState.data1} options={optionsGraph2} />
            </Row>
            <hr className="border border-dark" />
            <Row>
              {/* Third graph of first analysis see reducer and actions for more details */}
              <Bar data={firstState.data2} options={optionsGraph3} />
            </Row>
          </Container>
          <hr className="border border-dark" />
        </div>
      </div>
    </div>
  );
};
