import { useState } from 'react';
import {
    FaTasks, FaUserShield, FaUserTie, FaUserCheck, FaUser,
    FaServer, FaCheckCircle, FaCalendarCheck, FaCloud, FaRocket, FaShieldAlt,
    FaPhotoVideo, FaInstagram, FaGlobe, FaArrowsAlt,
    FaCalculator, FaChartPie, FaPiggyBank, FaFileAlt, FaHome, FaCar, FaBuilding, FaHeartbeat
} from 'react-icons/fa';
import { SiReact, SiExpress, SiMongodb, SiVercel, SiGithubactions } from 'react-icons/si';

const toolsData = [
    {
        id: 'task-flow',
        name: 'Task Flow',
        tagline: 'Internal Workflow & Monthly Work Scheduling System',
        company: 'Shankara Online Solutions',
        badge: 'Full-Stack Web App',
        status: 'Production / Deployed',
        icon: <FaTasks />,
        summary:
            'A comprehensive internal management application built to eliminate daily follow-ups and automate project task delegation. Features a monthly work scheduler, daily task tracking, client-initiated task requests, and multi-tier role-based access control.',
        techStack: [
            { name: 'React', icon: <SiReact />, role: 'Frontend (SPA)', host: 'Bluehost' },
            { name: 'Node.js & Express', icon: <SiExpress />, role: 'Backend REST API', host: 'Render' },
            { name: 'MongoDB Atlas', icon: <SiMongodb />, role: 'Cloud Database', host: 'Atlas Cloud' },
            { name: 'REST APIs', icon: <FaServer />, role: 'API Services', host: 'Render' },
        ],
        roles: [
            {
                role: 'Superadmin',
                icon: <FaUserShield />,
                color: '#ff6b6b',
                description:
                    'Master system control. Manages all tasks, global settings, and has full authority to create and manage Employees, Projects, Services, and Admins.',
            },
            {
                role: 'Admin',
                icon: <FaUserTie />,
                color: '#6c63ff',
                description:
                    'Operational management. Assigns incoming tasks to appropriate employees, creates/onboards employees, and monitors departmental workload.',
            },
            {
                role: 'Employee',
                icon: <FaUserCheck />,
                color: '#00d4aa',
                description:
                    'Execution dashboard. Views daily and monthly scheduled tasks, tracks deliverables, and updates completion status with zero friction.',
            },
            {
                role: 'Client',
                icon: <FaUser />,
                color: '#ffd93d',
                description:
                    'Client portal. Creates new task requests for their specific projects, specifies required delivery dates, and tracks progress transparently.',
            },
        ],
        highlights: [
            'Monthly work scheduling with daily breakdown to eliminate recurring follow-up meetings',
            'Client task creation portal with custom required delivery date picker',
            '4-tier role-based authorization (Superadmin, Admin, Employee, Client)',
            'Dynamic project, employee, and service management with granular permissions',
            'Cloud architecture: React on Bluehost + Node/Express backend & REST APIs deployed on Render + MongoDB Atlas',
        ],
        tags: ['React', 'Node.js', 'Express.js', 'MongoDB Atlas', 'REST APIs', 'Render', 'Bluehost', 'RBAC', 'Task Management'],
    },
    {
        id: 'workframe',
        name: 'WorkFrame',
        tagline: 'Dynamic Multi-Media Portfolio & Creative Showcase Platform',
        company: 'Shankara Online Solutions',
        badge: 'Full-Stack Showcase Platform',
        status: 'Production / Deployed',
        icon: <FaPhotoVideo />,
        summary:
            'A specialized portfolio and media showcase platform engineered to display company creative work in an intuitive tabbed experience. Features dynamic drag-and-drop prioritization for trending Instagram Reels, YouTube Shorts, Websites, and direct Behance integration with a unified monorepo architecture.',
        techStack: [
            { name: 'React', icon: <SiReact />, role: 'Client (Frontend)', host: 'Vercel' },
            { name: 'Node.js & Express', icon: <SiExpress />, role: 'Server (Backend)', host: 'Vercel' },
            { name: 'MongoDB Atlas', icon: <SiMongodb />, role: 'Cloud Database', host: 'Atlas Cloud' },
            { name: 'GitHub Actions', icon: <SiGithubactions />, role: 'CI/CD & Branch Management', host: 'GitHub' },
        ],
        roles: [
            {
                role: 'Admin Panel',
                icon: <FaUserShield />,
                color: '#ff6b6b',
                description:
                    'Complete control to assign media items into project categories, reorder items, and manage showcase assets.',
            },
            {
                role: 'Category Prioritization',
                icon: <FaArrowsAlt />,
                color: '#6c63ff',
                description:
                    'Drag-and-drop category management to bring high-priority client projects to the top of the showcase.',
            },
            {
                role: 'Trending Media Ordering',
                icon: <FaInstagram />,
                color: '#00d4aa',
                description:
                    'Drag-and-drop sorting for individual Instagram Reels and YouTube Shorts to highlight trending creative deliverables.',
            },
            {
                role: 'Website & Behance Portal',
                icon: <FaGlobe />,
                color: '#ffd93d',
                description:
                    'Priority-based website presentation and seamless direct link integration to official Behance portfolios.',
            },
        ],
        highlights: [
            'Tabbed multimedia layout for Instagram Reels, YouTube Shorts, Websites, and Behance',
            'Interactive Drag & Drop ordering for project categories and individual media items',
            'Full Admin Panel to assign and curate trending content to specific project groups',
            'Unified single-repository architecture with clean client/ and server/ directory separation',
            'Seamless CI/CD deployment on Vercel managed via GitHub Actions with multi-branch workflows',
        ],
        tags: ['React', 'Express.js', 'MongoDB Atlas', 'Vercel', 'GitHub Actions', 'Drag & Drop', 'Media CMS', 'Admin Panel'],
    },
    {
        id: 'auraverse-calc',
        name: 'Auraverse Financial Calculator',
        tagline: 'Comprehensive Financial Planning & Calculator Suite',
        company: 'Auraverse Finserve — calculator.auraversefinserve.com',
        badge: 'Frontend Web App',
        status: 'Production / Deployed on Bluehost',
        icon: <FaCalculator />,
        summary:
            'A dedicated financial calculator platform built exclusively for Auraverse Finserve clients. Provides deep, interactive calculators across Loans, Investments, Insurance, and Financial Planning — each with real-time Pie Chart breakdowns, EMI calculations, and monthly projections. Complemented by educational articles that guide users on investment strategies and financial planning decisions.',
        techStack: [
            { name: 'React', icon: <SiReact />, role: 'Frontend (SPA)', host: 'Bluehost' },
            { name: 'Pie Charts (Recharts)', icon: <FaChartPie />, role: 'Data Visualization', host: 'Client-side' },
            { name: 'No Backend / No DB', icon: <FaCalculator />, role: 'Pure Frontend Tool', host: 'Bluehost' },
            { name: 'Financial Algorithms', icon: <FaPiggyBank />, role: 'Calculation Engine', host: 'Client-side' },
        ],
        roles: [
            {
                role: 'Loans Suite',
                icon: <FaHome />,
                color: '#6c63ff',
                description:
                    'Home Loan, Education Loan, Business Loan, Personal Loan, Loan Against Property, and Vehicle Loan — each with interactive sliders for amount, interest rate, tenure, and processing fee. Pie chart shows Principal, Total Interest, and Processing Fee breakdown.',
            },
            {
                role: 'Investments Suite',
                icon: <FaPiggyBank />,
                color: '#00d4aa',
                description:
                    'Real Estate, SIP, Mutual Funds, Fixed Deposits, PPF, and Bonds Calculator — projects returns, compounding growth, estimated gains, and total maturity value with visual Pie chart representations.',
            },
            {
                role: 'Insurance Suite',
                icon: <FaHeartbeat />,
                color: '#ff6b6b',
                description:
                    'Life Insurance, General / Health Insurance, Term Insurance, and Motor Insurance calculators — helping clients estimate premiums and coverage suitability aligned to their financial goals.',
            },
            {
                role: 'Financial Planning Suite',
                icon: <FaFileAlt />,
                color: '#ffd93d',
                description:
                    'Goal Based Savings Planner, Children\'s Education, Wealth Creation, Retirement Planning, Tax Planner, Risk Management, Inflation Calculator, and Pension Calculator — with goal preset selections and projected growth charts.',
            },
        ],
        highlights: [
            'Pure frontend solution — no backend or database; fully deployed on Bluehost',
            'Real-time interactive sliders for all financial inputs with instant recalculations',
            'Pie Chart visualizations for every calculator showing cost breakup and projected returns',
            'Goal-based savings planner with presets: Buy a Car, Buy a House, Child\'s Education, Retirement, Vacation, Custom',
            '15+ individual calculators across Loans, Investments, Insurance, and Financial Planning',
            'Educational Articles section guiding users on investment strategies and financial planning',
        ],
        tags: ['React', 'Recharts', 'Bluehost', 'Financial Calculators', 'EMI', 'SIP', 'Pie Charts', 'Loan Suite', 'Investment Suite'],
    },
];

