import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import TerminalWindow from "./TerminalWindow";

function Hero() {
  return (
    <section className="hero">
      <TerminalWindow />

      <div className="hero-content">
        <span className="eyebrow">
          FULL STACK DEVELOPER
        </span>

        <h2>
          I build modern web
          <span> applications.</span>
        </h2>

        <p>
          I specialize in building web applications using
          Laravel, React, and TypeScript.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button primary">
            View Projects
          </a>

          <a href="#contact" className="button secondary">
            Contact Me
          </a>
        </div>

        <div className="socials">
          <a
            href="#"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={19} />
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={19} />
          </a>

          <a
            href="mailto:your@email.com"
            aria-label="Email"
          >
            <FaEnvelope size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;