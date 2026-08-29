import { experience } from "../../data/experience.ts";
import "./Experience.css";

export default function Experience() {
    return (
        <section id="experience" className="experience">
            <div className="section-heading">
                <h2>Experience</h2>
                <span className="section-rule" aria-hidden="true"/>
            </div>

            <div className="experience-grid">
                {experience.map((item) => (
                    <div className="experience-item" key={item.id}>
                        <h3>{item.role}</h3>
                        <p className="experience-meta">
                            {item.company} <span aria-hidden="true">·</span> {item.period}
                        </p>
                        <p className="experience-desc">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