function CompanyTools() {
    const [activeTool, setActiveTool] = useState(toolsData[0].id);

    const selectedTool = toolsData.find((t) => t.id === activeTool) || toolsData[0];

    return (
        <section className="company-tools section-padding" id="tools">
            <div className="container">
                <div className="section-header">
                    <p className="section-label">Internal Solutions</p>
                    <h2 className="section-title">Company Tools & Applications</h2>
                    <p className="section-subtitle">
                        Custom full-stack web applications and internal tools engineered for operational efficiency and creative showcase at Shankara Online Solutions.
                    </p>
                </div>

                {/* Tool Selection Tabs */}
                <div className="company-tools__tabs">
                    {toolsData.map((tool) => (
                        <button
                            key={tool.id}
                            className={`company-tools__tab-btn ${activeTool === tool.id ? 'active' : ''}`}
                            onClick={() => setActiveTool(tool.id)}
                        >
                            {tool.icon} {tool.name}
                        </button>
                    ))}
                </div>

                <div className="company-tools__main-card glass-card">
                    {/* Header Banner */}
                    <div className="company-tools__card-header">
                        <div className="company-tools__header-left">
                            <div className="company-tools__icon-badge">
                                {selectedTool.icon}
                            </div>
                            <div>
                                <div className="company-tools__title-row">
                                    <h3 className="company-tools__title">{selectedTool.name}</h3>
                                    <span className="company-tools__badge">{selectedTool.badge}</span>
                                    <span className="company-tools__badge-status">
                                        <FaCheckCircle /> {selectedTool.status}
                                    </span>
                                </div>
                                <p className="company-tools__tagline">{selectedTool.tagline}</p>
                                <p className="company-tools__company">Built for <strong>{selectedTool.company}</strong></p>
                            </div>
                        </div>
                    </div>

                    {/* Overview */}
                    <div className="company-tools__section">
                        <h4 className="company-tools__section-title">
                            <FaRocket /> Overview & Problem Solved
                        </h4>
                        <p className="company-tools__summary">{selectedTool.summary}</p>
                    </div>

                    {/* Architecture / Deployment Pipeline */}
                    <div className="company-tools__section">
                        <h4 className="company-tools__section-title">
                            <FaCloud /> Architecture & Deployment Pipeline
                        </h4>
                        <div className="company-tools__tech-grid">
                            {selectedTool.techStack.map((tech, idx) => (
                                <div className="company-tools__tech-card" key={idx}>
                                    <span className="company-tools__tech-icon">{tech.icon}</span>
                                    <div className="company-tools__tech-info">
                                        <span className="company-tools__tech-name">{tech.name}</span>
                                        <span className="company-tools__tech-role">{tech.role}</span>
                                        <span className="company-tools__tech-host">Deployment: <strong>{tech.host}</strong></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Key System Roles & Modules */}
                    <div className="company-tools__section">
                        <h4 className="company-tools__section-title">
                            <FaShieldAlt /> Key Modules & Capabilities
                        </h4>
                        <div className="company-tools__roles-grid">
                            {selectedTool.roles.map((r, idx) => (
                                <div
                                    className="company-tools__role-card"
                                    key={idx}
                                    style={{ '--role-accent': r.color }}
                                >
                                    <div className="company-tools__role-top">
                                        <span className="company-tools__role-icon">{r.icon}</span>
                                        <h5 className="company-tools__role-name">{r.role}</h5>
                                    </div>
                                    <p className="company-tools__role-desc">{r.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="company-tools__section">
                        <h4 className="company-tools__section-title">
                            <FaCalendarCheck /> Core Highlights
                        </h4>
                        <ul className="company-tools__highlights">
                            {selectedTool.highlights.map((item, idx) => (
                                <li key={idx} className="company-tools__highlight-item">
                                    <FaCheckCircle className="company-tools__check-icon" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tags */}
                    <div className="company-tools__tags">
                        {selectedTool.tags.map((tag, idx) => (
                            <span className="company-tools__tag" key={idx}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CompanyTools;
