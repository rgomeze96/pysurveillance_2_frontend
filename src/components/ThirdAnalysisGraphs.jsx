import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { saveAs } from "file-saver";

export const ThirdAnalysisGraphs = () => {
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

  const saveFirstGraph = (topAuthorsBasedOnSourcesGet) => {
    topAuthorsBasedOnSourcesGet.toBlob(function (blob) {
      saveAs(blob, "topAuthorsBasedOnSources.png");
    });
  };

  const saveGraph = () => {
    function fillCanvasBackgroundWithColor(canvas, color) {
      const getCanvas = canvas.getContext("2d");
      getCanvas.save();
      getCanvas.globalCompositeOperation = "destination-over";
      getCanvas.fillStyle = color;
      getCanvas.fillRect(0, 0, canvas.width, canvas.height);
      getCanvas.restore();
    }

    const topAuthorsBasedOnSourcesGet = document.getElementById(
      "topAuthorsBasedOnSources"
    );

    fillCanvasBackgroundWithColor(topAuthorsBasedOnSourcesGet, "white");

    saveFirstGraph(topAuthorsBasedOnSourcesGet);
  };

  return (
    <div>
      <div>
        <div>
          <Container>
            <Row>
              {/* Third Analysis Graph */}
              <Bar
                id="topAuthorsBasedOnSources"
                data={thirdState.data}
                options={optionToSetAxes}
              />
            </Row>
          </Container>
          <hr className="border-dark" />
          <Button onClick={() => saveGraph()} type="submit" variant="dark">
            Download Third Analysis Graphs
          </Button>
          <hr className="border-dark" />
        </div>
      </div>
    </div>
  );
};
