import Link from 'next/link';
import './styles/navbar.scss';

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const smoothScroll = () => {
    document.querySelector('.your_class or #id here').scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <nav className='nav navbar'>
      <Link className='btn' href='/portfolio'>
        portfolio
      </Link>
      <Link className='btn' href='/competencies'>
        competencies
      </Link>
      <Link className='btn' href='/contact' passHref>
        contact
      </Link>
    </nav>
  )
}

export default Navbar