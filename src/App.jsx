import { motion } from "framer-motion";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SystemInfo from "./components/SystemInfo";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

import "./App.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

function AnimatedSection({ children, variants = fadeUp }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <div className="desktop">
      <NavBar />

      <main>
        <AnimatedSection variants={fadeIn}>
          <Hero />
        </AnimatedSection>

        <AnimatedSection>
          <SystemInfo />
        </AnimatedSection>

        <AnimatedSection>
          <Projects />
        </AnimatedSection>

        <AnimatedSection>
          <Experience />
        </AnimatedSection>

        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
    </div>
  );
}

export default App;