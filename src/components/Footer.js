import React from "react";
import "./Footer.css";
import img from "./yuvi.JPG";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
const Footer = () => {
  return (
    <div>
      <div className="footer-one">
        <div className="footer-text">
          <img src={img} alt="" />

          <h3>CodeWithUv..!</h3>
          <p>Copyright © 2022 CodeWithUv.com</p>
          <div className="footer-icon1">
            <a href="https://facebook.com">
              <FacebookIcon className="footer-icon" />
            </a>
            <a href="https://instagram.com">
              <InstagramIcon className="footer-icon" />
            </a>
            <a href="https://twiter.com">
              <TwitterIcon className="footer-icon" />
            </a>
            <a href="http://www.Github.com">
              <GitHubIcon className="footer-icon" />
            </a>
            <a href="http://www.google.com">
              <GoogleIcon className="footer-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
