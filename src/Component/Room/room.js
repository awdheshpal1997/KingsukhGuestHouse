import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { animationStyle, cardData } from "./constants";
import "./room.css";

function Room() {
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const elementRef = useRef(null);

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
  }, [isHeadingVisible]);

  return (
    <div
      ref={elementRef}
      className="section-container room-container"
      id="rooms"
    >
      <div>
        <p className="room-subheader">OUR LIVING ROOM</p>
      </div>
      <div>
        <h1 className="room-header">
          The Most Memorable Rest Time Starts Here.
        </h1>
      </div>
      <div className="room-grid">
        {cardData.map((item) => (
          <div
            style={animationStyle(item.delay, isHeadingVisible)}
            key={item.image}
            className="room-card"
          >
            <Card>
              <div className="card-img-container">
                <Card.Img variant="top" src={item.image} />
                <div className="room__card__icons">
                  <span>
                    <i className="ri-heart-fill"></i>
                  </span>
                  <span>
                    <i className="ri-paint-fill"></i>
                  </span>
                  <span>
                    <i className="ri-shield-star-line"></i>
                  </span>
                </div>
              </div>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.contect}
                </Card.Text>
                {item.price}
                <a href="https://wa.link/at5ion">
                  <Button variant="primary">{item.btnText}</Button>
                </a>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Room;
