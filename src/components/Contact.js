import React from "react";
import { Link } from "react-router-dom";
import Nav from "./nav";
import "./contact.css";
// import img from "./yuvi.JPG";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

import TextField from '@mui/material/TextField';

const Contact = () => {
  return (
    <div>
      <Nav />

      <div className="contact-bg">
        <div className="contact-h1">
        <h1>Feel free to contact us..!</h1>
        </div>
       
        <div className=" contact-input">
        <TextField
          required
          id="outlined-required"
          label="Email Id/User Name"
       
        /><br/><br/>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          
        /><br/><br/>
       
         <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={5}
          cols={8}
        /><br/><br/>
        <button   >
        
          Submit</button>

        </div>
        {/* <div className="contact-icon">
          <FacebookIcon/>
          <InstagramIcon/>
          <TwitterIcon/>
          <GitHubIcon/>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
