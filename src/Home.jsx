import myPhoto from "./assets/gayathri.jpg";
import resume from "./assets/resume.pdf";
import "./Home.css";

export default function Home() {

  return (

    <section className="home">

      {/* IMAGE */}

      <div className="home-image">

        <img
          src={myPhoto}
          alt="Gayathri"
        />

      </div>

      {/* INTRO */}

      <div className="home-content">

        <h1>
          Hi, I'm Gayathri Bharathi
        </h1>

        <h2>
          3rd Year CSE Student
        </h2>

        <p>
          I am currently pursuing Computer Science Engineering
          at Anand Institute of Higher Technology.
        </p>

        <p>
          I have basic knowledge in Python and a strong interest
          in Web Development and Frontend Technologies.
        </p>

        <p>
          Currently learning React JS and building modern
          responsive web applications.
        </p>

        <a
  href={resume}
  download
  style={{
    padding: "12px 20px",
    background: "#9d4edd",
    color: "white",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold"
  }}
>
  Download Resume
</a>

      </div>

    </section>
  );
}