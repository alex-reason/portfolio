"use client";
import { useState } from 'react';
import './styles/experienceitem.scss';

const ExperienceItem = ({ expData }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='experience-item' onClick={() => setIsVisible(!isVisible)}>
      <h2 className={isVisible ? 'active bold' : ''}>{expData.label}</h2>
      <p className={isVisible ? 'active' : ''}>{expData.minorContent}</p>

      <div className={isVisible ? 'experience-item__content' : 'invisible'}>
        <div className='experience-item__content-info'>
          {expData.content.map(item => (
            <h3 key={Math.random() * 3}>{item}</h3>
          ))}
        </div>
      </div>

    </div>
  )
};

export default ExperienceItem;