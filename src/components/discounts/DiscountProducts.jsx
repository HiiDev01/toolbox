import React, { useRef, useEffect } from 'react';
import './DiscountProducts.css';   
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const discountProducts = [
  {
    id: 1,
    name: "Milwaukee 2458-21 M12",
    desc: "Cordless Palm Nailer",
    price: "$1.00",
    rating: 5,
    image: "https://via.placeholder.com/260x200/ef4444/ffffff?text=Milwaukee+Nailer",
    inStock: true,
  },
  {
    id: 2,
    name: "Fiskars CF Spray Gun, Multi,",
    desc: "Front Operation",
    price: "$1.00",
    rating: 5,
    image: "https://via.placeholder.com/260x200/f59e0b/ffffff?text=Spray+Gun",
    inStock: true,
  },
  {
    id: 3,
    name: "Malfah Enterprises Ingco",
    desc: "Wire Cup Block Brush",
    price: "$1.00",
    rating: 5,
    image: "https://via.placeholder.com/260x200/facc15/333?text=Brush",
    inStock: true,
    options: true,
  },
  {
    id: 4,
    name: 'Actool " Diameter x 1" Depth',
    desc: "Of Cut Annular Cutter",
    price: "$1.00",
    rating: 5,
    image: "https://via.placeholder.com/260x200/64748b/fff?text=Cutter",
    inStock: true,
  },
  {
    id: 5,
    name: "Homdum 150 Bar Pressure",
    desc: "Washer With Nozzle Gun",
    price: "$2.00",
    rating: 5,
    image: "https://via.placeholder.com/260x200/06b6d4/fff?text=Pressure+Washer",
    inStock: true,
    highlighted: true,
  },
  {
    id: 6,
    name: "Power Tools Manufacturer",
    desc: "Supplied 16mm Electric Drill",
    price: "$1.00",
    rating: 5,
    image: "https://via.placeholder.com/260x200/1f2937/fff?text=Electric+Drill",
    inStock: true,
    options: true,
  },
  {
    id: 7,
    name: "Cordless Nail Gun Battery",
    desc: "Powered Master Brad Nailer",
    price: "$1.00",
    rating: 5,
    image: "https://via.placeholder.com/260x200/374151/fff?text=Nail+Gun",
    inStock: true,
  },
];

const ShopByDiscounts = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  // optional: reset to first slide on re-render
  useEffect(() => {
    if (swiperRef.current) swiperRef.current.slideTo(0);
  }, []);

  return (
    <section className="shop-by-discounts">
      <div className="section-header">
        <h2>Shop By Discounts!</h2>
        <div className="ds-arrows">
          <button className="ds-btn" ref={prevRef}><ChevronLeft size={25} /></button>
          <button className="ds-btn" ref={nextRef}><ChevronRight size={25} /></button>
        </div>
      </div>

      <div className="discounts-grid">
        <Swiper
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={5}
          spaceBetween={0}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            480: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {discountProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className={`product-card ${product.highlighted ? 'highlighted' : ''}`}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-desc">{product.desc}</p>

                  <div className="rating">{'★'.repeat(product.rating)} <span>(0)</span></div>
                  <div className="price">{product.price}</div>

                  <button
                    className={`add-to-cart-btn ${product.highlighted ? 'highlighted-btn' : ''} ${product.options ? 'options-btn' : ''}`}
                  >
                    {product.options ? "Choose options" : "Add to cart"}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ShopByDiscounts;