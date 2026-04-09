import React, { useState, useRef, useEffect } from "react";
import './ShopByDepartments.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Sample products for each category
const allProducts = {
  Featured: [
    { id: 1, name: "Circular Saw Skil Carbine", desc: "Tipped Lightweight Corded", price: "$2.00", rating: 5, image: "https://via.placeholder.com/260x200/ef4444/fff?text=Skil+Saw" },
    { id: 2, name: "Ryobi 18v Cordless Circular", desc: "Saw 150mm No Batteries", price: "$1.00", rating: 5, image: "https://via.placeholder.com/260x200/22c55e/fff?text=Ryobi+Saw" },
    { id: 3, name: "AEG Circular Saw 165 Mm", desc: "Subcompact 18 V Brushless", price: "$1.00", rating: 5, image: "https://via.placeholder.com/260x200/3b82f6/fff?text=AEG+Saw" },
    { id: 4, name: "Hammer Deluxe", desc: "Heavy Duty Hammer", price: "$3.00", rating: 5, image: "https://via.placeholder.com/260x200/8b5cf6/fff?text=Hammer" },
    { id: 5, name: "Driver Set Pro", desc: "Best Value Driver Set", price: "$4.00", rating: 5, image: "https://via.placeholder.com/260x200/f59e0b/fff?text=Driver+Set" },
    { id: 6, name: "Nailer Plus", desc: "Premium Framing Nailer", price: "$5.00", rating: 5, image: "https://via.placeholder.com/260x200/06b6d4/fff?text=Nailer+Plus" },
  ],
  Latest: [
    { id: 7, name: "Paslode PowerMaster Pro 30°", desc: "Framing Nailer", price: "$1.00", rating: 5, image: "https://via.placeholder.com/260x200/f97316/fff?text=Framing+Nailer" },
    { id: 8, name: 'Annular Cutter', desc: "Diameter x 1\" Depth", price: "$1.00", rating: 5, image: "https://via.placeholder.com/260x200/64748b/fff?text=Annular+Cutter" },
    { id: 9, name: "Cordless Drill", desc: "18V Lithium Battery", price: "$3.50", rating: 5, image: "https://via.placeholder.com/260x200/22c55e/fff?text=Drill" },
    { id: 10, name: "Pliers Set", desc: "6 Pieces Heavy Duty", price: "$2.50", rating: 5, image: "https://via.placeholder.com/260x200/3b82f6/fff?text=Pliers" },
    { id: 11, name: "Screwdriver Set", desc: "Professional Quality", price: "$4.00", rating: 5, image: "https://via.placeholder.com/260x200/ef4444/fff?text=Screwdriver" },
    { id: 12, name: "Measuring Tape", desc: "5m / 16ft", price: "$1.50", rating: 5, image: "https://via.placeholder.com/260x200/f59e0b/fff?text=Tape" },
  ],
  Selling: [
    { id: 13, name: "Driver Set Deluxe", desc: "Premium Driver Set", price: "$5.00", rating: 5, image: "https://via.placeholder.com/260x200/8b5cf6/fff?text=Driver+Set" },
    { id: 14, name: "Hammer Pro", desc: "Heavy Duty Hammer", price: "$4.00", rating: 5, image: "https://via.placeholder.com/260x200/f97316/fff?text=Hammer+Pro" },
    { id: 15, name: "Electric Jack Hammer", desc: "Concrete Breaking", price: "$6.00", rating: 5, image: "https://via.placeholder.com/260x200/06b6d4/fff?text=Jack+Hammer" },
    { id: 16, name: "Circular Saw Pro", desc: "Corded Circular Saw", price: "$3.50", rating: 5, image: "https://via.placeholder.com/260x200/22c55e/fff?text=Saw+Pro" },
    { id: 17, name: "Safety Helmet", desc: "HDPE Construction", price: "$2.00", rating: 5, image: "https://via.placeholder.com/260x200/ef4444/fff?text=Helmet" },
    { id: 18, name: "Hacksaw Blade", desc: "TrueTension", price: "$1.50", rating: 5, image: "https://via.placeholder.com/260x200/f59e0b/fff?text=Hacksaw" },
  ],
};

const ShopByDepartments = () => {
  const [activeTab, setActiveTab] = useState("Featured");
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  // Reset to first slide on tab change
  useEffect(() => {
    if (swiperRef.current) swiperRef.current.slideTo(0);
  }, [activeTab]);

  return (
    <section className="shop-by-departments">
      <div className="section-header">
        <h2>Shop By Departments</h2>
        <div className="tabs">
          {["Featured", "Latest", "Selling"].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
          <div className="dp_arrows">
            <button className="arr_btn" ref={prevRef}><ChevronLeft size={25}/></button>
            <button className="arr_btn" ref={nextRef}><ChevronRight size={25}/></button>
          </div>
        </div>
      </div>

      <div className="departments-content">
        {/* Left Banner */}
        <div className="offer-banner">
          <div className="banner-content">
            <p className="limited">Limited offers</p>
            <h3>Driver Sets Best In Offers</h3>
            <p className="discount">-25%</p>
            <button className="shop-now-btn">Shop Now</button>
          </div>
          <img
            src="https://via.placeholder.com/380x420/1f2937/fff?text=Driver+Set"
            alt="Driver Set Offer"
            className="banner-image"
          />
        </div>

        {/* Product Grid */}
        <div className="departments-grid">
          <Swiper
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={0}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              1024: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              480: { slidesPerView: 1 },
            }}
          >
            {allProducts[activeTab].map((product) => (
              <SwiperSlide key={product.id}>
                <div className="pd-card">
                  <div className="pd-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="pd-info">
                    <h3>{product.name}</h3>
                    <p className="pd-desc">{product.desc}</p>
                    <div className="pdrating">{'★'.repeat(product.rating)}</div>
                    <div className="pdprice">{product.price}</div>
                    <button className="add-to-cart-btn">Add to cart</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ShopByDepartments;