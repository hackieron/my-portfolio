import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SystemInfo from "./components/SystemInfo";

import "./App.css";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="desktop">
      <NavBar />

      <main>
        <Hero />
        <SystemInfo />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;