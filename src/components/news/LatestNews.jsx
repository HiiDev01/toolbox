import React, { useRef, useEffect } from 'react';
import './LatestNews.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const newsArticles = [
  { id: 1, image: "https://via.placeholder.com/380x220/1f2937/ffffff?text=Keyboard", date: "March 21, 2024", author: "Seenu Rawat", title: "How To Write A Blog Post Your Readers Will Love In 5 Steps", link: "#" },
  { id: 2, image: "https://via.placeholder.com/380x220/4f46e5/ffffff?text=Woman+with+Laptop", date: "March 21, 2024", author: "Seenu Rawat", title: "Why Do People Think Business Software Is A Good Idea!", link: "#" },
  { id: 3, image: "https://via.placeholder.com/380x220/f59e0b/ffffff?text=Woman+Working", date: "March 21, 2024", author: "Seenu Rawat", title: "The Ultimate Guide To Marketing Strategies To Improve Sales", link: "#" },
  { id: 4, image: "https://via.placeholder.com/380x220/334155/ffffff?text=Office+Meeting", date: "March 21, 2024", author: "Seenu Rawat", title: "How To Write A Blog Post Outline: A Simple Formula To Follow", link: "#" },
  { id: 5, image: "https://via.placeholder.com/380x220/16a34a/ffffff?text=Team+Discussion", date: "March 22, 2024", author: "Seenu Rawat", title: "5 Ways To Increase Team Productivity", link: "#" },
  { id: 6, image: "https://via.placeholder.com/380x220/ea580c/ffffff?text=Presentation", date: "March 23, 2024", author: "Seenu Rawat", title: "Creating Presentations That Engage Your Audience", link: "#" },
  { id: 7, image: "https://via.placeholder.com/380x220/8b5cf6/ffffff?text=Strategy+Planning", date: "March 24, 2024", author: "Seenu Rawat", title: "Strategic Planning Tips For Small Businesses", link: "#" },
  { id: 8, image: "https://via.placeholder.com/380x220/22c55e/ffffff?text=Marketing", date: "March 25, 2024", author: "Seenu Rawat", title: "Top Marketing Trends To Watch This Year", link: "#" },
  { id: 9, image: "https://via.placeholder.com/380x220/ef4444/ffffff?text=Networking", date: "March 26, 2024", author: "Seenu Rawat", title: "Networking Tips For Professionals", link: "#" },
];

const LatestNews = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.slideTo(0);
  }, []);

  return (
    <section className="latest-news">
      <div className="section-header">
        <h2>Our Latest News</h2>
        <div className="Ns-arrows">
          <button className="Ns-btn" ref={prevRef}><ChevronLeft size={25} /></button>
          <button className="Ns-btn" ref={nextRef}><ChevronRight size={25} /></button>
        </div>
      </div>

      <Swiper
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={5}
        spaceBetween={20}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        /*pagination={{ clickable: true }}*/
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        }}
      >
        {newsArticles.map((article) => (
          <SwiperSlide key={article.id}>
            <div className="news-card">
              <div className="news-image">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="news-content">
                <div className="news-meta">{article.date} • {article.author}</div>
                <h3 className="news-title">{article.title}</h3>
                <a href={article.link} className="read-more">Read More</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LatestNews;