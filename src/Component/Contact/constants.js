import facebook from "../../asset/1.png";
import instagram from "../../asset/3.png";
import twitter from "../../asset/2.png";
import linkedian from "../../asset/5.png";

export const socialLink = [
  {
    icon: facebook,
    link: '#'
  },
  {
    icon: instagram,
    link: 'https://www.instagram.com/kingsukhguesthouse/'
  },
  {
    icon: twitter,
    link: '#'
  },
  {
    icon: linkedian,
    link: '#'
  },
];

export const fields = [
    { type: "text", name: "firstName", label: "First Name" },
    { type: "text", name: "lastName", label: "Last Name" },
    { type: "email", name: "email", label: "Email Address" },
    { type: "tel", name: "mobileNumber", label: "Mobile Number", maxLength: "10" },
    { type: "textarea", name: "message", label: "Write your message here..." },
];


export const validateField = (name, value, setErrors) => {
    const errorMessages = {};
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errorMessages.email = "Please enter a valid email address.";
      }
    }

    if (name === "mobileNumber") {
      const mobileRegex = /^[456789][0-9]{9}$/;
      if (!mobileRegex.test(value)) {
        errorMessages.mobileNumber = "Mobile number must 10 digits long.";
      }
    }

    if (!value.trim()) {
      errorMessages[name] = `${name.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())} is required.`;
    }

    setErrors((prev) => {
      const updatedErrors = { ...prev, ...errorMessages };
      if (errorMessages[name] === undefined) delete updatedErrors[name];
      return updatedErrors;
    });
  };
