import "./ProjectThumb.css";

interface ProjectThumbProps {
    image?: string;
    stockImage?: string;
    alt: string;
}

const GLOBAL_FALLBACK_IMAGE = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";

export default function ProjectThumb({ image, stockImage, alt }: ProjectThumbProps) {

    const baseStock = stockImage || GLOBAL_FALLBACK_IMAGE;   // stock image that shows by default

    return (
        <div className="project-thumb">
            {/* stock image */}
            <div
                className="project-thumb__base"
                style={{ backgroundImage: `url(${baseStock})` }}
                role="img"
                aria-label={alt}
            />

            {/* image that fades in on hover (if provided) */}
            {image && (
                <div
                    className="project-thumb__hover-image"
                    style={{ backgroundImage: `url(${image})` }}
                    aria-hidden="true"
                />
            )}
        </div>
    );
}