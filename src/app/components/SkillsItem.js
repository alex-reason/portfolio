import Image from 'next/image';
import './styles/skillsitem.scss';

const SkillsItem = ({ data }) => {
  return (
    <div className='skills-item'>
      <Image src={data.image} alt='from blush'/>
      <div>
        <h3>{data.title}</h3>
        {data.details.map((skill) => (
          <h4 key={skill}>{skill}</h4>
        ))}
      </div>
    </div>
  )
}

export default SkillsItem