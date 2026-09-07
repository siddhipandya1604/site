import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Siddhi Pandya </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            <br />
            I am an <span className="purple">Information Technology graduate </span>
            who builds AI products end to end — training models, wiring up
            <span className="purple"> LLM &amp; RAG systems</span>, shipping backends
            on the cloud, and turning raw data into dashboards people actually use.
            <br />
            <br />
            I love taking a vague problem and walking it all the way to something
            that works in production.
            <br />
            <br />
            I also build interactive explainers to make ML click — a{" "}
            <a
              className="purple"
              href="https://siddhipandya1604.github.io/ml-concepts-explorer/"
              target="_blank"
              rel="noreferrer"
            >
              Machine Learning Concepts Explorer
            </a>{" "}
            and an{" "}
            <a
              className="purple"
              href="https://siddhipandya1604.github.io/evaluation-metrics-explorer/"
              target="_blank"
              rel="noreferrer"
            >
              ML Evaluation Metrics Explorer
            </a>
            .
            <br />
            <br />
            Apart from building things, here is what keeps me busy!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> F1 Enthusiast
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Graphic Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Just Believe in yourself, You'll make it all one day"{" "}
          </p>
          <footer className="blockquote-footer">Siddhi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
