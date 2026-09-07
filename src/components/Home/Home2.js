import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/L.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// This is the Home2 component which displays an about section on the home page.
// It is a React functional component.
function Home2() {
  // The JSX code below is the return statement of the Home2 component.
  // It is a JSX expression which is syntactically similar to HTML, but it is actually a tree of React elements.
  return (
    // The outermost Container element is a fluid container which takes up the full width of its parent.
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* The first Row element is used to group content in a row. */}
        <Row>
          {/* The Col element is a responsive column which takes up the specified amount of space. */}
          <Col md={8} className="home-about-description">
            {/* The h1 element is used for main headings. */}
            <h1 style={{ fontSize: "2.6em" }}>
              {/* The text "LET ME INTRODUCE MYSELF" is displayed. */}
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            {/* The p element is used for paragraphs. */}
            <p className="home-about-body">
              {/* The text describing the person's background is displayed. */}
              I turn messy data and vague ideas into AI products that actually ship. 🚀
              <br />
              <br />
              I build with
              <i>
                {/* The text listing the person's interests is displayed. */}
                <b className="purple"> Python, SQL, FastAPI, LangChain </b>
              </i>
              and design
              <i>
                <b className="purple"> LLM &amp; RAG systems </b>
              </i>
              that run on
              <i>
                <b className="purple"> AWS </b>
              </i>
              — from real-time medical scribes to conversational analytics assistants.
              <br />
              <br />
              My sweet spot is where
              <i>
                <b className="purple"> Generative AI, </b> clean backend engineering
                and <b className="purple">data-driven decisions </b>
              </i>
              meet — shipping full-stack AI apps and dashboards that make complex things feel effortless.
              <br />
              <br />

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="L" />
            </Tilt>
          </Col>
        </Row>
        {/* The second Row element is used to group content in a row. */}
        <Row>
          {/* The Col element is a responsive column which takes up the specified amount of space. */}
          <Col md={12} className="home-about-social">
            {/* The h1 element is used for main headings. */}
            <h1>FIND ME ON</h1>
            {/* The p element is used for paragraphs. */}
            <p>
              {/* The text inviting the user to connect with the person is displayed. */}
              Feel free to <span className="purple">connect </span>with me
            </p>
            {/* The ul element is used for unordered lists. */}
            <ul className="home-about-social-links">
              {/* The first li element is used for list items. */}
              <li className="social-icons">
                {/* The a element is used for hyperlinks. */}
                <a
                  href="https://github.com/siddhipandya1604"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  {/* The AiFillGithub component is a custom component which displays a GitHub icon. */}
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=siddhipandya1604@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  {/* The AiOutlineMail component displays an email icon that opens Gmail compose. */}
                  <AiOutlineMail />
                </a>
              </li>
              {/* The second li element is used for list items. */}
              <li className="social-icons">
                {/* The a element is used for hyperlinks. */}
                <a
                  href="https://www.linkedin.com/in/siddhi-pandya-557515266/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  {/* The FaLinkedinIn component is a custom component which displays a LinkedIn icon. */}
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
