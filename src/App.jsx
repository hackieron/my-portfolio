import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SystemInfo from "./components/SystemInfo";

import "./App.css";

function App() {
  return (
    <div className="desktop">
      <Navbar />

      <main>
        <Hero />
        <SystemInfo />
      </main>
    </div>
  );
}

export default App;