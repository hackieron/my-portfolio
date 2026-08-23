import { useState, useRef, useCallback, useLayoutEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SKILL_GROUPS = [
    {
        code: "FE",
        title: "Frontend",
        accent: "#5eead4",
        items: [
            { name: "React", icon: "react" },
            { name: "TypeScript", icon: "typescript" },
        ],
    },
    {
        code: "BE",
        title: "Backend",
        accent: "#fb7185",
        items: [
            { name: "PHP", icon: "php" },
            { name: "Laravel", icon: "laravel" },
            { name: "MySQL", icon: "mysql" },
        ],
    },
    {
        code: "TL",
        title: "Tools",
        accent: "#fbbf24",
        items: [
            { name: "Git", icon: "git" },
            { name: "Docker", icon: "docker" },
            {
                name: "VS Code",
                icon: "vscode",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
            },
            { name: "Postman", icon: "postman" },
        ],
    },
];

const pad = (n) => String(n).padStart(2, "0");

function SystemInfo() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const viewportRef = useRef(null);
    const cardRefs = useRef([]);
    const dragStartX = useRef(0);

    const updatePosition = useCallback(() => {
        const viewport = viewportRef.current;
        const card = cardRefs.current[activeIndex];
        if (!viewport || !card) return;
        const viewportWidth = viewport.offsetWidth;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        setTranslateX(viewportWidth / 2 - cardCenter);
    }, [activeIndex]);

    useLayoutEffect(() => {
        updatePosition();
        window.addEventListener("resize", updatePosition);
        return () => window.removeEventListener("resize", updatePosition);
    }, [updatePosition]);

    const goTo = (idx) => {
        setActiveIndex(Math.max(0, Math.min(SKILL_GROUPS.length - 1, idx)));
    };

    const handleKeyDown = (e) => {
        if (e.key === "ArrowRight") goTo(activeIndex + 1);
        if (e.key === "ArrowLeft") goTo(activeIndex - 1);
    };

    const handlePointerDown = (e) => {
        dragStartX.current = e.clientX;
        setIsDragging(true);
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e) => {
        if (!isDragging) return;
        setDragOffset(e.clientX - dragStartX.current);
    };

    const endDrag = () => {
        if (!isDragging) return;
        if (dragOffset < -60) goTo(activeIndex + 1);
        else if (dragOffset > 60) goTo(activeIndex - 1);
        setDragOffset(0);
        setIsDragging(false);
    };

    return (
        <section
            className="system-panel"
            id="skills"
            tabIndex={0}
            onKeyDown={handleKeyDown}
        >
            <style>{`
       
      `}</style>

            <div className="panel-header">
                <div className="panel-title">
                    <span className="mint">●</span>
                    TECHNICAL SKILLS
                </div>
                <div className="panel-controls">
                    <span className="index-readout">
                        {pad(activeIndex + 1)} / {pad(SKILL_GROUPS.length)}
                    </span>
                    <button
                        type="button"
                        className="nav-btn"
                        onClick={() => goTo(activeIndex - 1)}
                        disabled={activeIndex === 0}
                        aria-label="Previous skill group"
                    >
                        <ChevronLeft size={15} />
                    </button>
                    <button
                        type="button"
                        className="nav-btn"
                        onClick={() => goTo(activeIndex + 1)}
                        disabled={activeIndex === SKILL_GROUPS.length - 1}
                        aria-label="Next skill group"
                    >
                        <ChevronRight size={15} />
                    </button>
                </div>
            </div>

            <div
                className={`carousel-viewport${isDragging ? " is-dragging" : ""}`}
                ref={viewportRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={endDrag}
                onPointerLeave={endDrag}
            >
                <div
                    className={`carousel-track${isDragging ? " no-transition" : ""}`}
                    style={{ transform: `translateX(${translateX + dragOffset}px)` }}
                >
                    {SKILL_GROUPS.map((group, idx) => {
                        const distance = Math.abs(idx - activeIndex);
                        const isActive = idx === activeIndex;
                        return (
                            <div
                                key={group.code}
                                ref={(el) => (cardRefs.current[idx] = el)}
                                className={`skill-card${isActive ? " is-active" : ""}`}
                                style={{
                                    "--accent": group.accent,
                                    opacity: isActive
                                        ? 1
                                        : Math.max(0.25, 1 - distance * 0.45),
                                    transform: `scale(${isActive ? 1 : Math.max(0.82, 1 - distance * 0.12)
                                        })`,
                                    filter: isActive
                                        ? "none"
                                        : `blur(${Math.min(distance, 2) * 0.6}px)`,
                                    zIndex: isActive ? 2 : 1,
                                    cursor: isActive ? "default" : "pointer",
                                }}
                                onClick={() => goTo(idx)}
                            >
                                <div className="skill-card-header">
                                    <span className="skill-group-title">{group.title}</span>
                                    <span className="skill-badge">{group.code}</span>
                                </div>
                                <div className="tech-container">
                                    {group.items.map((tech) => (
                                        <div className="tech" key={tech.name}>
                                            <img
                                                src={
                                                    tech.iconUrl ||
                                                    `https://cdn.simpleicons.org/${tech.icon}`
                                                }
                                                alt={tech.name}
                                                draggable={false}
                                            />
                                            <strong>{tech.name}</strong>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="node-rail">
                <div className="node-line" />
                {SKILL_GROUPS.map((group, idx) => (
                    <button
                        key={group.code}
                        type="button"
                        className={`node${idx === activeIndex ? " is-active" : ""}`}
                        style={{ "--accent": group.accent }}
                        onClick={() => goTo(idx)}
                        aria-label={`View ${group.title} skills`}
                    />
                ))}
            </div>
        </section>
    );
}

export default SystemInfo;