import './styles/skillsitem.scss';

const SkillsItem = ({ data }) => {
  return (
    <div className='skills-item'>

      <div>
        <h3>{data.title}</h3>
        {data.details.map((skill) => (
          <h4 key={skill}>{skill}</h4>
        ))}
      </div>
    </div>
  )
};

export default SkillsItem;