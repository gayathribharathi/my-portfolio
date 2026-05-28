import "./Skills.css";
export default function Skills() {

  const skills = [

    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Python",
    "Git & GitHub"

  ];

  return (

    <section className="skills-page">

      <h1>
        My Skills
      </h1>

      <p className="skills-intro">

        I am currently learning and improving my skills
        in web development and frontend technologies.

      </p>

      <div className="skills-container">

        {skills.map((skill, index) => (

          <div
            key={index}
            className="skill-card"
          >

            {skill}

          </div>

        ))}

      </div>

    </section>
  );
}