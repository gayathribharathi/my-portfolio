import { useState } from "react";
import "./Projects.css";

import resumeImg from "./assets/resume.png";
import iotImg from "./assets/iot.png";
import portfolioImg from "./assets/portfolio.png";

export default function Projects() {

  const [selected, setSelected] = useState(null);

  const projects = [

    {
      title: "Resume Analyzer App",
      status: "Completed",
      tech: "React, Node",
      components: "Upload system, Analysis engine",
      image: resumeImg,
      github: "https://github.com/gayathribharathi/resume-analyzer",
      description: "Analyzes resumes and suggests improvements"
    },

    {
      title: "IoT Parking Collision Detection",
      status: "Group Project",
      tech: "Arduino, Sensors, IoT",
      components: "Sensors, Alert system",
      image: iotImg,
      github: "https://github.com/gayathribharathi/iot-parking-system",
      description: "Detects parking collisions using sensors"
    },

    {
      title: "Portfolio Website",
      status: "In Progress",
      tech: "React JS",
      components: "Navbar, Routing, Pages",
      image: portfolioImg,
      description: "Currently building a responsive personal portfolio website with projects, skills, contact form, and modern UI design."
    }

  ];

  return (

    <div className="projects-page">

      <h1>My Projects</h1>

      <div className="projects-container">

        {projects.map((p, i) => (

          <div key={i} className="project-card">

            <span className="status">{p.status}</span>

            <h2>{p.title}</h2>

            <p>{p.description}</p>

            {/* BUTTONS */}
            <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>

              {/* VIEW DETAILS */}
              <button
                onClick={() => setSelected(p)}
                style={{
                  padding: "8px 12px",
                  border: "none",
                  borderRadius: "8px",
                  background: "#5a189a",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                View Details
              </button>

              {/* GITHUB LINK */}
              {p.github ? (
  <a
    href={p.github}
    target="_blank"
    rel="noreferrer"
    style={{
      padding: "8px 12px",
      borderRadius: "8px",
      background: "white",
      color: "#5a189a",
      textDecoration: "none",
      fontWeight: "bold"
    }}
  >
    GitHub
  </a>
) : null}

            </div>

          </div>

        ))}

      </div>

      {/* MODAL */}

      {selected && (

        <div className="modal-overlay" onClick={() => setSelected(null)}>

          <div className="modal-box" onClick={(e) => e.stopPropagation()}>

            <h2>{selected.title}</h2>

            <img src={selected.image} className="modal-img" />

            <p><b>Tech:</b> {selected.tech}</p>

            <p><b>Components:</b> {selected.components}</p>

            <p>{selected.description}</p>

            <a
              href={selected.github}
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              Open GitHub
            </a>

            <br />

            <button onClick={() => setSelected(null)}>
              Close
            </button>

          </div>

        </div>

      )}

    </div>

  );
}