import image1 from "../../asset/large.jpg";
import image2 from "../../asset/small.jpg";

export const cardData = [
  {
    title: "Cozy Haven Room",
    contect:
      "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
    price: (
      <p className="room-price">
        Starting from <b>Rs. 1000/night</b>
      </p>
    ),
    btnText: "BOOK NOW",
    image: image2,
    delay: 0.3,
  },
  {
    title: "Spacious Serenity Suite",
    contect:
      "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
    price: (
      <p className="room-price">
        Starting from <b>Rs. 1000/night</b>
      </p>
    ),
    btnText: "BOOK NOW",
    image: image1,
    delay: 0.6,
  },
];

export const animationStyle = (delay, isHeadingVisible) => ({
  visibility: "visible",
  opacity: isHeadingVisible ? 1 : 0,
  transform: isHeadingVisible
    ? "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
    : "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 100, 0, 1)",
  transition: `opacity 1s cubic-bezier(0.5, 0, 0, 1) ${delay}s, transform 1s cubic-bezier(0.5, 0, 0, 1) ${delay}s`,
});
