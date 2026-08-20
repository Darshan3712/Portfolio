import { FaExternalLinkAlt, FaWordpress, FaImage } from 'react-icons/fa';

const base = import.meta.env.BASE_URL;

const wordpressSites = [
    {
        title: 'Auraverse Finserve',
        description: "Auraverse Finserve is a financial services company that provides a range of financial products and services to individuals and businesses.",
        image: `${base}images/Home-loan-side-image.jpg`,
        url: 'https://auraversefinserve.com/',
    },
    {
        title: 'Sri Sri Naisargik',
        description: "Sri Sri Naisargik, we harness nature-based solutions to restore nature, creating regenerative solutions that ensure clean air, safe water, and healthy soil, supporting life and stronger communities every day.",
        image: `${base}images/water1.jpg`,
        url: 'https://srisrinaisargik.com/',
    },
    {
        title: 'Sri Sri Ayurveda Hospital',
        description: "A world-class integrated ayurveda and wellness centre located in Bangalore, offering authentic Ayurvedic treatments, Yoga, and holistic healing in a serene environment.",
        image: `${base}images/ENT.jpg`,
        url: 'https://srisriayurvedahospital.org/',
    },
    {
        title: 'SSRDP',
        description: "Art of Living – Sri Sri Rural Development Programme Trust (AOL-SSRDP)",
        image: `${base}images/Green-Energy.jpeg`,
        url: 'https://ssrdp.artofliving.org/',
    },
    {
        title: 'Kingsley Gate',
        description: "Kingsley Gate is the world's first AI-native global executive search firm.",
        image: `${base}images/Kingsley_Gate_logo.jpg`,
        url: 'https://kingsleygate.com/',
    },
    {
        title: 'Zero Zeta',
        description: 'At Zero Zeta, we partner with enterprises and professionals to: Improve profitability by nurturing a data mindset and driving innovation through customized AI programs.',
        image: `${base}images/ZeroZeta.webp`,
        url: 'https://zerozeta.com/',
    },
    {
        title: 'Greenskn',
        description: 'Greenskn is an Indian AgriTech startup focused on developing natural, edible protective layer that extend the shelf life of fresh produce, reducing food waste and plastic use.',
        image: `${base}images/GreenSKN.png`,
        url: 'https://greenskn.com/',
    },
    {
        title: 'Azad Engineering Limited',
        description: 'Azad Engineering Limited is a manufacturer of complex, highly engineered precision forged and machined components for aerospace, defense, energy and oil and gas sectors.',
        image: `${base}images/AzadEngineering.webp`,
        url: 'https://azad.in/',
    },
    {
        title: 'Finsim',
        description: 'Finsim is a financial simulation platform that helps users learn about finance through interactive simulations.',
        image: `${base}images/finsim.jpg`,
        url: 'https://www.finsim.in/',
    },
];

function WordPressPortfolio() {
    return (
        <section className="wordpress section-padding" id="wordpress">
            <div className="container">
                <div className="section-header">
                    <p className="section-label">WordPress Portfolio</p>
                    <h2 className="section-title">Websites Worked On</h2>
                    <p className="section-subtitle">
                        A collection of WordPress websites crafted for clients at Master Web Works.
                    </p>
                </div>

                <div className="wordpress__grid">
                    {wordpressSites.map((site, idx) => (
                        <a
                            href={site.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="wordpress__card glass-card"
                            key={idx}
                        >
                            <div className="wordpress__image-wrapper">
                                <img
                                    src={site.image}
                                    alt={site.title}
                                    className="wordpress__image"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextElementSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="wordpress__placeholder" style={{ display: 'none' }}>
                                    <FaImage className="wordpress__placeholder-icon" />
                                    <span>Upload image to</span>
                                    <code>public/images/wordpress-{idx + 1}.png</code>
                                </div>
                            </div>
                            <div className="wordpress__info">
                                <div className="wordpress__info-top">
                                    <FaWordpress className="wordpress__wp-icon" />
                                    <h3 className="wordpress__title">{site.title}</h3>
                                </div>
                                <p className="wordpress__desc">{site.description}</p>
                                <span className="wordpress__link-text">
                                    {site.url === '#' ? 'Add live URL →' : <>Visit Site <FaExternalLinkAlt /></>}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WordPressPortfolio;
