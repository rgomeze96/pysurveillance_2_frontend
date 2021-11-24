import React from "react";
import { Page } from "../components/Page";

export const AnalyticalProcess = () => {
  return (
    <Page title="Contact">
      <div className="container text-center">
        <h1>PySurveillance Analytical Process</h1>
        <hr className="border-secondary" />
        <div className="row justify-content-center">
          <h3>Machine Learning (Natural Language Processing)</h3>
          <p>
            Machine Learning and other forms of AI are the future when it comes
            to analyzing data and perform high quality research. In order for
            PySurveillance to be relevant in 2021 we have implemented Natural
            Language Processing in our analytical process. When doing research a
            researcher normally has a good idea of what to expect in respect to
            the scientific papers. For example if a researcher is trying to find
            research material that has to do with deep learning, they are not
            looking for scientific papers that do not mention or reference deep
            learning. In order to efficiently filter the research material
            provided to PySurveillance, we have the researcher enter in any or
            all words that the researcher expects the scientific papers to have
            in their title. ie) deep learning, machine learning, artificial
            intelligence. PySurveillance then analyzes each word entered,
            removes any punctuaction and stopwords and then removes any
            scientific paper that does not contain at least 1 of the words
            entered by the researcher.
          </p>
        </div>
        <hr className="border-secondary" />
        <div className="row justify-content-center">
          <h3>First-Grade Analysis</h3>
          <p>
            The first-grade analysis provided by PySurveillance, analyzes the
            amount of publications for a few variables. The first being the
            amount of total publications there are on a per year basis, this
            gives the researcher an idea if there is still research material
            being published or what years the topic has been published most.
            Another variable that is analyzed, is the number of published
            scientific papers in the research material by every author that
            appears in the research material. Also PySurveillance analyzes how
            many published scientific papers there are in the research material
            by each affiliation or source in which the scientific papers are
            published. After the analysis is performed, PySurveillance provides
            the researcher with 3 easy-to-read graphs showing the number of
            publications per year, per author and per affiliation. The graphs
            contain the 20 authors, affiliations and years which have the most
            amount of publications.
          </p>
        </div>
        <hr className="border-secondary" />
        <div className="row justify-content-center">
          <h3>Second-Grade Analysis</h3>
          <p>
            {" "}
            After the first-grade analysis, the researcher now knows where there
            is the most research material given the year, author and affiliation
            in which they are published. The second-grade analysis now utilizes
            2 variables to performa further analysis on the research material.
            The first being the author, the source or the scientific paper
            itself and the second variable that is utilized, is the number of
            citations. When analyzing research material, citations is the most
            significant indicator of quality. PySurveillance then organizes and
            sorts the research material taking into account the number of
            citations. After the analysis is finished, PySurveillance provides
            the researcher 3 easy-to-read graphs that plot the 20 authors,
            sources and scientific papers with the highest amount of citations
            in the research material. This allows the researcher to summarize
            and understand which authors, scientific papers and sources are of
            the highest quality given their search parameters.
          </p>
        </div>
        <hr className="border-secondary" />
        <div className="row justify-content-center">
          <h3>Third-Grade Analysis</h3>
          <p>
            The third-grade analysis will now utilize 3 variables in order to
            complete the analysis. The 3 variables are, the author, the source
            and analyzing the amount of sources in which each author appears.
            This 3-variable analysis provides a deeper analysis that can provide
            the researcher with more high quality research to investigate
            further. It is inherently difficult to get a scientific paper
            approved for publication in academic journals that are of high
            quality. Given this understanding, by analyzing the amount of
            academic journals, sources or affiliations in which authors appear,
            PySurveillance is able to provide the researcher with authors that
            might not have the highest amount of publications or the most
            popular as far as citations, but if their work has been published in
            multiple sources then this is a strong indicator that the author
            published high quality research material. If this is the case, then
            the researcher may be inclined to further investigate research
            published by such an author. This third-grade analyiss is plotted on
            a single easy-to-read graph that the researcher can analyze and see
            if there are new authors appear to investigate further.
          </p>
        </div>
      </div>
    </Page>
  );
};
