import { Link } from 'react-scroll';
import { FaArrowDown } from 'react-icons/fa';

function Hero() {
    return (
        <section className="hero" id="hero">
            {/* Animated background orbs */}
            <div className="hero__orb hero__orb--1"></div>
            <div className="hero__orb hero__orb--2"></div>
            <div className="hero__orb hero__orb--3"></div>

            <div className="container hero__content">
                <p className="hero__greeting">Hello, I'm</p>
                <h1 className="hero__name">
                    Darshan <span className="gradient-text">Jadhav</span>
                </h1>
                <p className="hero__title">WordPress Developer · Frontend Developer · Web Developer</p>
                <p className="hero__tagline">
                    Crafting modern, high-performance web experiences with clean code and creative design.
                </p>

                <div className="hero__actions">
                    <Link to="projects" smooth={true} offset={-80} duration={600} className="btn btn-primary">
                        View My Work
                    </Link>
                    <Link to="contact" smooth={true} offset={-80} duration={600} className="btn btn-outline">
                        Get in Touch
                    </Link>
                </div>

                <Link to="about" smooth={true} offset={-80} duration={600} className="hero__scroll-indicator">
                    <FaArrowDown />
                </Link>
            </div>
        </section>
    );
}

export default Hero;
