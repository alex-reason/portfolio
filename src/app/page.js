"use client";
import { useScroll, animated } from "@react-spring/web";
import { useState, useEffect } from "react";
import { landingData } from "../assets/data";
import { BackToTop, Navbar, Footer } from "./components";
import ArrowDown from '../assets/icons/arrow-down.svg';
import './page.scss';

const Home = () => {
  const [scrollVal, setScrollVal] = useState(0);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    return scrollToTop()
  }, []);

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      setScrollVal(scrollYProgress + 1);
    }
  });


  return (
    <div className='home'>
      <div className='home__curtain' />
      <animated.div
        className='home__title'
        style={{
          transform: `scale(${scrollVal / 2})`,
          opacity: 1.9 - scrollVal
        }}
      >
        <h1>Hi, I&apos;m Alexandra</h1>
        <p style={{ opacity: `${(scrollVal * 100) - 50}%` }}>Front-end web development, research, language enthusiast.</p>
      </animated.div>

      <div className='home__arrow'>
        <ArrowDown alt='scroll down' /><p>scroll down</p>
      </div>


      <animated.div className='home__details'>
        {landingData && landingData.map((landingItem) => (
          <div className='home__details-item' key={landingItem.title}>
            <h3>{landingItem.title}</h3>
            <h4>{landingItem.content}</h4>
          </div>
        ))}

      </animated.div>
      <BackToTop backToTopHandler={scrollToTop} />
      <Navbar />
      <Footer />
    </div>
  );
}

export default Home;