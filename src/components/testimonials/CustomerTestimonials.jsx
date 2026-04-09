import React, { useRef } from 'react';
import './CustomerTestimonials.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.",
    name: "John Due",
    role: "Developer",
    avatar: "https://via.placeholder.com/60/FF9800/ffffff?text=JD",
  },
  {
    id: 2,
    rating: 5,
    text: "Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.",
    name: "John Due",
    role: "Developer",
    avatar: "https://via.placeholder.com/60/4ADE80/ffffff?text=JD",
  },
  {
    id: 3,
    rating: 5,
    text: "Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.",
    name: "John Due",
    role: "Developer",
    avatar: "https://via.placeholder.com/60/60A5FA/ffffff?text=JD",
  },
  {
    id: 4,
    rating: 5,
    text: "Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.",
    name: "John Due",
    role: "Developer",
    avatar: "https://via.placeholder.com/60/F472B6/ffffff?text=JD",
  },
];

const CustomerTestimonials = () => {
  return (
    <section className="customer-testimonials">
      <h2>What Our Customers Says!</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          1024: { slidesPerView: 2 },
          768: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial-card">
              <div className="rating">
                {'★'.repeat(testimonial.rating)}
              </div>

              <p className="testimonial-text">{testimonial.text}</p>

              <div className="customer-info">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="avatar"
                />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CustomerTestimonials;