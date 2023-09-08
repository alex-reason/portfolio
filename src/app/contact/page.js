import { SocialItem, Navbar, HomeLink, Footer } from '../components';
import { VscMail } from 'react-icons/vsc';
import { socialData } from '@/assets/data';
import Link from 'next/link';
import './contact.scss';

const Contact = () => {
    return (
        <>
            <HomeLink />
            <Navbar />
            <div className='contact'>
                <h2>Reach out</h2>
                <div className='contact__container'>
                    <Link className='contact__email' href={'mailto:alexandrareasonda@gmail.com'}>
                        <VscMail />
                        <h4>Email me</h4>
                    </Link>

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