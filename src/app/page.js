"use client";
import Head from "next/head";
import { useScroll, animated } from "@react-spring/web";
import { useState, useEffect } from "react";
import { landingData } from "../assets/data";
import { BackToTop, Navbar } from "./components";
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
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400&display=swap" rel="stylesheet"></link>
      </Head>

      <div className='home'>
        <div className='home__curtain' />
        <animated.div
          className='home__title'
          style={{
            transform: `scale(${scrollVal / 1.5})`,
            opacity: 1.9 - scrollVal
          }}
        >
          <h1>Hi, I&apos;m Alexandra</h1>
          <p style={{ opacity: `${(scrollVal * 100) - 90}%` }}>Front-end web development, research, language enthusiast.</p>
        </animated.div>

        <ArrowDown alt='scroll down' />

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
      </div>
    </>
  );
}

export default Home;