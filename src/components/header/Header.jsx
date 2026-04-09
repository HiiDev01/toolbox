import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Search,PhoneCall,User,ShoppingCart, Cog, TextAlignJustify   } from 'lucide-react';
import { CartContext } from "../../context/CartContext";
import "./Header.css"
import BrowseCategories from "../browsecategories/BrowseCategories";
import ToolOffers from "../tooloffers/ToolOffers";
import BestSellingTools from "../bestselling/BestSellingTools";
import SpecialProducts from "../specialproducts/SpecialProducts";


const data = [
  "screw driver",
  "sleg hammer",
  "wheelbarrow",
  "toolsbox",
  "machine"
]


const Header = ({cartOpen, toogleCart}) => {
    const { t } = useTranslation();  
    const  [search, setSearch] = useState("")
    const [result, setResult] = useState([])

    const handleSearch = (e) =>{
      const value = e.target.value;
      setSearch(value)

      if(value.length > 0){
        const filterSearch = data.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        )
        setResult(filterSearch)
      }else{
        setResult([])
      }
    }

    const handleSelect = (item)=>{
      setSearch(item)
      setResult([])
    }


  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo">TOOL<span>Box</span></div>

        <div className="search-bar">
          <input type="text" placeholder="Search" value={search}  onChange={handleSearch} />
          <button className="search-btn"> <span> <Search size={20}/> </span></button>
          {search.length > 0 &&<div className="serachResult">
            <ul>
              {result.map((item, index) => (
                <li key={index} onClick={() => handleSelect(item)}>
                  {item}
                </li>
              ))}
            </ul>
          </div>}
        </div>

        <div className="header-actions">
          <div className="contact">

            <span className="contacticonspan"> <PhoneCall size={35}/> </span>
            <div>
              <span>Need Help?</span>
              <strong>+01 123 456 7890</strong>
            </div>

          </div>
          <div className="account">
            <span className="accounticonspan"> <User size={35}/> </span>
            <div>
              <span className="accounttitle">My Account</span>
              <span className="accountlogin">Log in</span>
            </div>
          </div>

          <div className="cartSectionContainer">
              <button className="cart" onClick={toogleCart}>
                <span className="carticonspan"> <span className="cartnotify">0</span> <ShoppingCart  size={35}/> </span>
                <div>
                  <span className="carttitle">My Cart</span>
                  <span className="cart-total">$0.00</span>
                </div>
              </button>


          </div>

        </div>
      </div>

      <nav className="main-nav">
        <div className="browse-div">
          <button className="hamburger"> <TextAlignJustify size={30}/></button>
          <div className="browse-cate-wrap">

            <div className="browse-btn">
               Browse Categories
            </div>

            <div className="browse-result">
              <BrowseCategories/>
            </div>

          </div>
        </div>
        <ul className="main-navul">
          <li className="main_navli"><a href="#">Home</a></li>
          <li className="main_navli  store_li">
            <a href="#">Our Store</a>
            <div className="storedrop">
              <ToolOffers/>
            </div>
          </li>
          <li className="main_navli special_li">
            <a href="#">Special <span className="sale">SALE</span></a>
            <div className="specialdrop">
              <BestSellingTools/>
            </div>
          </li>
          <li className="main_navli categories_li">
            <a href="#">Categories <span className="hot">HOT</span></a>
            <div className="categoriesdrop">
              <SpecialProducts/>
            </div>
          </li>
          <li className="main_navli"><a href="#">Top Deals</a></li>
          <li className="main_navli"><a href="#">Elements</a></li>
        </ul>
        <div className="top-offers">
          <a href="">
            <span><Cog size={30}/></span>
            top offer
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;