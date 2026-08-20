import { Link } from 'react-scroll';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaHeart } from 'react-icons/fa';

const footerLinks = [
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'experience', label: 'Experience' },
    { to: 'tools', label: 'Tools' },
    { to: 'projects', label: 'Projects' },
    { to: 'wordpress', label: 'WordPress' },
    { to: 'contact', label: 'Contact' },
];

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__inner">
                <div className="footer__top">
                    <div className="footer__brand">
                        <h3 className="footer__logo">
                            <span className="gradient-text">Darshan Jadhav</span>
                        </h3>
                        <p className="footer__tagline"><b>· WordPress Developer <br />· Frontend Developer <br />· Web Developer</b></p>
                    </div>

                    <nav className="footer__nav">
                        <h4 className="footer__nav-title">Quick Links</h4>
                        <div className="footer__links">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={600}
                                    className="footer__link"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </nav>

                    <div className="footer__socials-wrap">
                        <h4 className="footer__nav-title">Connect</h4>
                        <div className="footer__socials">
                            <a href="https://github.com/Darshan3712" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/darshan-jadhav-915b10372/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                            <a href="mailto:jadhavdarshan006@gmail.com" aria-label="Email">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>
                        © 2025 Darshan Jadhav. Built with <FaHeart className="footer__heart" /> using React.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
