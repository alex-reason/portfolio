import './styles/certificateitem.scss';

const CertificateItem = ({ certData }) => {
  return (
    <a className='certificate-item' href={certData.url} target="_blank" rel='noopener noreferrer'>
      <div className='certificate-item__container'>
        <h3>{certData.title}</h3>
        <h4>{certData.detail}</h4 >
        <div className='certificate-item__skills'>
          {certData.skills && certData.skills.map((skill) => (
            <p key={skill}>{skill}</p>
          ))}
        </div>

      </div>
    </a>
  )
}

export default CertificateItem