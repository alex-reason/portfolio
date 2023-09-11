import Image from 'next/image';
import './styles/portfolioitem.scss';

const PortfolioItemDetails = ({ data }) => {
  return (
    <div className='portfolio-item-details'>
      <Image className='portfolio-item-details__img' src={data.detailImg} alt={data.detailImgAlt} />
      <h3>{data.detailInfo}</h3>
    </div>
  )
};

export default PortfolioItemDetails;