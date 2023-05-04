import React, { useState } from "react";
import Nav from "./nav";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const email1 = "yuvirathod09@gmail.com";
  const number1 = "9663363367";
  const password1 = "Prince@07";
  const [btn, setBtn] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [data, setData] = useState([]);
 
  // const [succes, setSucces] = useState("");

  const loginbtn = () => {
    setData([...data, { email, password, number }]);

    if ((email === email1 || email === number1) && password === password1) {
      
      console.log(email);
      console.log(password);
      
      setBtn(
        <Link className="text1" to="/home">
          Login
        </Link>
      );
  
    } 
    else if (
      (email != email1 || (email1 != number)) &&
      password != password1
    ) {
      alert("Invalid login detailes please enter valide detailes");
    } 
    else if (email != email1) {
      alert("Invalid Email");
    }
    if (password != password1) {
      alert("invalid Password");
    }
  };
  return (
    <div>
      <div className="login-one">
        <div className="login-box">
          <div className="login-img">
            <img src="" alt="" />
          </div>
          <div className="input">
            {/* <h6>{succes}</h6> */}
            <TextField
              id="standard-input"
              label="Email or phone number"
              type="type"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="standard"
            />
            <br />
            <TextField style={{color:"white"}}
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              className="login-btn"
              variant="contained"
              onClick={loginbtn}
            >
              {btn}
            </Button>
            <div className="login-link">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember me"
              />
              <Link href="#">Forgot Password</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
