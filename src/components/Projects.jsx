function Projects() {
    const projects = [
        {
            number: "01",
            title: "Personal Stuff Tracker(WIP)",
            description:
                "A household management application for tracking personal belongings, chores, expenses, groceries, and household events in one centralized dashboard.",
            tech: ["Laravel", "React Native", "MySQL", "REST API"],
            status: "IN DEVELOPMENT",
            github: "https://github.com/hackieron/inventory-app",
            demo: null,
        },
        {
            number: "02",
            title: "DenDB - Dental Appointment Website",
            description:
                "An online dental appointment website with automatic service pricing and availability feature.",
            tech: ["WordPress", "PHP", "HTML + CSS"],
            status: "COMPLETED",
            github: "https://dev-dendb.pantheonsite.io/",
            demo: null,
        },
        {
            number: "03",
            title: "Student Grading System",
            description:
                "A grading management system for handling students, subjects, grades, and access-controlled academic records. Includes a teacher's leave and approval module.",
            tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
            status: "COMPLETED",
            github: "https://github.com/hackieron/student_portal",
            demo: null,
        },
        {
            number: "04",
            title: "Courseer",
            description:
                "A Mobile College Program Recommendation App for Graduating Senior High School Students. This uses TF-IDF(Term Frequency–Inverse Document Frequency) logic. Using a wordbank API paired with an archive of Existing College Programs.",
            tech: ["Kotlin", "XML", "SQLite", "Firebase"],
            status: "COMPLETED",
            github: "https://github.com/hackieron/CourSeerNew",
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
                                        VIEW
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