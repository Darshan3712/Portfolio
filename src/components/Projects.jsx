import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: 'Car Driving School DBMS',
        description:
            'A comprehensive database management system for a driving school, handling student registrations, instructor assignments, vehicle tracking, scheduling, and payment records. Built with SQL for efficient data management.',
        tags: ['SQL', 'Database Design', 'HTML/CSS', 'JavaScript', 'Bootstrap', 'WAMP'],
        color: '#6c63ff',
    },
    {
        title: 'Hand Simulation',
        description:
            'Real-time hand gesture recognition and simulation using Python and OpenCV. Tracks hand movements through a webcam feed and maps them to virtual hand movements for interactive control applications.',
        tags: ['Python', 'OpenCV', 'Computer Vision'],
        color: '#00d4aa',
    },
    {
        title: 'Bus Reservation System',
        description:
            'A full-stack bus reservation web application built with Django. Features include route search, seat selection, booking management, user authentication, and an admin dashboard for fleet management.',
        tags: ['Django', 'HTML/CSS', 'JavaScript', 'Bootstrap', 'WAMP',],
        color: '#ff6b9d',
    },
    {
        title: 'Attendance with Face Recognition',
        description:
            'An automated attendance tracking system using facial recognition technology. Captures student faces via webcam, matches them against a stored database, and logs attendance records automatically.',
        tags: ['Python', 'OpenCV', 'Face Recognition', 'ML'],
        color: '#f7df1e',
    },
];

function Projects() {
    return (
        <section className="projects section-padding" id="projects">
            <div className="container">
                <div className="section-header">
                    <p className="section-label">Projects</p>
                    <h2 className="section-title">Academic Projects</h2>
                    <p className="section-subtitle">
                        A showcase of academic projects demonstrating my technical skills.
                    </p>
                </div>

                <div className="projects__grid">
                    {projects.map((proj, idx) => (
                        <div className="projects__card glass-card" key={idx}>
                            <div className="projects__card-header" style={{ '--project-color': proj.color }}>
                                <FaCode className="projects__icon" />
                                <span className="projects__number">0{idx + 1}</span>
                            </div>
                            <h3 className="projects__title">{proj.title}</h3>
                            <p className="projects__desc">{proj.description}</p>
                            <div className="projects__tags">
                                {proj.tags.map((tag, tIdx) => (
                                    <span className="projects__tag" key={tIdx}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
