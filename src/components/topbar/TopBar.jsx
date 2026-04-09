import React, { useEffect, useRef, useState } from "react";
import "./TopBar.css"
import { ChevronDown  } from "lucide-react";
import { useTranslation } from "react-i18next";

const TopBar = () => {
  const [currency, setCurrency] = useState("USD");
  const [openCurreny, setOpenCurrency] = useState(false)
  const [lang, setLang] = useState("ENGLISH")
  const [openLang, setOpenLang] = useState(false)
  const currencyRef = useRef()
  const langRef = useRef()

    const {t, i18n } = useTranslation();






const currencyLabels = {
  USD: "United State (USD)",
  EUR: "United Kingdom (EUR)",
  NGN: "Nigeria (Naira)"
};

const handleCountryBtn = () =>{
  setOpenCurrency(prev => !prev)
}

const handleLangBtn = () =>{
  setOpenLang(prev => !prev)
}

useEffect(()=>{
  const handleClickOutside = (e) => {
    if(currencyRef.current && !currencyRef.current.contains(e.target)){
      setOpenCurrency(false)
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };

}, [])

useEffect(()=>{
  const handleClickLang = (e) => {
    if(langRef.current && !langRef.current.contains(e.target)){
      setOpenLang(false)
    }
  }

  document.addEventListener("mousedown", handleClickLang);

  return () => {
    document.removeEventListener("mousedown", handleClickLang);
  };

}, [])


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpenLang(false)
  };

  const currentLang = i18n.resolvedLanguage || i18n.language;

  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <div className="top-links">
          <a href="#">{t("topbar.about")}</a>
          <a href="#">{t("topbar.blog")}</a>
          <a href="#">{t("topbar.contact")}</a>
          <a href="#">{t("topbar.faq")}</a>
        </div>
        <div className="promo-text">
          {t("topbar.title")}
        </div>
        <div className="locale">
            
            <div  className="localecountry"  ref={currencyRef}>
              <button className="localecountryBtn" onClick={handleCountryBtn}> {currencyLabels[currency]} <span><ChevronDown size={18}/></span></button>
              {openCurreny && 
                <div className="localecountrydrop">
                   <button onClick={()=> setCurrency("USD")}>
                     united state (USD)
                   </button>
                   <button onClick={()=> setCurrency("EUR")}>united kingdom (EUR)</button>
                   <button onClick={()=> setCurrency("NGN")}>Nigeria (NAIRA)</button>
                 </div> 
              }

            </div>
            <div className="localeLanguage" ref={langRef}>
              <button className="localeLangBtn" onClick={handleLangBtn}>{lang} <span><ChevronDown size={18}/></span> </button>
              {openLang && 
                <div className="localeLangdrop">
                    <button onClick={() => changeLanguage("en")}>English</button>
                    <button onClick={() => changeLanguage("fr")}>Spanish</button>
                 </div> 
              }
            </div>

        </div>
      </div>
    </div>
  );
};

export default TopBar;