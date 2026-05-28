import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {

  return (

    <nav className="navbar">

      {/* LEFT */}

      <div className="logo">
        Developer
      </div>

      {/* RIGHT */}

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/skills">Skills</Link>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

    </nav>
  );
}