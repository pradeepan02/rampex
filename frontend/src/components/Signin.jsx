import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Authcontext } from "./Authprovider";

const Signin = () => {
  // const islog = useContext(Authcontext);
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const nav = useNavigate();

  const signingin = async (event) => {
    event.preventDefault();
    try {
      const req = await axios.post("http://localhost:3001/signin", {
        Email: email,
        Password: pass,
      });

      if (req.data.isloggedin) {
        // islog(true);
        window.alert("You're Signed in");
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
      <p>
        <Link to="/signup" className="link">
          Signup
        </Link>
      </p>
    </div>
  );
};

export default Signin;
