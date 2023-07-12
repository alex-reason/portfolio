import'./styles/socialitem.scss'

const SocialItem = ({socData}) => {
  return (
    <div className='social-item'>
        {socData.icon}
    </div>
  )
}

export default SocialItem