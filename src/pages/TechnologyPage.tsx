// src/pages/TechnologyPage.jsx
// You can use icons from a library like react-icons
import {
    FiCpu, FiTrendingUp, FiLayers, FiEye, FiChevronsRight, FiZap,
    FiActivity, FiBarChart2, FiMessageSquare, FiCheckCircle, FiShield // Replaced FiBrain with FiActivity
} from 'react-icons/fi';

// Dummy data for AI Projects & Products
const aiProjects = [
    {
        id: 'ai-proj-1',
        title: 'Customer Churn Prediction Engine',
        category: 'Machine Learning',
        icon: <FiActivity className="w-7 h-7 mr-2 text-teal-400" />,
        description: 'Developed a robust machine learning model analyzing customer behavior, demographics, and transaction history to proactively identify and mitigate churn risks. Integrated with CRM for actionable insights.',
        technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas', 'SQL', 'AWS SageMaker'],
        imageUrl: 'https://images.unsplash.com/photo-1516062423079-7ca1309d487f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByZWRpY3RpdmUlMjBhbmFseXRpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60', // Image of predictive charts or analytics dashboard
        type: 'Product',
        highlights: [
            'Achieved 90%+ accuracy in churn prediction.',
            'Reduced customer churn by 18% in 6 months.',
            'Scalable cloud-based deployment & real-time scoring.',
        ]
    },
    {
        id: 'ai-proj-2',
        title: 'Intelligent Document Analyzer (IDA)',
        category: 'NLP & Computer Vision',
        icon: <FiMessageSquare className="w-7 h-7 mr-2 text-teal-400" />,
        description: 'An AI-powered platform that automates information extraction from various document types (PDFs, scans, images). Utilizes OCR, NLP for understanding context, and ML for classification and validation.',
        technologies: ['Python', 'SpaCy', 'Tesseract OCR', 'PyTorch', 'OpenCV', 'Docker', 'Kubernetes'],
        imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbCUyMGxhbmd1YWdlJTIwcHJvY2Vzc2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60', // Image representing NLP or abstract text processing
        type: 'Product',
        highlights: [
            'Supports 20+ document formats and languages.',
            'Reduces manual data entry by up to 85%.',
            'Customizable extraction templates & validation workflows.',
        ]
    },
    {
        id: 'ai-proj-3',
        title: 'Real-time Anomaly Detection for Industrial IoT',
        category: 'Data Analysis & ML',
        icon: <FiBarChart2 className="w-7 h-7 mr-2 text-teal-400" />,
        description: 'A system for monitoring sensor data from industrial equipment to detect anomalies indicative of potential failures or inefficiencies. Employs unsupervised learning and statistical modeling for predictive maintenance.',
        technologies: ['Kafka', 'Spark Streaming', 'Prometheus', 'Python', 'Scikit-learn', 'Grafana'],
        imageUrl: 'https://images.unsplash.com/photo-1611606003696-91b5080039a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlvdCUyMHNlbnNvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60', // Image of industrial sensors or IoT network data
        type: 'Project',
        highlights: [
            'Processes millions of data points per second.',
            'Early fault detection reducing downtime by 25%.',
            'Interactive dashboards for operational visibility.',
        ]
    },
];


// Dummy data for DX Cases (focus on UI/UX of AI systems)
const dxCases = [
    {
        id: 1,
        title: 'AI-Powered Predictive Analytics Platform UX',
        description: 'Revolutionized decision-making for a finance client with a sleek, intuitive dashboard showcasing complex AI-driven insights through interactive visualizations and smooth animations.',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFzaGJvYXJkJTIwdWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        tags: ['UI/UX Design', 'Data Visualization', 'React', 'Animation', 'AI Insights Presentation'],
    },
    {
        id: 2,
        title: 'Robotics Process Automation Control Panel',
        description: 'Designed a user-friendly control panel for an RPA system, enabling seamless AI-bot process monitoring and management with clear visual cues and real-time feedback.',
        imageUrl: 'https://images.unsplash.com/photo-1620712943543-285820f76869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvYm90JTIwaW50ZXJmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        tags: ['UX Design', 'Interaction Design', 'Vue.js', 'Real-time UI', 'RPA Management'],
    },
    {
        id: 3,
        title: 'E-commerce AI Recommendation Engine UI/UX',
        description: 'Enhanced an e-commerce platform with a dynamic AI recommendation system, presented through an engaging and non-intrusive UI that adapts to user behavior and boosts conversion.',
        imageUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZSUyMGNvbW1lcmNlJTIwdWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        tags: ['UI Design', 'Personalization', 'Angular', 'Micro-interactions', 'AI-Driven UX'],
    },
];

