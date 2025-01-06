import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Apicall from "./components/Apicall";
import Useref from "./components/Useref";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Examusecontext from "./components/contextxomponents/Examusecontext";
import Usememo from "./components/Usememo";
import Signin from "./components/signin";
import Signup from "./components/Signup";
import { AuthProvider, AuthContext } from "./components/AuthContext";

function App() {
  const { isAuthenticated } = React.useContext(AuthContext);

  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home data="hello" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/axio" element={<Apicall />} />
          <Route path="/ref" element={<Useref />} />
          <Route path="/con" element={<Examusecontext />} />
          <Route path="/memo" element={<Usememo />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </AuthProvider>
  );
}

export default App;
