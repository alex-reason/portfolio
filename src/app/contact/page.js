import { SocialItem, Navbar, HomeLink } from '../components';
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
                    <div className='contact__email'>
                        <h4>Contact me</h4>
                        <p>momai.reason@gmail.com</p>
                    </div>

                    <div className='contact__socials'>
                        <h4>Let's connect! </h4>
                        <div className='contact__socials-container'>
                            {socialData.map(socItem => (<SocialItem socData={socItem} />))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact