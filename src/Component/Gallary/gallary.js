import "./gallary.css";
import { useEffect, useRef, useState } from "react";
import { gallaryImageConstant } from "./constants";

function Gallary() {
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const elementRef = useRef(null);

  const animationStyle = (delay) => ({
    visibility: "visible",
    opacity: isHeadingVisible ? 1 : 0,
    transform: isHeadingVisible
      ? "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
      : "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 50, 0, 1)",
    transition: `opacity 1s cubic-bezier(0.5, 0, 0, 1) ${delay}s, transform 1s cubic-bezier(0.5, 0, 0, 1) ${delay}s`,
  });

  useEffect(() => {
    const node = elementRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isHeadingVisible) {
            setIsHeadingVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (node) {
      observer.observe(node);
    }
    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [isHeadingVisible]);

  return (
    <div ref={elementRef} className="gallary" id="gallary">
      <div style={animationStyle(0.4)} className="gallary-content">
        <p className="gallary-subheader">GALLARY</p>
      </div>
      <br />
      <div className="container11">
        {gallaryImageConstant.map((item) => (
          <div key={item.alternativeName} className={`box11 ${item.imageClass}`}>
            <img src={item.imagePath} alt={item.alternativeName} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallary;
