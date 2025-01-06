import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const { setIsAuthenticated } = useContext(AuthContext);
  const nav = useNavigate();

  const signingup = async (event) => {
    event.preventDefault();
    try {
      const req = await axios.post("http://localhost:3001/signup", {
        Name: name,
        Email: email,
        Password: pass,
      });

      if (req.data.issignup) {
        nav("/home");
        setIsAuthenticated(true);
      } else {
        window.alert("Signup failed");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={signingup}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          required
        />
        <br />
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => setpass(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>

      <Link to="/" className="link">
        Signin
      </Link>
    </div>
  );
};

export default Signup;
