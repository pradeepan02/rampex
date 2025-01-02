import React from "react";
import "./Footer.css";
import fb from "../assets/fb.png";
import insta from "../assets/insta.jpg";
import x from "../assets/x.png";
const Footer = (props) => {
  return (
    <footer>
      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" />
        <br /><br />
        <label htmlFor="email">Email: </label>
        <input type="email" />
        <br /><br />
        <label htmlFor="Mobilenum">Mobile Number:</label>
        <input type="number" />
        <br /><br />
      </form>
      <a href="#"><img className="im" src={fb} alt="fb" /></a>
      <a href="#"><img  className="im"src={insta} alt="insta" /></a>
      <a href="#"><img className="im" src={x} alt="x" /></a>
    </footer>
  );
};

export default Footer;
