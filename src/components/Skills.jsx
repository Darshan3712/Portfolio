import {
    FaWordpress, FaFigma, FaDatabase, FaJsSquare, FaHtml5, FaCss3Alt,
    FaReact, FaGitAlt, FaGithub, FaPuzzlePiece, FaUsers, FaPaintBrush,
    FaHeadphones, FaHandshake, FaSyncAlt, FaMicrosoft, FaCloud, FaPhp
} from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

/* Custom SVG icon components — follow same pattern as react-icons (1em, currentColor) */
const XamppIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.792,11.923c0.113,0.043,0.226,0.079,0.334,0.128c0.45,0.203,0.715,0.553,0.748,1.044 c0.041,0.634,0.044,1.271,0.002,1.905c-0.049,0.732-0.725,1.292-1.483,1.271c-0.735-0.021-1.369-0.62-1.397-1.341 c-0.017-0.441-0.003-0.884-0.006-1.326c-0.001-0.239-0.003-0.242-0.245-0.243c-1.363-0.001-2.726,0.008-4.089-0.003 c-0.888-0.007-1.421,0.482-1.471,1.46c-0.019,0.38-0.1,0.727-0.357,1.018c-0.397,0.451-0.898,0.601-1.472,0.466 c-0.554-0.131-0.867-0.522-1.035-1.048c-0.117-0.367-0.056-0.737,0.012-1.094c0.341-1.797,1.366-3.006,3.125-3.555 c0.357-0.112,0.731-0.166,1.105-0.166c0.94,0.001,1.881,0.001,2.821-0.001c0.128,0,0.257-0.012,0.385-0.021 c0.702-0.051,1.166-0.511,1.22-1.352c0.004-0.064,0-0.129,0.001-0.193c0.011-0.788,0.605-1.396,1.393-1.425 c0.787-0.029,1.438,0.527,1.493,1.318c0.076,1.083-0.265,2.046-0.913,2.907C16.903,11.751,16.819,11.816,16.792,11.923z M8.249,10.436c-0.258-0.008-0.571,0.018-0.882-0.035c-0.536-0.09-0.876-0.39-1.02-0.916C6.19,8.912,6.25,8.388,6.698,7.96 C7.154,7.526,7.694,7.4,8.285,7.645c0.52,0.216,0.859,0.731,0.89,1.293C9.2,9.382,9.178,9.828,9.182,10.272 c0.001,0.116-0.043,0.167-0.161,0.165C8.781,10.434,8.542,10.436,8.249,10.436z M21.682,0H2.318C1.102,0,0.116,0.986,0.116,2.202 v19.317c0,1.37,1.111,2.481,2.481,2.481h18.807c1.37,0,2.481-1.111,2.481-2.481V2.202C23.884,0.986,22.898,0,21.682,0z M20.125,12.473c0.519,0.804,0.733,1.69,0.677,2.657c-0.108,1.886-1.413,3.474-3.25,3.916c-2.585,0.623-4.566-0.923-5.233-2.794 c-0.109-0.304-0.16-0.622-0.224-0.985c-0.068,0.414-0.115,0.789-0.264,1.134c-0.697,1.617-1.884,2.603-3.665,2.799 c-2.104,0.232-4.048-1.067-4.632-3.084c-0.25-0.863-0.175-1.747-0.068-2.625c0.08-0.653,0.321-1.268,0.632-1.848 c0.057-0.106,0.057-0.184-0.01-0.285c-0.561-0.845-0.779-1.777-0.7-2.784C3.43,8.035,3.56,7.52,3.805,7.038 C4.52,5.626,6.09,4.427,8.193,4.626c1.849,0.175,3.562,1.77,3.83,3.564c0.013,0.09,0.039,0.178,0.068,0.311 c0.044-0.241,0.076-0.439,0.118-0.636c0.344-1.63,1.94-3.335,4.201-3.357c2.292-0.021,3.99,1.776,4.31,3.446 c0.17,0.888,0.089,1.776-0.103,2.663c-0.112,0.517-0.31,1.008-0.524,1.492C20.034,12.245,20.043,12.345,20.125,12.473z" />
    </svg>
);

const WampIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 5h3.2l2.1 9.6L9.2 5h3.6l2.4 9.6L17.3 5h3.2L17 19h-3.4l-2.4-9.2L8.8 19H5.4L1.5 5z" />
    </svg>
);

const AntigravityIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.2 12.3c0-.6-.1-1.2-.2-1.8h-9.8v3.4h5.6c-.2 1.2-1 2.3-2 3v2.5h3.2c1.9-1.7 3.2-4.3 3.2-7.1z" />
        <path d="M12.2 22.5c2.7 0 5-0.9 6.6-2.4l-3.2-2.5c-.9.6-2.1 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.3v2.6c1.7 3.3 5.1 5.4 8.9 5.4z" />
        <path d="M6.6 14.5c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.9H3.3c-.7 1.4-1.1 3-1.1 4.6s.4 3.2 1.1 4.6l3.3-2.6z" />
        <path d="M12.2 6.4c1.5 0 2.8.5 3.8 1.5l2.9-2.8C17.1 3.5 14.9 2.5 12.2 2.5c-3.8 0-7.2 2.2-8.9 5.4l3.3 2.6c.8-2.4 3-4.1 5.6-4.1z" />
    </svg>
);

const skillCategories = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26' },
            { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6' },
            { name: 'JavaScript', icon: <FaJsSquare />, color: '#f7df1e' },
            { name: 'React', icon: <FaReact />, color: '#61dafb' },
        ],
    },
    {
        title: 'Backend & Database',
        skills: [
            { name: 'Express.js', icon: <SiExpress />, color: '#f0f0f5' },
            { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
            { name: 'SQL', icon: <FaDatabase />, color: '#00d4aa' },
            { name: 'PHP', icon: <FaPhp />, color: '#777BB4' },
        ],
    },
    {
        title: 'Development & CMS',
        skills: [
            { name: 'WordPress', icon: <FaWordpress />, color: '#21759b' },
            { name: 'Figma', icon: <FaFigma />, color: '#a259ff' },
            { name: 'XAMPP', icon: <XamppIcon />, color: '#FB7A24' },
            { name: 'WAMP', icon: <WampIcon />, color: '#F70094' },
            { name: 'Cloud Computing', icon: <FaCloud />, color: '#4285F4' },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
            { name: 'GitHub', icon: <FaGithub />, color: '#f0f0f5' },
            { name: 'VS Code', icon: <VscCode />, color: '#007acc' },
            { name: 'Antigravity', icon: <AntigravityIcon />, color: '#4285F4' },
            { name: 'Microsoft 365', icon: <FaMicrosoft />, color: '#D83B01' },
        ],
    },
    {
        title: 'Soft Skills',
        skills: [
            { name: 'Problem Solving', icon: <FaPuzzlePiece />, color: '#ff6b6b' },
            { name: 'Leadership', icon: <FaUsers />, color: '#ffd93d' },
            { name: 'Design Techniques', icon: <FaPaintBrush />, color: '#a259ff' },
            { name: 'Quick Listener', icon: <FaHeadphones />, color: '#4ecdc4' },
            { name: 'Team Collaboration', icon: <FaHandshake />, color: '#45b7d1' },
            { name: 'Adaptability', icon: <FaSyncAlt />, color: '#f7b731' },
        ],
    },
];

function Skills() {
    return (
        <section className="skills section-padding" id="skills">
            <div className="container">
                <div className="section-header">
                    <p className="section-label">My Skills</p>
                    <h2 className="section-title">Technologies I Work With</h2>
                    <p className="section-subtitle">
                        From design to deployment — the tools and technologies in my everyday toolkit.
                    </p>
                </div>

                <div className="skills__categories">
                    {skillCategories.map((cat, catIdx) => (
                        <div className="skills__category" key={catIdx}>
                            <h3 className="skills__category-title">{cat.title}</h3>
                            <div className="skills__grid">
                                {cat.skills.map((skill, idx) => (
                                    <div
                                        className="skills__card glass-card"
                                        key={idx}
                                        style={{ '--skill-color': skill.color }}
                                    >
                                        <span className="skills__icon">{skill.icon}</span>
                                        <span className="skills__name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
