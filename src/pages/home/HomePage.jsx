import React from 'react';
import Nav from '../../components/nav/Nav';
import HeroSection from '../../components/hero/HeroSection';
import PromoSidebar from '../../components/promo/PromoSidebar';
import TrustBar from '../../components/trustbar/TrustBar';
import PopularCategories from '../../components/categories/PopularCategories';
import TrendingCollection from '../../components/trending/TrendingCollection';
import FeaturedProducts from '../../components/featured/FeaturedProducts';
import ShopByDepartments from '../../components/departments/ShopByDepartments';
import DiscountProducts from '../../components/discounts/DiscountProducts';
import CustomerTestimonials from '../../components/testimonials/CustomerTestimonials';
import LatestNews from '../../components/news/LatestNews';

import './HomePage.css';

const HomePage = () => {
  return (
    <>
     
      <Nav></Nav>
      
      <main className='Main'>
        <div className="hero-container">
          <HeroSection />
          <PromoSidebar />
        </div>

        <TrustBar />
        <PopularCategories />
        <TrendingCollection />
        <FeaturedProducts />
        <DiscountProducts />
        <ShopByDepartments />
        <CustomerTestimonials />
        <LatestNews/>
      </main>
    </>
  );
};

export default HomePage;