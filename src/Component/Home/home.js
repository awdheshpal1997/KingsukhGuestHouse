import { useEffect, useState } from "react";
import { navBarData } from "./constants";
import "./home.css";

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const animationStyle = (delay) => ({
    visibility: "visible",
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
      : "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 100, 0, 1)",
    transition: `all, opacity 1s cubic-bezier(0.5, 0, 0, 1) ${delay}s, transform 1s cubic-bezier(0.5, 0, 0, 1) ${delay}s`,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="body-header" id="home">
      <nav>
        <div className="nav-bar">
          <div className="logo">
            <a href="https://wa.link/at5ion">
              <span>Kingsukh Guest House</span>
            </a>
          </div>
          <div
            className="nav__menu__btn"
            onClick={() => setIsMobile(!isMobile)}
            id="menu-btn"
          >
            <i className={isMobile ? "ri-close-line" : "ri-menu-line"}></i>
          </div>
        </div>
        <ul className={isMobile ? "nav-links open" : "nav-links"}>
          {navBarData?.map((item) => (
            <li key={item.id}>
              <a onClick={() => setIsMobile(!isMobile)} href={item.id}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <a href="https://wa.link/at5ion">
          <button className="btn btn-header">BOOK NOW</button>
        </a>
      </nav>
      <div className="section__container header__container" id="home">
        <p className="p" style={animationStyle(0.1)}>
          Simple - Unique - Friendly
        </p>
        <h1 className="h" style={animationStyle(0.4)}>
          Make Yourself At Home
          <br />
          In Our <span>Guest House</span>.
        </h1>
      </div>
    </div>
  );
}

export default Home;
