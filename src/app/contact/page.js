import { SocialItem, Navbar, HomeLink, Footer } from '../components';
import { VscMail } from 'react-icons/vsc';
import {HiOutlineNewspaper} from 'react-icons/hi';
import { socialData } from '@/assets/data';
import './contact.scss';

const Contact = () => {
    return (
        <>
            <HomeLink />
            <Navbar />
            <div className='contact'>
                <h2>Reach out</h2>
                <div className='contact__container'>
                  <div className='contact__links'>
                  <a className='contact__email' href='mailto:alexandrareasonda@gmail.com' target="_blank" rel='noopener noreferrer'>
                        <VscMail />
                        <h4>Email me</h4>
                    </a>
                    <a className='contact__email' href='tinyurl.com/alex-reason-resume' target="_blank" rel='noopener noreferrer'>
                        <HiOutlineNewspaper />
                        <h4>My Resume</h4>
                    </a>
                  </div>

                    <div className='contact__socials'>
                        <h4>Let&apos;s connect!</h4>
                        <div className='contact__socials-container'>
                            {socialData.map(socItem => (<SocialItem socData={socItem} key={socItem.id} />))}
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Contact