import React from 'react';
import HeroAbout from '../../components/heroabout/HeroAbout';
import StatsSection from '../../components/statssection/StatsSection';
import WhyChooseUs from '../../components/chooseus/WhyChooseUs';
import OurServices from '../../components/ourservices/OurServices';
import RequestQuote from '../../components/requestquote/RequestQuote';
import WhyWeAreBest from '../../components/webest/WhyWeAreBest';

const AboutPage = () => {
  return (
    <>
      <HeroAbout />
      <StatsSection />
      <WhyChooseUs />
      <OurServices />
      <RequestQuote />
      <WhyWeAreBest />
    </>
  );
};

export default AboutPage;