import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLanguage } from 'react-icons/fa';

const infoItems = [
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Bengaluru, Karnataka' },
    { icon: <FaEnvelope />, label: 'Email', value: 'jadhavdarshan006@gmail.com' },
    { icon: <FaPhone />, label: 'Phone', value: '+91 9380725710' },
    { icon: <FaLanguage />, label: 'Languages', value: 'English, Hindi, Kannada, Marathi' },
];

function About() {
    return (
        <section className="about section-padding" id="about">
            <div className="container">
                <div className="section-header">
                    <p className="section-label">About Me</p>
                    <h2 className="section-title">Professional Summary</h2>
                </div>

                <div className="about__grid">
                    <div className="about__text">
                        <p>
                            I'm <strong>Darshan Arun Jadhav</strong>, a passionate Web Developer and Frontend
                            Developer based in Bengaluru, Karnataka. Currently working as a Web Developer
                            at <strong>Shankara Online Solutions</strong>, I specialize in building responsive, user-centric
                            websites and web applications.
                        </p>
                        <p>
                            With a strong foundation in Computer Science (B.E., CGPA 7.98) and hands-on experience
                            through internships at <strong>Rooman Technologies</strong> and <strong>JSpiders</strong>,
                            I bring a unique blend of academic knowledge and practical skills to every project.
                        </p>
                        <p>
                            My expertise spans WordPress development, React, JavaScript, Express.js, MongoDB,
                            Figma designs, and modern full-stack web technologies. I'm driven by a desire to create
                            clean, efficient, and visually striking digital experiences.
                        </p>
                    </div>

                    <div className="about__info-grid">
                        {infoItems.map((item, index) => (
                            <div className="about__info-card glass-card" key={index}>
                                <span className="about__info-icon">{item.icon}</span>
                                <div>
                                    <p className="about__info-label">{item.label}</p>
                                    <p className="about__info-value">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
