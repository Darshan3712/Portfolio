import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaLinkedinIn, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const EMAILJS_SERVICE_ID = 'service_4rg8yns';
const EMAILJS_TEMPLATE_ID = 'template_fyfktyt';
const EMAILJS_PUBLIC_KEY = 'Jp5Ca49BpyKH4oigN';

const contactInfo = [
    {
        icon: <FaEnvelope />,
        label: 'Email',
        value: 'jadhavdarshan006@gmail.com',
        href: 'mailto:jadhavdarshan006@gmail.com',
    },
    {
        icon: <FaPhone />,
        label: 'Phone',
        value: '+91 9380725710',
        href: 'tel:+919380725710',
    },
    {
        icon: <FaLinkedinIn />,
        label: 'LinkedIn',
        value: 'Darshan Jadhav',
        href: 'https://www.linkedin.com/in/darshan-jadhav-915b10372/',
    },
    {
        icon: <FaMapMarkerAlt />,
        label: 'Location',
        value: 'Bengaluru, Karnataka',
        href: null,
    },
];

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: 'Darshan',
        };

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
            publicKey: EMAILJS_PUBLIC_KEY,
        })
            .then(() => {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            })
            .catch((err) => {
                console.error('EmailJS Error:', err);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

    return (
        <section className="contact section-padding" id="contact">
            <div className="container">
                <div className="section-header">
                    <p className="section-label">Contact</p>
                    <h2 className="section-title">Let's Work Together</h2>
                    <p className="section-subtitle">
                        Have a project in mind or want to collaborate? I'd love to hear from you.
                    </p>
                </div>

                <div className="contact__grid">
                    <div className="contact__info">
                        {contactInfo.map((info, idx) => (
                            <a
                                href={info.href || '#'}
                                className="contact__info-card glass-card"
                                key={idx}
                                target={info.href && info.href.startsWith('http') ? '_blank' : undefined}
                                rel={info.href && info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                                <span className="contact__info-icon">{info.icon}</span>
                                <div>
                                    <p className="contact__info-label">{info.label}</p>
                                    <p className="contact__info-value">{info.value}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    <form className="contact__form glass-card" onSubmit={handleSubmit}>
                        <h3 className="contact__form-title">Send a Message</h3>
                        <div className="contact__form-group">
                            <input type="text" name="name" placeholder="Your Name" className="contact__input" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="contact__form-group">
                            <input type="email" name="email" placeholder="Your Email" className="contact__input" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="contact__form-group">
                            <input type="text" name="subject" placeholder="Subject" className="contact__input" value={formData.subject} onChange={handleChange} />
                        </div>
                        <div className="contact__form-group">
                            <textarea name="message" placeholder="Your Message" className="contact__textarea" rows={5} value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary contact__submit" disabled={status === 'sending'}>
                            {status === 'sending' ? (
                                <>Sending...</>
                            ) : (
                                <><FaPaperPlane /> Send Message</>
                            )}
                        </button>
                        {status === 'success' && (
                            <p className="contact__status contact__status--success">
                                <FaCheckCircle /> Message sent successfully!
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="contact__status contact__status--error">
                                <FaTimesCircle /> Failed to send. Please try again or email directly.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;

