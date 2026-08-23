function Experience() {
  return (
    <section className="experience-panel" id="experience">
      <div className="panel-title">
        <span className="mint">●</span>
        EXPERIENCE
      </div>

      <div className="experience-list">

        {/* NCMH */}
        <article className="experience-item">
          <div className="experience-header">
            <div>
              <h3>Mid-Level Web Developer</h3>
              <span className="company">
                National Center for Mental Health
              </span>
            </div>

            <span className="date">
              Aug 2024 — Present
            </span>
          </div>

          <ul className="experience-description">
            <li>
              Developed and maintained a full-stack HRIS using Laravel.
            </li>
            <li>
              Built Leave Filing & Approval, Payroll Processing, and User
              Management modules with role-based access control.
            </li>
            <li>
              Developed RESTful APIs and integrated responsive frontend
              components.
            </li>
            <li>
              Designed and optimized MySQL databases, queries, and
              relationships.
            </li>
            <li>
              Collaborated with stakeholders to implement features, resolve
              issues, and improve system functionality.
            </li>
            <li>
              Managed source code using Git, including branching and
              conflict resolution.
            </li>
          </ul>

          <div className="tech-list">
            <span>Laravel</span>
            <span>PHP</span>
            <span>React</span>
            <span>MySQL</span>
            <span>Docker</span>
            <span>REST API</span>
            <span>Git</span>

          </div>
        </article>


        {/* NCMH */}
        <article className="experience-item">
          <div className="experience-header">
            <div>
              <h3>Backend Web Developer</h3>
              <span className="company">
                Pixel8 Web Solutions & Consultancy
              </span>
            </div>

            <span className="date">
              Mar 2024 - Jun 2024
            </span>
          </div>

          <ul className="experience-description">
            <li>
              Developed and maintained RESTful backend APIs using PHP to support web application features and business processes
            </li>
            <li>
              Created and executed PHPUnit test cases to validate API functionality, ensuring code reliability and adherence to business requirements.
            </li>
            <li>
              Implemented API endpoints based on client-provided functional specifications and acceptance scenarios.
            </li>
            <li>
              Debugged, optimized, and maintained backend services to improve performance and resolve application issues
            </li>

          </ul>

          <div className="tech-list">
            <span>PHP Codeigniter</span>
            <span>Postman/Insomnia</span>
            <span>MySQL</span>
            <span>REST API</span>
            <span>Git</span>
          </div>
        </article>


      </div>
    </section>
  );
}

export default Experience;