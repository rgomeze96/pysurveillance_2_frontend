import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row } from "react-bootstrap";
import { Bar, Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { saveAs } from "file-saver";

export const FirstAnalysisGraphs = () => {
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
          scaleLabel: { display: true, labelString: "Affiliation" },
        },
      ],
    },
  };

  const saveFirstGraph = (topAuthorsPerPublicationsGet) => {
    topAuthorsPerPublicationsGet.toBlob(function (blob) {
      saveAs(blob, "topAuthorsPerPublications.png");
    });
  };

  const saveSecondGraph = (totalNumPublicationsPerYearGet) => {
    totalNumPublicationsPerYearGet.toBlob(function (blob) {
      saveAs(blob, "totalNumPublicationsPerYear.png");
    });
  };

  const saveThirdGraph = (topAffiliationsPerPublicationsGet) => {
    topAffiliationsPerPublicationsGet.toBlob(function (blob) {
      saveAs(blob, "topAffiliationsPerPublications.png");
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

    const topAuthorsPerPublicationsGet = document.getElementById(
      "topAuthorsPerPublications"
    );
    const totalNumPublicationsPerYearGet = document.getElementById(
      "totalNumPublicationsPerYear"
    );
    const topAffiliationsPerPublicationsGet = document.getElementById(
      "topAffiliationsPerPublications"
    );

    fillCanvasBackgroundWithColor(topAuthorsPerPublicationsGet, "white");
    fillCanvasBackgroundWithColor(totalNumPublicationsPerYearGet, "white");
    fillCanvasBackgroundWithColor(topAffiliationsPerPublicationsGet, "white");

    saveFirstGraph(topAuthorsPerPublicationsGet);
    setTimeout(() => {}, 3000);
    saveSecondGraph(totalNumPublicationsPerYearGet);
    setTimeout(() => {}, 3000);
    saveThirdGraph(topAffiliationsPerPublicationsGet);
  };

  return (
    <div>
      <div>
        <div>
          <Container>
            <Row>
              {/* First graph of first analysis see reducer and actions for more details */}
              <Bar
                bg="light"
                id="topAuthorsPerPublications"
                data={firstState.data}
                options={optionsGraph1}
              />
            </Row>
            <hr className="border-dark" />
            <Row>
              {/* Second graph of first analysis see reducer and actions for more details */}
              <Line
                id="totalNumPublicationsPerYear"
                data={firstState.data1}
                options={optionsGraph2}
              />
            </Row>
            <hr className="border-dark" />
            <Row>
              {/* Third graph of first analysis see reducer and actions for more details */}
              <Bar
                bg="light"
                id="topAffiliationsPerPublications"
                data={firstState.data2}
                options={optionsGraph3}
              />
            </Row>
          </Container>
          <hr className="border-dark" />
          <Button onClick={() => saveGraphs()} type="submit" variant="dark">
            Download First Analysis Graphs
          </Button>
          <hr className="border-dark" />
        </div>
      </div>
    </div>
  );
};
