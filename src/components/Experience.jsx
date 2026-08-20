import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const experiences = [
    {
        type: 'work',
        icon: <FaBriefcase />,
        company: 'Shankara Online Solutions',
        role: 'Web Developer',
        period: 'Feb 2026 – Present',
        description:
            'Developing responsive WordPress websites and modern React applications. Building custom themes, plugins, and SEO-friendly websites. Creating internal applications, interactive dashboards, and leveraging Antigravity and AI tools to streamline development workflows.',
        tags: ['WordPress', 'React', 'PHP', 'Themes', 'Plugins', 'SEO', 'Internal Applications', 'Dashboards', 'Antigravity', 'AI Tools'],
    },
    {
        type: 'work',
        icon: <FaBriefcase />,
        company: 'Master Web Works',
        role: 'WordPress Developer (Freelancer)',
        period: 'Jan 2025 – Feb 2026',
        description:
            'Building responsive WordPress websites for clients. Custom theme development, plugin integration, SEO optimization, and performance tuning. Managing end-to-end web projects from design to deployment.',
        tags: ['WordPress', 'CSS', 'PHP', 'SEO', 'Themes', 'Plugins', 'Deployment', 'Maintenance'],
    },
    {
        type: 'internship',
        icon: <FaGraduationCap />,
        company: 'JSpiders',
        role: 'Frontend Developer Intern',
        period: 'Mar 2025 – Dec 2025',
        description:
            'Training in modern frontend technologies including React, JavaScript (ES6+), and responsive design patterns. Building interactive UI components and single-page applications.',
        tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'SQL', 'Java'],
    },
    {
        type: 'internship',
        icon: <FaGraduationCap />,
        company: 'Rooman Technologies',
        role: 'AI-DevOps Intern',
        period: 'Sep 2024 – May 2025',
        description:
            'Hands-on experience with AI/ML workflows, DevOps practices, CI/CD pipelines, and cloud deployment strategies. Exposure to Linux, Docker, and automation scripting.',
        tags: ['AI/ML', 'DevOps', 'Linux', 'CI/CD', 'Docker', 'AWS', 'Jenkins', 'Git', 'CC'],
    },
    {
        type: 'internship',
        icon: <FaGraduationCap />,
        company: 'IBM',
        role: 'DevOps Intern',
        period: 'Sep 2024 – Apr 2025',
        description:
            'Improving Deployment Speed and Reducing Production Issues with DevOps Practices',
        tags: ['DevOps', 'CI/CD', 'Jenkins', 'Git'],
    },
];

function Experience() {
    return (
        <section className="experience section-padding" id="experience">
            <div className="container">
                <div className="section-header">
                    <p className="section-label">Experience</p>
                    <h2 className="section-title">Work & Internships</h2>
                    <p className="section-subtitle">
                        My professional journey — from internships to freelance development.
                    </p>
                </div>

                <div className="experience__timeline">
                    {experiences.map((exp, idx) => (
                        <div className={`experience__item experience__item--${idx % 2 === 0 ? 'left' : 'right'}`} key={idx}>
                            <div className="experience__dot">
                                {exp.icon}
                            </div>
                            <div className="experience__card glass-card">
                                <span className={`experience__badge experience__badge--${exp.type}`}>
                                    {exp.type === 'work' ? 'Work' : 'Internship'}
                                </span>
                                <h3 className="experience__company">{exp.company}</h3>
                                <p className="experience__role">{exp.role}</p>
                                <p className="experience__period">{exp.period}</p>
                                <p className="experience__desc">{exp.description}</p>
                                <div className="experience__tags">
                                    {exp.tags.map((tag, tIdx) => (
                                        <span className="experience__tag" key={tIdx}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
