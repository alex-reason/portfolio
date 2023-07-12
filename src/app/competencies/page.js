"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ExperienceItem, CertificateItem, SkillsItem, BackToTop, HomeLink, Navbar } from "../components";
import { certData, experienceData, skillsData, img3, img5 } from "@/assets/data";
import './competencies.scss';

const Competencies = () => {
    const [currentImg, setCurrentImg] = useState(img3);
    const [currentTitle, setCurrentTitle] = useState('');

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    const { ref: expRef, inView: expDivIsVisible } = useInView();
    const { ref: certRef, inView: certDivIsVisible } = useInView();
    const { ref: skillRef, inView: skillDivIsVisible } = useInView();

    useEffect(() => {
        const changeTitle = () => {
            if (expDivIsVisible && !certDivIsVisible && !skillDivIsVisible) {
                setCurrentTitle('Experience')
                setCurrentImg(img5)
            }
            if (certDivIsVisible && !expDivIsVisible && !skillDivIsVisible) {
                setCurrentTitle('Certificates')
                setCurrentImg(img3)
            }
            if (skillDivIsVisible && !expDivIsVisible && !certDivIsVisible) {
                setCurrentTitle('Skills')
                setCurrentImg(null)
            }
        }
        return changeTitle()
    }, [expDivIsVisible, certDivIsVisible, skillDivIsVisible])


    return (
        <div className='competencies'>
            <HomeLink />
            <Navbar />
            <h3 className='competencies__title'>{currentTitle}</h3>
            <div className='certificates' ref={certRef}>
                {certData && certData.map((certItem) => (<CertificateItem certData={certItem} key={certItem.id} />))}
            </div>
            {currentImg && <Image className='competencies__img' src={currentImg} alt='illustration from blush.com' />}
            <div className={expDivIsVisible ? 'experiences competencies__active' : 'experiences competencies__inactive'} ref={expRef}>
                {experienceData && experienceData.map((expItem) => (<ExperienceItem expData={expItem} key={expItem.id} />))}
            </div>


            <div className={skillDivIsVisible ? 'skills competencies__active' : 'skills competencies__inactive'} ref={skillRef}>
                <div className='skills__container'>
                    {skillsData && skillsData.map((skillItem) => (<SkillsItem data={skillItem} key={skillItem.title} />))}
                </div>

            </div>
            <BackToTop backToTopHandler={scrollToTop} />
        </div>
    )
};

export default Competencies;