const TechnologyPage = () => {
    return (
        <div className="bg-slate-900 min-h-screen text-gray-100 font-sans">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
                <div className="absolute inset-0 opacity-10">
                    {/* Subtle background pattern or image if desired */}
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
                            AI-Driven Technology & DX
                        </span> at LLP
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        LLP pioneers advanced AI solutions and products, combined with exceptional Digital Experience (DX) design, to tackle complex challenges and create tangible value.
                    </p>
                    <a
                        href="#ai-solutions"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 inline-block"
                    >
                        Explore Our AI Solutions <FiChevronsRight className="inline ml-2" />
                    </a>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-32 h-32 md:w-48 md:h-48 opacity-20">
                    <FiActivity className="w-full h-full text-blue-500" /> {/* Changed icon to FiActivity */}
                </div>
            </section>

            {/* AI Solutions: Projects & Products Section */}
            <section id="ai-solutions" className="py-16 md:py-24 bg-slate-800/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-300">
                            Our AI Solutions:Products
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Discover how LLP leverages cutting-edge AI to build innovative products and deliver impactful project outcomes.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
                        {aiProjects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-slate-900 rounded-xl shadow-2xl overflow-hidden flex flex-col group transform hover:scale-105 transition-transform duration-300"
                            >
                                {project.imageUrl && (
                                    <div className="relative h-56">
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                                        />
                                        <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${project.type === 'Product' ? 'bg-teal-500 text-white' : 'bg-purple-500 text-white'}`}>
                                            {project.type}
                                        </span>
                                    </div>
                                )}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center mb-3">
                                        {project.icon}
                                        <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                                    </div>
                                    <p className="text-sm text-gray-400 mb-1"><span className="font-semibold text-gray-300">Category:</span> {project.category}</p>
                                    <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>

                                    {project.highlights && project.highlights.length > 0 && (
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Highlights:</h4>
                                            <ul className="space-y-1">
                                                {project.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="flex items-start text-xs text-gray-400">
                                                        <FiCheckCircle className="w-4 h-4 mr-2 mt-0.5 text-teal-400 flex-shrink-0" />
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="mt-auto">
                                        <h4 className="text-sm font-semibold text-gray-200 mb-2">Technologies:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span key={tech} className="text-xs bg-slate-700 text-blue-300 px-2 py-1 rounded-full">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Technical Trust Section */}
            <section className="py-16 md:py-24 bg-slate-800"> {/* Adjusted background for contrast */}
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">Building Technical Trust</h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Our commitment to robust, secure, and ethical AI underpins every solution we deliver.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <FiCpu className="w-10 h-10 text-blue-500 mb-4" />, title: 'Advanced AI Core', description: 'Leveraging state-of-the-art machine learning, NLP, and computer vision models.' },
                            { icon: <FiShield className="w-10 h-10 text-blue-500 mb-4" />, title: 'Robust Security & Privacy', description: 'Implementing industry-best practices for data privacy, model security, and system integrity.' }, // Changed FiLock to FiShield
                            { icon: <FiTrendingUp className="w-10 h-10 text-blue-500 mb-4" />, title: 'Scalable Architecture', description: 'Designing solutions that grow with your needs, ensuring long-term performance and adaptability.' },
                            { icon: <FiLayers className="w-10 h-10 text-blue-500 mb-4" />, title: 'Transparent Processes', description: 'Clear communication and explainable AI (XAI) principles to foster understanding and confidence.' },
                            { icon: <FiZap className="w-10 h-10 text-blue-500 mb-4" />, title: 'High Performance', description: 'Optimized algorithms and infrastructure for speed, efficiency, and real-world impact.' },
                            { icon: <FiEye className="w-10 h-10 text-blue-500 mb-4" />, title: 'Ethical AI Commitment', description: 'Focused on fairness, accountability, and societal benefit in all AI applications.' },
                        ].map((item, index) => (
                            <div key={index} className="bg-slate-900 p-6 rounded-xl shadow-xl hover:shadow-blue-500/30 transition-shadow duration-300 flex flex-col items-center text-center">
                                {item.icon}
                                <h3 className="text-xl font-semibold mb-2 text-gray-100">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DX & UI/UX Showcase Section */}
            <section id="dx-showcase" className="py-16 md:py-24 bg-slate-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-300">
                            DX & UI/UX Showcase in AI
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            We craft intuitive and visually stunning interfaces that make complex AI accessible and delightful to use, ensuring high-quality digital experiences.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
                        {dxCases.map((caseItem) => (
                            <div
                                key={caseItem.id}
                                className="bg-slate-800 rounded-xl shadow-2xl overflow-hidden group transform hover:scale-105 transition-transform duration-300"
                            >
                                <div className="relative h-56">
                                    <img
                                        src={caseItem.imageUrl}
                                        alt={caseItem.title}
                                        className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        {/* Can add overlay content here if needed */}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-blue-400">{caseItem.title}</h3>
                                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{caseItem.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {caseItem.tags.map((tag) => (
                                            <span key={tag} className="text-xs bg-blue-600/50 text-blue-300 px-2 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="text-center mt-16">
                        <a
                            href="/portfolio" // Link to a more detailed portfolio or contact page
                            className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 inline-block"
                        >
                            View More DX Projects
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer placeholder */}
            <footer className="py-12 bg-blue-950 text-center">
                <p className="text-gray-400">© {new Date().getFullYear()} LLP AI. All rights reserved.</p>
                <p className="text-sm text-gray-500 mt-1">Innovating the Future, Responsibly.</p>
            </footer>
        </div>
    );
};

export default TechnologyPage;