import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn, FaFileAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const base = import.meta.env.BASE_URL;

const navLinks = [
    { to: 'hero', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'experience', label: 'Experience' },
    { to: 'tools', label: 'Tools' },
    { to: 'projects', label: 'Projects' },
    { to: 'wordpress', label: 'WordPress' },
    { to: 'education', label: 'Education' },
    { to: 'contact', label: 'Contact' },
];

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="container header__inner">
                <a href="#" className="header__logo">
                    <span className="gradient-text">DJ</span>
                </a>

                <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={600}
                            className="header__link"
                            activeClass="header__link--active"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="header__socials">
                    <a href="https://github.com/Darshan3712/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/darshan-jadhav-915b10372/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedinIn />
                    </a>
                    <a href="mailto:jadhavdarshan006@gmail.com" aria-label="Email">
                        <HiOutlineMail />
                    </a>
                </div>

                <a
                    href={`${base}Darshan Jadhav.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary header__resume-btn"
                >
                    <FaFileAlt /> Resume
                </a>

                <button
                    className="header__toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>
        </header>
    );
}

export default Header;
