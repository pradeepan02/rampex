import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuthenticated } = useContext(AuthContext);
  const nav = useNavigate();

  const signingin = async (event) => {
    event.preventDefault();
    try {
      const req = await axios.post("https://rampex-i4ms.onrender.com/signin", {
        Email: email,
        Password: password,
      });

      if (req.data.isloggedin) {
        window.alert("You're Signed in");
        setIsAuthenticated(true); // Update authentication state
        nav("/home");
      } else {
        window.alert(req.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={signingin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
      <p>
        <Link to="/signup" className="link">
          Signup
        </Link>
      </p>
    </div>
  );
};

export default Signin;
