import { projects } from "../../data/projects.ts";
import ProjectThumb from "../projectThumbnail/ProjectThumb.tsx";
import { FolderIcon, GithubIcon, ExternalLinkIcon } from "../icons/Icons.tsx";
import "./Projects.css";

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="section-heading">
                <h2>Projects</h2>
                <span className="section-rule" aria-hidden="true" />
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <ProjectThumb image={project.image} stockImage={project.stockImage} alt={project.title} />

                        <div className="project-card__body">
                            <div className="project-card__top-row">
                                <FolderIcon className="project-card__folder-icon" />
                                <span className="project-card__links">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`${project.title} on GitHub`}
                                        >
                                            <GithubIcon />
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`${project.title} live site`}
                                        >
                                            <ExternalLinkIcon />
                                        </a>
                                    )}
                                </span>
                            </div>

                            <h3 className="project-card__title">{project.title}</h3>

                            {project.description && (
                                <p className="project-card__desc">{project.description}</p>
                            )}

                            {project.stack && project.stack.length > 0 && (
                                <div className="project-card__stack">
                                    {project.stack.join(" · ")}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}