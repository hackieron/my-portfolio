function Projects() {
    const projects = [
        {
            number: "01",
            title: "Personal Stuff Tracker",
            description:
                "A household management application for tracking personal belongings, chores, expenses, groceries, and household events in one centralized dashboard.",
            tech: ["Laravel", "React", "MySQL", "REST API"],
            status: "IN DEVELOPMENT",
            github: "https://github.com/hackieron",
            demo: null,
        },
        {
            number: "02",
            title: "Employee Management System",
            description:
                "A web-based employee management system with CRUD operations, data tables, form validation, and asynchronous interactions.",
            tech: ["Laravel", "Blade", "Bootstrap", "MySQL", "AJAX"],
            status: "COMPLETED",
            github: "https://github.com/hackieron",
            demo: null,
        },
        {
            number: "03",
            title: "Leave Management System",
            description:
                "An employee leave management application featuring leave requests, approval workflows, role-based access, and administrative controls.",
            tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
            status: "COMPLETED",
            github: "https://github.com/hackieron",
            demo: null,
        },
        {
            number: "04",
            title: "Student Grading System",
            description:
                "A grading management system for handling students, subjects, grades, and access-controlled academic records.",
            tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
            status: "COMPLETED",
            github: "https://github.com/hackieron",
            demo: null,
        },
    ];

    return (
        <section className="projects-panel" id="projects">
            <div className="panel-title">
                <span className="mint">●</span>
                PROJECTS
            </div>

            <div className="projects-intro">
                <p>
                    A selection of projects I've built while exploring
                    full-stack development, application architecture, and
                    modern web technologies.
                </p>
            </div>

            <div className="projects-list">
                {projects.map((project) => (
                    <article className="project-item" key={project.number}>
                        <div className="project-number">
                            {project.number}
                        </div>

                        <div className="project-main">
                            <div className="project-header">
                                <h3>{project.title}</h3>

                                <span className="project-status">
                                    <span className="mint">●</span>
                                    {project.status}
                                </span>
                            </div>

                            <p className="project-description">
                                {project.description}
                            </p>

                            <div className="project-tech">
                                {project.tech.map((technology) => (
                                    <span key={technology}>
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            <div className="project-links">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        VIEW CODE
                                        <span>↗</span>
                                    </a>
                                )}

                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        LIVE DEMO
                                        <span>↗</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;