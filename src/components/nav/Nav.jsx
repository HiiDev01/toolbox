import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext';
import Header from '../header/Header';
import TopBar from "../topbar/TopBar"
import { X  } from 'lucide-react';

const Nav = () => {
    const { toogleCart, cartOpen, closeCart } =  useContext(CartContext)

    useEffect(()=>{
        if(cartOpen){
            document.body.style.overflow = "hidden"
        }else{
            document.body.style.overflow = "auto"
        }

        return () =>{
            document.body.style.overflow = "auto"
        };
    }, [toogleCart])


  return (
    <nav className='NavBox'>
      <TopBar />
      <Header cartOpen={cartOpen} toogleCart={toogleCart} />

        {cartOpen && 
            <div className="cartedConatinershadow">
                <div className="cartedConatiner">
                  <div className="cartedConatinerheader">
                    <h4>your shopping cart</h4>
                    <button onClick={closeCart}><X size={20}/></button>
                  </div>
                </div>
             </div>
        }
    </nav>
  )
}

export default Nav
