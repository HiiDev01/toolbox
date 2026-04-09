import React from "react";
import './TrendingCollection.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const trendingProducts = [
  { id: 1, name: "H.D. Electric Jack Hammer", desc: "Concrete And Large Breaker", price: "$1.00", rating: 5, image: "https://via.placeholder.com/280x280/1f2937/fff?text=Jack+Hammer", inStock: true },
  { id: 2, name: "Circular Saw Skil Carbine", desc: "Tipped Lightweight Corded", price: "$2.00", rating: 5, image: "https://via.placeholder.com/280x280/f59e0b/fff?text=Circular+Saw", inStock: true },
  { id: 3, name: "AEG Circular Saw 165 Mm", desc: "Subcompact 18 V Brushless", price: "$1.00", rating: 5, image: "https://via.placeholder.com/280x280/ef4444/fff?text=AEG+Saw", inStock: true },
  { id: 4, name: "Malco MV12 Made Multiple", desc: "Purpose Snip Vinyl Siding", price: "$1.00", rating: 5, image: "https://via.placeholder.com/280x280/8b5cf6/fff?text=Snips", inStock: true },
  { id: 5, name: "Paslode PowerMaster Pro 30°", desc: "Framing Nailer", price: "$1.00", rating: 5, image: "https://via.placeholder.com/280x280/3b82f6/fff?text=Nailer", inStock: true },
  { id: 6, name: "Mallcom Diamond Ventilat", desc: "HDPE Safety Helmet", price: "$1.00", rating: 5, image: "https://via.placeholder.com/280x280/06b6d4/fff?text=Helmet", inStock: true, buttonText: "Choose options" },
  { id: 7, name: "Fiskars Pro 1062931", desc: "TrueTension Hacksaw Blade", price: "$1.00", rating: 5, image: "https://via.placeholder.com/280x280/ea580c/fff?text=Hacksaw", inStock: false },
];

const TrendingCollection = () => {
  return (
    <section className="trending-collection">
      <div className="section-header">
        <h2>Trending Collection</h2>
        <div className="nav-arrows-top">
          <button className="ar-btn prev"><ChevronLeft size={25}/></button>
          <button className="ar-btn next"><ChevronRight size={25}/></button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={4}
        spaceBetween={0} // no gaps
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          1024: { slidesPerView: 6, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 0 },
          480: { slidesPerView: 1, spaceBetween: 0 },
        }}
      >
        {trendingProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="prdts-card">
              {!product.inStock && <div className="sold-out">Sold out</div>}
              <div className="prdts-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-desc">{product.desc}</p>
                <div className="rating">{'★'.repeat(product.rating)}</div>
                <div className="price">{product.price}</div>
                <button disabled={!product.inStock}>
                  {product.buttonText || (product.inStock ? "Add to cart" : "Sold out")}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TrendingCollection;