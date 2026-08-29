import "./ImagePlaceholder.css";

interface ImagePlaceholderProps {
    src?: string;
    alt: string;
    shape?: "circle" | "rect";
    className?: string;
}

export default function ImagePlaceholder({ src, alt, shape = "rect", className = "" }: ImagePlaceholderProps) {
    if (src) {
        return <img src={src} alt={alt} className={`img-placeholder img-placeholder--${shape} ${className}`} />;
    }

    return (
        <div className={`img-placeholder img-placeholder--empty img-placeholder--${shape} ${className}`} role="img" aria-label={alt}>
            <span>Add image</span>
        </div>
    );
}