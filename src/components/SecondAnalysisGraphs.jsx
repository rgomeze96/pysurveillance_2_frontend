import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Button, Card, Container, Row } from "react-bootstrap";
import { Bar, Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { saveAs } from "file-saver";

export const SecondAnalysisGraphs = () => {
  const dispatch = useDispatch();
  const [fileUploaded, setFileUploaded] = useState(false);
  const secondState = useSelector((secondState) => secondState.secondAnalysis);

  /* Options to make the graph look better */
  const optionsGraph1 = {
    labels: {
      padding: 10,
    },
    title: {
      display: true,
      text: "Top Authors based on Number of Citations",
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          scaleLabel: { display: true, labelString: "Number of Citations" },
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
  const optionsGraph2 = {
    labels: {
      padding: 10,
    },
    title: {
      display: true,
      text: "Top Sources based on Number of Citations",
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          scaleLabel: { display: true, labelString: "Number of Citations" },
        },
      ],
      xAxes: [
        {
          stacked: true,
          scaleLabel: { display: true, labelString: "Source Title" },
        },
      ],
    },
  };
  const optionsGraph3 = {
    labels: {
      padding: 10,
    },
    title: {
      display: true,
      text: "Top Papers based on Number of Citations",
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          scaleLabel: { display: true, labelString: "Number of Citations" },
        },
      ],
      xAxes: [
        {
          stacked: true,
          scaleLabel: { display: true, labelString: "Paper Title" },
        },
      ],
    },
  };

  const saveFirstGraph = (topAuthorsPerCitationsGet) => {
    topAuthorsPerCitationsGet.toBlob(function (blob) {
      saveAs(blob, "topAuthorsPerCitations.png");
    });
  };

  const saveSecondGraph = (topSourcesPerCitationsGet) => {
    topSourcesPerCitationsGet.toBlob(function (blob) {
      saveAs(blob, "topSourcesPerCitations.png");
    });
  };

  const saveThirdGraph = (topPapersPerCitationsGet) => {
    topPapersPerCitationsGet.toBlob(function (blob) {
      saveAs(blob, "topPapersPerCitations.png");
    });
  };

  const saveGraphs = () => {
    function fillCanvasBackgroundWithColor(canvas, color) {
      const getCanvas = canvas.getContext("2d");
      getCanvas.save();
      getCanvas.globalCompositeOperation = "destination-over";
      getCanvas.fillStyle = color;
      getCanvas.fillRect(0, 0, canvas.width, canvas.height);
      getCanvas.restore();
    }

    const topAuthorsPerCitationsGet = document.getElementById(
      "topAuthorsPerCitations"
    );
    const topSourcesPerCitationsGet = document.getElementById(
      "topSourcesPerCitations"
    );
    const topPapersPerCitationsGet = document.getElementById(
      "topPapersPerCitations"
    );

    fillCanvasBackgroundWithColor(topAuthorsPerCitationsGet, "white");
    fillCanvasBackgroundWithColor(topSourcesPerCitationsGet, "white");
    fillCanvasBackgroundWithColor(topPapersPerCitationsGet, "white");

    saveFirstGraph(topAuthorsPerCitationsGet);
    setTimeout(() => {}, 3000);
    saveSecondGraph(topSourcesPerCitationsGet);
    setTimeout(() => {}, 3000);
    saveThirdGraph(topPapersPerCitationsGet);
  };

  return (
    <div>
      <div>
        <div>
          <Container>
            <Row>
              {/* First graph of second analysis see reducer and actions for more details */}
              <Bar
                id="topAuthorsPerCitations"
                data={secondState.data}
                options={optionsGraph1}
              />
            </Row>
            <hr className="border border-dark" />
            <Row>
              {/* Second graph of second analysis see reducer and actions for more details */}
              <Line
                id="topSourcesPerCitations"
                data={secondState.data1}
                options={optionsGraph2}
              />
            </Row>
            <hr className="border border-dark" />
            <Row>
              {/* Third graph of second analysis see reducer and actions for more details */}
              <Bar
                id="topPapersPerCitations"
                data={secondState.data2}
                options={optionsGraph3}
              />
            </Row>
          </Container>
          <hr className="border border-dark" />
          <Button onClick={() => saveGraphs()} type="submit" variant="dark">
            Download Second Analysis Graphs
          </Button>
          <hr className="border border-dark" />
        </div>
      </div>
    </div>
  );
};
