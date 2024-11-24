import image from "../../asset/out.jpg";
import "./about.css";
import { Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);

  const styles = {
    visibility: "visible",
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
      : "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -100, 0, 0, 1)",
    transition:
      "all, opacity 1s cubic-bezier(0.5, 0, 0, 1), transform 1s cubic-bezier(0.5, 0, 0, 1)",
  };

  const animationStyle = (delay) => ({
    visibility: "visible",
    opacity: isHeadingVisible ? 1 : 0,
    transform: isHeadingVisible
      ? "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
      : "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 100, 0, 1)",
    transition: `opacity 1s cubic-bezier(0.5, 0, 0, 1) ${delay}s, transform 1s cubic-bezier(0.5, 0, 0, 1) ${delay}s`,
  });

  useEffect(() => {
    const node = elementRef.current;  // Cache the ref value inside the effect

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isHeadingVisible && !isVisible) {
            setIsVisible(true);
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
    };
  }, [isHeadingVisible, isVisible]);

  return (
    <div
      ref={elementRef}
      className="section-container about-container"
      id="about"
    >
      <div className="about-image">
        <img src={image} style={styles} className="img1" alt="about_image" />
      </div>
      <div className="about-content">
        <p style={animationStyle(0.2)} className="about-subheader">
          ABOUT US
        </p>
        <h2 style={animationStyle(0.4)} className="about-header">
          The Best Holidays Start Here!
        </h2>
        <p style={animationStyle(0.6)} className="about-description">
          Embark on a tranquil journey at our Kingsukh Guest House, enveloped by
          the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
          Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
          captivating Panchat Dam. Revel in the embrace of comfort, relish
          delightful meals, and unwind in our verdant garden oasis. Your ideal
          retreat beckons, promising a harmonious blend of nature's beauty and
          heartfelt hospitality. Explore the hidden gems of Purulia, creating
          memories that linger long after your stay.
        </p>
        <h4 className="about-heading">
          <a
            className="about-address"
            target="_blank"
            href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA"
            rel="noreferrer"
          >
            Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
            723156
          </a>
        </h4>
        <h4>
          <a className="about-contact" target="_blank" href="tel:+919007062180" rel="noreferrer">
            Contact us: +91 9007062180
          </a>
        </h4>
        <a href="https://wa.link/at5ion">
          <Button style={animationStyle(1.2)} className="about-button">
            BOOK NOW
          </Button>
        </a>
      </div>
    </div>
  );
}

export default About;
