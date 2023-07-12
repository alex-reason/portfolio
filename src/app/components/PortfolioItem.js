import Image from 'next/image';
import './styles/portfolioitem.scss';

const PortfolioItem = ({ portData, clickHandler }) => {
  const handleClick = () => {
    clickHandler(portData);
  }
  return (
    <div className={portData.isActive ? 'portfolio-item portfolio-item-active' : 'portfolio-item'} onClick={handleClick}>
      <h3>{portData.title}</h3>
      <Image className='portfolio-item__img' src={portData.image} alt={portData.title}/>
    </div>
  )
}

export default PortfolioItem