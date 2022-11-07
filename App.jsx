
import debug from "debug";
import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import React, { createContext } from "react";
export const DataContext = createContext();
console.log('DataContent', DataContext);
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Login from "./pages/Login";
import Donate from "./pages/Donate";
import Volunteers from "./pages/Volunteers";
import Veterinarians from "./pages/Veterinarians";
import GRCs from "./pages/GRCs";
import "./App.css"
import News from "./pages/News";
import AboutUs from "./pages/AboutUs";
import Volunteer from "./pages/Volunteer";
import SignUp from "./pages/SignUp";
import Merchandise from "./pages/Merchandise";
import Adopt from "./pages/Adopt";
import ContactUs from "./pages/ContactUs";
import VisitUs from "./pages/VisitUs";
import OurCats from "./pages/OurCats";

function App() {
  return (
    // <FavsContext.Provider value={{ favs, dispatch }}>
    <BrowserRouter>
    <Row>
    <Col md={{offset: 1}}>
    <nav>
    <button className="btn-grad"><Link className="link-btn" to="/aboutus">ABOUT US</Link></button>
    <button className="btn-grad"><Link className="link-btn" to="/ourcats">OUR CATS</Link></button>
    <button className="btn-grad"><Link className="link-btn" to="/grcs">GRCs</Link></button>
    <button className="btn-grad"><Link className="link-btn" to="/news">NEWS</Link></button>
    <button className="btn-grad"><Link className="link-btn" to="/veterinarians">Veterinarians</Link></button>
    <button className="btn-grad"><Link className="link-btn" to="/volunteer">VOLUNTEER</Link></button>
    <button className="btn-grad"><Link className="link-btn" to="/volunteers">OUR VOLUNTEERS</Link></button>
    <button className="btn-grad"><Link className="link-btn" to="/donate">DONATE</Link></button>
    <button className="btn-grad"><Link className="link-btn" to="/merchandise">MERCHANDISE</Link></button>
    <button className="btn-grad"><Link className="link-btn" to="/adopt">ADOPT</Link></button>
    <button className="btn-grad"><Link className="link-btn" to="/contactus">CONTACT US</Link></button>
    <button className="btn-grad"><Link className="link-btn" to="/visitus">VISIT US</Link></button>
    <button className="btn-grad"><Link className="link-btn" to="/login">LOG IN</Link></button>
    <button className="btn-grad"><Link className="link-btn" to="/signup">SIGN UP</Link></button>
    </nav>
    </Col>
    </Row>
      <Routes>
      <Route path="/aboutus" element={<AboutUs />}/>
      <Route path="/ourcats" element={<OurCats />}/>
      <Route path="/grcs" element={<GRCs />}/>
      <Route path="/news" element={<News />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/volunteer" element={<Volunteer />}/>
      <Route path="/volunteers" element={<Volunteers />}/>
      <Route path="/veterinarians" element={<Veterinarians />}/>
      <Route path="/donate" element={<Donate />}/>
      <Route path="/merchandise" element={<Merchandise />}/>
      <Route path="/adopt" element={<Adopt />}/>
      <Route path="/contactus" element={<ContactUs />}/>
      <Route path="/visitus" element={<VisitUs />}/>
      </Routes>
    </BrowserRouter>
    // </FavsContext.Provider>
  );
}

export default App;
