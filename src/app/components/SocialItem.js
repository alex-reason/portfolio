import './styles/socialitem.scss';

const SocialItem = ({ socData }) => {
  return (
    <a className='social-item' href={socData.url} target='_blank' rel='noopener noreferrer'>
      {socData.icon}
    </a>
  )
};

export default SocialItem;