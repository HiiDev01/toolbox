import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Footer from "./components/footer/Footer";
import AboutPage from "./pages/about/AboutPage";
import "./i18n";

function App() {
  const [cartbtn, setCartBtn] = useState(false);

  const handleCartButtonClick =  ()=>{
    setCartBtn(prev => !prev)
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer/>

    </>
  );
}

export default App;