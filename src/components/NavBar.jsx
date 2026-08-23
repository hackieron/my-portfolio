import { FaTerminal } from "react-icons/fa";

function Navbar() {
  return (
    <header className="topbar">
      <div className="brand">
        <FaTerminal size={18} />
        <span>kieron.dev</span>
      </div>

      <div className="topbar-status">
        <span className="status-dot"></span>
        <span>Available for work</span>
      </div>

      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;