import "./MarqueeFooter.css";

const topItems = ["REACT", "TYPESCRIPT", "JAVA", "JAVASCRIPT", "SQL", "EXPRESS.JS", "HTML", "CSS", "PYTHON"];
const bottomItems = ["PYTHON", "CSS", "HTML", "EXPRESS.JS", "SQL", "JAVASCRIPT", "JAVA", "TYPESCRIPT", "REACT"];

interface MarqueeRowProps {
  items: string[];
  direction: "left" | "right";
  speed?: number;
}

function MarqueeRow({ items, direction, speed = 90 }: MarqueeRowProps) {
  // The list is duplicated so the CSS animation can loop seamlessly:
  // once the track has scrolled exactly 50% of its total width, it looks
  // identical to the starting position (because the second half is a
  // copy of the first), so the reset is invisible.
  return (
    <div className="marquee-row">
      <div
        className={`marquee-track marquee-${direction}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...items, ...items].map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function MarqueeFooter() {
  return (
    <footer className="marquee-footer">
      <MarqueeRow items={topItems} direction="left" />
      <MarqueeRow items={bottomItems} direction="right" />
    </footer>
  );
}
