import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Untitleddesign from "../../Assets/Projects/Untitleddesign.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Achievements  </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={Untitleddesign}
              isBlog={false}
              title="ISRO Robotics Challenge (IRoC-U 2025) — Top 16 Finalist, Team AVIONIX"
              description="As part of Team AVIONIX from CHARUSAT University, I competed in the ISRO Robotics Challenge (IRoC-U 2025), hosted by the U R Rao Satellite Centre (URSC), ISRO. Out of 500+ teams nationwide, we advanced to the top 16 finalists — and were the only team selected from Gujarat. I contributed to building a prototype Unmanned Aerial Vehicle (UAV) designed for future planetary exploration missions, including Mars, translating theory into hardware under real engineering constraints. We presented and defended our work in front of ISRO scientists at URSC, Bengaluru. The journey also took me to New Delhi for National Meet 2.0 and National Space Day 2025, where I engaged with leading scientists, innovators, and policymakers — including an inspiring interaction with Group Captain Angad Pratap of India's Gaganyaan mission. It remains a defining milestone in my journey."
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Untitleddesign}
              isBlog={false}
              title="Research Publication — IJSAT"
              description="Author of 'An Integrated AI Platform for Resume Analysis, Document Generation, and Intelligent Job Matching', published in the International Journal on Science and Technology (IJSAT), Volume 17, Issue 1, Jan–Mar 2026."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Untitleddesign}
              isBlog={false}
              title="Google Data Analytics Professional Certificate"
              description="Completed the Google Data Analytics Professional Certificate on Coursera (2024) — an 8-course program covering the full analytics workflow: data cleaning, SQL, R, spreadsheets, Tableau, and data-driven storytelling."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Untitleddesign}
              isBlog={false}
              title="Google AI Essentials"
              description="Earned Google's AI Essentials certificate on Coursera (2024), covering practical generative-AI usage, effective prompting, and applying AI responsibly to speed up everyday work."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Untitleddesign}
              isBlog={false}
              title="Tableau & Power BI — DataCamp"
              description="Completed DataCamp's Tableau and Power BI tracks — building interactive dashboards, data models, and DAX measures to turn raw datasets into clear, decision-ready visual reports."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Untitleddesign}
              isBlog={false}
              title="Data Structures & Algorithms using Java — NPTEL"
              description="Cleared the NPTEL DSA using Java certification, strengthening core problem-solving across arrays, linked lists, trees, graphs, sorting, searching, and algorithmic complexity analysis."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Untitleddesign}
              isBlog={false}
              title="Database Management System — NPTEL"
              description="Earned the NPTEL DBMS certification, covering relational design, normalization, SQL, transactions, concurrency control, indexing, and query optimization."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Untitleddesign}
              isBlog={false}
              title="Operating System Fundamentals — NPTEL"
              description="Completed the NPTEL Operating System Fundamentals certification, covering processes and threads, CPU scheduling, synchronization, deadlocks, memory management, and file systems."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Untitleddesign}
              isBlog={false}
              title="Windows Forensics — Belkasoft"
              description="Certified in Windows Forensics by Belkasoft — acquiring and analyzing digital evidence from Windows artifacts, registry, and file systems using industry forensic tooling."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Untitleddesign}
              isBlog={false}
              title="AI for India 2.0 — GUVI x Skill India"
              description="Completed the AI for India 2.0 program by GUVI under Skill India Digital, building a hands-on foundation in Python and applied AI concepts."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
