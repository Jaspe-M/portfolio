import ImagePlaceholder from "../placeholder/ImagePlaceholder.tsx";
import "./Hero.css";


export default function Hero() {
  return (
    <section id="home" className="hero">
      <p className="hero-eyebrow">Junior Software Developer</p>

      {/* The name + photo overlap. We do this by stacking the photo on
          top of the text using absolute positioning inside a relative
          wrapper — the text sits behind, the photo sits in front. */}
      <div className="hero-title-wrap">
        <h1 className="hero-title">
            <div className="hero-title-top">JASPE</div>
            <div className="hero-title-bottom">MATUMONA</div>
        </h1>
          <ImagePlaceholder className="hero-photo"  src="/images/img.png" alt="Photo of Jaspe Matumona" shape="circle" />
      </div>

      <span className="hero-divider" aria-hidden="true">
        ◆
      </span>

      <p className="hero-bio">
        I'm Jaspe Matumona — a software developer passionate about building
        efficient applications, solving problems through code, and turning
        ideas into functional digital solutions.
      </p>

      <span className="hero-scroll-hint" aria-hidden="true" /> {/* Small scroll indicator line*/}
    </section>
  );
}
