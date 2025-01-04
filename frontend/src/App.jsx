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
import Signup from "./components/signup";
import Signin from "./components/signin";
// import Authprovider from "./components/Authprovider";

function App() {  
  return (
    <div>
      {/* <Authprovider> */}
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/home" element={<Home data="hello" />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/axio" element={<Apicall />} />
            <Route path="/ref" element={<Useref />} />
            <Route path="/con" element={<Examusecontext />} />
            <Route path="/memo" element={<Usememo />} />
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      {/* </Authprovider> */}
    </div>
  );
}

export default App;
