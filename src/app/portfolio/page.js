"use client";
import { useState, useEffect } from 'react';
import { portfolioData } from '@/assets/data-portfolio';
import { PortfolioItem, PortfolioItemDetails, Navbar, BackToTop, HomeLink } from '../components';
import './portfolio.scss';

const Portfolio = () => {
  useEffect(() => {
    const defaultPortfolio = () => {
      portfolioData[0].isActive = true;
      portfolioData.filter(portfolio => portfolio !== portfolioData[0]).forEach(filteredItem => filteredItem.isActive = false)
    }
    return defaultPortfolio
  }, []);

  const [currentPorfolio, setCurrentPortfolio] = useState(0);

  const handleScrollToTop = () => {
    document.querySelector('.portfolio__details').scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  const handlePortfolioItemClick = (item) => {
    setCurrentPortfolio(portfolioData.indexOf(item));
    handleScrollToTop();
    portfolioData[portfolioData.indexOf(item)].isActive = true;
    portfolioData.filter(portfolio => portfolio !== portfolioData[portfolioData.indexOf(item)]).forEach(filteredItem => filteredItem.isActive = false)
  };

  return (
    <div className='portfolio'>
      <div className='portfolio__summary'>
        {portfolioData && portfolioData.map(portItem => (
          <PortfolioItem portData={portItem} clickHandler={handlePortfolioItemClick} key={portItem.title} />
        ))}
      </div>
      <div className='portfolio__details'>
        {
          portfolioData[currentPorfolio].details.map(detail => (
            <PortfolioItemDetails data={detail} key={detail.detailImgAlt} />
          ))
        }
      </div>
      <HomeLink />
      <Navbar />
      <BackToTop backToTopHandler={handleScrollToTop} />
    </div>

  )
}

export default Portfolio