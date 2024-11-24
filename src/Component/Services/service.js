import { useEffect, useRef, useState } from "react";
import "./service.css";

function Service() {
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const elementRef = useRef(null);

  const animationStyle = (delay) => ({
    visibility: "visible",
    opacity: isHeadingVisible ? 1 : 0,
    transform: isHeadingVisible
      ? "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
      : "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 100, 0, 0, 1)",
    transition: `opacity 1s cubic-bezier(0.5, 0, 0, 1) ${delay}s, transform 1s cubic-bezier(0.5, 0, 0, 1) ${delay}s`,
  });

  useEffect(() => {
    const node = elementRef.current

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isHeadingVisible) {
            setIsHeadingVisible(true);
            observer.unobserve(entry.target);
          } 
        });
      },
      { threshold: 0.5 }
    );

    if (node) {
      observer.observe(node);
    }
    return () => {
      if (node) {
        observer.unobserve(node);
      }
    }
  }, [isHeadingVisible]);
 
  return (
      <div ref={elementRef} className="service" id="service">
        <div className="section-container service-container">
          <div className="service-content">
            <p className="service-subheader">SERVICES</p>
            <h2 className="service-header">Strive Only For The Best.</h2>
            <ul className="service-list">
              <li style={animationStyle(0.2)}>
                <span className="service-list-icon star-icon-color">
                  <i className="ri-shield-star-line"></i>
                </span>
                High Class Security
              </li>
              <li style={animationStyle(0.6)}>
                <span className="service-list-icon hours-icon-color">
                  <i className="ri-24-hours-line"></i>
                </span>
                24 Hours Room Service
              </li>
              <li style={animationStyle(0.8)}>
                <span className="service-list-icon restaurant-icon-color">
                  <i className="ri-restaurant-2-fill"></i>
                </span>
                Restaurant
              </li>
              <li style={animationStyle(1.2)}>
                <span className="service-list-icon map-icon-color">
                  <i className="ri-map-2-line"></i>
                </span>
                Tourist Guide Support
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Service;
