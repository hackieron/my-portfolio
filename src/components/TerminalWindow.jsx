function TerminalWindow() {
  return (
    <div className="terminal-window">
      <div className="window-header">
        <div className="window-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <span>terminal</span>
      </div>

      <div className="terminal-content">
        <p>
          <span className="mint">$</span> whoami
        </p>

        <h1>Kier Russel Albania</h1>

        <p>
          <span className="mint">$</span> role
        </p>

        <p className="terminal-value">
          Full Stack Developer
        </p>

        <p>
          <span className="mint">$</span> location
        </p>

        <p className="terminal-value">
          Philippines
        </p>

        <p>
          <span className="mint">$</span> status
        </p>

        <p className="terminal-value available">
          ● Open to opportunities
        </p>
      </div>
    </div>
  );
}

export default TerminalWindow;