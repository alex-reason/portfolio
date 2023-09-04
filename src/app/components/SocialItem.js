import './styles/socialitem.scss'

const SocialItem = ({ socData }) => {
  return (
    <a className='social-item' href={socData.url}>
      {socData.icon}
    </a>
  )
}

export default SocialItem