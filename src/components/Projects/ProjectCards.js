import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

/**
 * ProjectCards renders a single project / achievement card.
 *
 * @param {Object} props
 *  - imgPath: image shown at the top of the card
 *  - title: card title
 *  - description: card body text
 *  - ghLink: (optional) GitHub repository link
 *  - demoLink: (optional) live demo / deployed link
 *  - isBlog: (optional) when true, the demo button reads "View Blog"
 */
function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank" rel="noreferrer">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: props.ghLink ? "10px" : "0px" }}
          >
            <CgWebsite /> &nbsp;
            {props.isBlog ? "View Blog" : "Live Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
