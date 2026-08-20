import { FaGraduationCap, FaCalendarAlt, FaChartLine } from 'react-icons/fa';

const educationData = [
    {
        degree: 'Bachelor of Engineering (B.E)',
        field: 'Computer Science & Engineering',
        institution: 'Maratha Mandals Engineering College ',
        period: '2022 - 2025',
        grade: 'CGPA: 7.98 / 10',
        icon: <FaGraduationCap />,
    },
    {
        degree: 'Diploma',
        field: 'Computer Science',
        institution: 'Jain Polytechnic Belagavi',
        period: '2019 - 2022',
        grade: 'Percentage: 69%',
        icon: <FaGraduationCap />,
    },
];

function Education() {
    return (
        <section className="education section-padding" id="education">
            <div className="container">
                <div className="section-header">
                    <p className="section-label">Education</p>
                    <h2 className="section-title">Academic Background</h2>
                </div>

                <div className="education__cards">
                    {educationData.map((edu, idx) => (
                        <div className="education__card glass-card" key={idx}>
                            <div className="education__icon-wrap">
                                {edu.icon}
                            </div>
                            <div className="education__content">
                                <h3 className="education__degree">{edu.degree}</h3>
                                <p className="education__field">{edu.field}</p>
                                <p className="education__institution">{edu.institution}</p>
                                <div className="education__meta">
                                    <span className="education__meta-item">
                                        <FaCalendarAlt /> {edu.period}
                                    </span>
                                    <span className="education__meta-item">
                                        <FaChartLine /> {edu.grade}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
