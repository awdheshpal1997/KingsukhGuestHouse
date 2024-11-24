import "./contact.css";
import location from "../../asset/location.png";
import mail from "../../asset/mail.png";
import call from "../../asset/call.png";
import { useState } from "react";
import { fields, socialLink, validateField } from "./constants";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value, setErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = `${field.replace(/([A-Z])/g, " $1")} is required.`;
      } else {
        validateField(field, formData[field], setErrors);
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      console.log("Submitted Data: ", formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        message: "",
      });
    }
  };

  return (
    <div className="section1" id="contact">
      <div className="container1">
        <div className="contactInfo1">
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span>
                  <img src={location} alt="location-image" />
                </span>
                <span>
                  Beside Barshal Water Tank,
                  <br />
                  Manpur, Barhanti,
                  <br />
                  West Bengal 723156
                </span>
              </li>
              <li>
                <span>
                  <img src={mail} alt="mail-icon"/>
                </span>
                <span>kkghosh0099@gmail.com</span>
              </li>
              <li>
                <span>
                  <img src={call} alt="call-icon"/>
                </span>
                <span>+91 9007062180</span>
              </li>
            </ul>
            <ul className="social">
              {socialLink.map((item) => (
                <li key={item.icon}>
                  <a href={item.link} target={item.link !== '#' ? '_blank' : '_top'} rel="noreferrer">
                    <img className="soc" src={item.icon} alt={item.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={Object.values(errors).length <= 0 ? "contactForm1 contactFromWithoutError" : "contactForm1 contactformwitherror"}>
          <h2>Send a Message</h2>
          <form className="formBox1" onSubmit={handleSubmit}>
            {fields.map((field) => (
              <div
                key={field.name}
                className={`inputBox1 ${
                  field.type === "textarea" ? "w100" : "w50"
                }`}
              >
                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                  ></textarea>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    maxLength={field.maxLength || undefined}
                    required
                  />
                )}
                <span>{field.label}</span>
                {errors[field.name] && (
                  <small className="error-message">{errors[field.name]}</small>
                )}
              </div>
            ))}
            <div className="inputBox1 w100">
              <button className="btn-send" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
