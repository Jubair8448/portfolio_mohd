import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../components/Home/Navbar/Navbar";
import Footer from "../components/Home/Footer/Footer";
import Scrollup from "../components/Home/Scrollup/Scrollup";

// Animations
const float = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
`;

const fadeIn = keyframes`
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
`;

// Smooth Background Animation
const bgAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

const Main = styled.div`
    background: ${(props) =>
        props.darkMode
            ? "linear-gradient(135deg,rgb(156, 10, 10),rgb(244, 234, 48))"
            : "linear-gradient(135deg,rgb(233, 185, 194),rgb(232, 52, 16))"};
    background-size: 400% 400%;
    color: ${(props) => (props.darkMode ? "#000" : "#fff")};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 50px 20px;
    text-align: center;
    font-family: "Poppins", sans-serif;
    animation: ${bgAnimation} 10s ease infinite;
`;

const Heading = styled.h1`
    color: rgb(32, 5, 7);
    margin-bottom: 20px;
    font-size: 2.5rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: transform 0.3s;
    animation: ${fadeIn} 1s ease-out;
    &:hover {
        transform: scale(1.1);
    }
`;

const Section = styled.div`
    max-width: 600px;
    margin-bottom: 30px;
    font-size: 1rem;
    line-height: 1.6;
    position: relative;
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border-radius: 15px;
    box-shadow: 0 0 30px rgba(49, 233, 16, 0.8);
    transition: all 0.3s ease-in-out;
    animation: ${fadeIn} 1s ease-out, ${float} 5s infinite ease-in-out;

    &:hover {
        max-width: 650px;
        padding: 20px;
    }
`;

const Line = styled.div`
    width: 80px;
    height: 5px;
    background-color: rgb(57, 230, 63);
    margin: 20px auto;
    border-radius: 10px;
    animation: ${fadeIn} 1s ease-out;
`;

const About = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setDarkMode(prefersDarkMode);
    }, []);

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            <Navbar handleDarkMode={handleDarkMode} darkMode={darkMode} />
            <Main darkMode={darkMode}>
                <Heading>About Me</Heading>
                <Line />
                <Section>
    <p><strong>👨‍💻 Mohd Jubair Alam</strong>, a passionate <strong>Computer Science B.Tech</strong> student at  
        <strong>Chandigarh University</strong>.</p>

    <p>💡 Since childhood, I have been deeply interested in <strong>technology, problem-solving, and programming</strong>.</p>

    <p>🤖 I always found it fascinating how <strong>software and artificial intelligence</strong> can revolutionize industries.</p>

    <p>🌐 From building my first <strong>basic website</strong> to developing <strong>AI-driven applications</strong>,  
        my passion for technology has only grown.</p>

    <p>🎓 I took admission in <strong>2022</strong> with a vision to explore and master the <strong>world of technology</strong>.</p>

    <p>🚀 During my learning journey, I have worked on multiple projects, continuously improving my  
        <strong>coding skills, logical thinking, and problem-solving abilities</strong>.</p>

    <p>🌍 I believe that <strong>technology is the future</strong>, and I am determined to contribute to innovations  
        that make life smarter and more efficient.</p>
</Section>

                <Heading>🚀 School Life & Early Passion</Heading>
                <Line />
                <Section>
    <p><strong>🏫 My Journey in Tech:</strong> It all began during my school days at  
        <strong>PSSVMIC JHANGRABAD, BULANDSHAHR, UTTAR PRADESH - 203394</strong>.</p>

    <p>💻 I was always fascinated by <strong>computers, coding, and automation</strong>,  
        and I loved exploring how technology works.</p>

    <p>🏆 Participating in <strong>coding competitions</strong> and <strong>science fairs</strong>  
        sparked my curiosity for programming and problem-solving.</p>

    <p>📚 My favorite subjects were <strong>Mathematics & Computer Science</strong>,  
        which later became the foundation of my career.</p>

    <p>🧠 I spent countless hours experimenting with logic-based problems, writing small programs,  
        and even trying to debug codes for fun.</p>

    <p>🖥️ During school, I also developed an interest in <strong>algorithms and software development</strong>,  
        which motivated me to pursue a career in tech.</p>

    <p>🥇 Winning <strong>inter-school coding challenges</strong> and collaborating with friends on science projects  
        further strengthened my passion for technology.</p>
</Section>


                <Heading>🎓 College Life & Learning Journey</Heading>
                <Line />
                <Section>
    <p><strong>🎓 Education:</strong> Currently, I am pursuing <strong>B.Tech in Computer Science</strong>  
        at <strong>Chandigarh University, Punjab, Mohali</strong>.</p>

    <p>💡 During my college journey, I have worked on <strong>real-world projects</strong>,  
        ranging from <strong>web development</strong> to <strong>AI applications</strong>.</p>

    <p>🚀 I am actively contributing to <strong>open-source projects</strong> and  
        developing <strong>scalable applications</strong> that solve real-world problems.</p>

    <p>🖥️ My passion for <strong>software development and artificial intelligence</strong>  
        has led me to explore various technologies, including <strong>MERN stack, Next.js, and machine learning frameworks</strong>.</p>

    <p>🏆 I have participated in <strong>hackathons, coding challenges, and tech meetups</strong>,  
        which have helped me refine my skills and collaborate with like-minded individuals.</p>

    <p>☁️ Additionally, I am constantly learning about <strong>cloud computing, cybersecurity, and automation</strong>,  
        preparing myself for future challenges in the tech industry.</p>
</Section>


                <Heading>💡💻💡Technical Skills</Heading>
                <Line />
                <Section>
    <p><strong>🖥️Full-Stack Development:</strong> Proficient in React.js, Node.js, Express, MongoDB, and PHP, building dynamic and scalable web applications.</p>
    <p><strong>🤖AI & Machine Learning:</strong> Experienced in Python, TensorFlow, and NLP, working on AI-driven solutions and automation.</p>
    <p><strong>☁️Cloud & DevOps:</strong> Hands-on experience with Docker, AWS, and CI/CD Pipelines for seamless deployment and cloud management.</p>
    <p><strong>🔐Cybersecurity & Ethical Hacking:</strong> Basic understanding of penetration testing, network security, and ethical hacking principles.</p>
    <p><strong>🗄️Database Management:</strong> Knowledge of SQL (MySQL, PostgreSQL) and NoSQL (MongoDB, Firebase) for efficient data storage.</p>
    <p><strong>🐙Version Control & Collaboration:</strong> Skilled in Git, GitHub, and Agile methodologies, ensuring smooth teamwork and project management.</p>
    <p><strong>🏗️3D Modeling & Design:</strong> Experience with AutoCAD and Tinkercad for designing prototypes and engineering models.</p>
</Section>

                <Heading>🚀 Future Goals & Aspirations</Heading>
                <Line />
                <Section>
    <p><strong>🚀 Ambition:</strong> My ambition is to become a <strong>Software Engineer specializing in AI & Full-Stack Development</strong>.</p>
    <p><strong>💡 Innovation & Impact:</strong> I aim to work on <strong>high-impact AI solutions</strong> that can drive innovation in <strong>healthcare 🏥, finance 💰, and automation 🤖</strong>.</p>
    <p><strong>🌍 Vision:</strong> My vision is to <strong>build technology that simplifies human lives and improves efficiency</strong>.</p>
    <p><strong>📚 Continuous Learning:</strong> I am passionate about staying up-to-date with the latest technologies, constantly learning and adapting to new advancements in the tech industry.</p>
    <p><strong>🚀 Entrepreneurial Mindset:</strong> I aspire to launch my own tech startup, focusing on <strong>AI-driven applications 🤖 and software solutions 🖥️</strong> that address real-world challenges.</p>
    <p><strong>🌐 Global Impact:</strong> My goal is to contribute to <strong>open-source projects 🏗️</strong> and collaborate with global tech communities 👥 to create innovative and scalable solutions.</p>
    <p><strong>🎓 Mentorship & Leadership:</strong> I aim to guide and mentor aspiring developers 👨‍💻, sharing my knowledge and helping others grow in the field of technology.</p>
</Section>

                <Heading>📚 Education & Certifications</Heading>
                <Line />
                <Section>
                <p><strong>🎓 B.Tech in Computer Science</strong> – Chandigarh University, Mohali, Punjab (2022 - Present)</p>
    <p><strong>🏫 12th Grade (Senior Secondary :-78%)</strong> – PSSVMIC Jhangrabad, Bulandshahr, Uttar Pradesh</p>
    <p><strong>🏫 10th Grade (Secondary :-80.1%)</strong> – PSSVMIC Jhangrabad, Bulandshahr, Uttar Pradesh</p>


    <p><strong>📜 Certifications:</strong></p>
    <ul>
        <li>🔗 <strong>Blockchain :-86%</strong> – Chandigarh University</li>
        <li>🛡️ <strong>Cybersecurity</strong> – InternsElite (TTT-Hyderabad)</li>
        <li>🌐 <strong>Web Development</strong> (x3) – InternsElite (TTT-Hyderabad)</li>
        <li>🤖 <strong>Machine Learning</strong> – NPTEL, IIT Kharagpur</li>
        <li>🧠 <strong>Deep Learning</strong> – (Additional Course)</li>
        <li>💻 <strong>Programming Languages</strong> – Various courses from Coursera</li>
    </ul>
</Section>
<Heading>💻 Projects</Heading>
<Line />
<Section>
    <p><strong>🚀 National Security Threat Assessment Tool</strong></p>
    <ul>
        <li>🔍 AI-driven MERN stack project for evaluating and categorizing security threats.</li>
        <li>📊 Uses machine learning to analyze and prioritize risks based on real-time data.</li>
    </ul>

    <p><strong>🛒 Corrbee – E-commerce Platform</strong></p>
    <ul>
        <li>🛍️ Built a full-stack e-commerce platform using React, Node.js, Express, and MongoDB.</li>
        <li>🏪 Includes admin panel for managing products, orders, and user transactions.</li>
    </ul>

    <p><strong>📢 Goldee Supplement – Health & Wellness Website</strong></p>
    <ul>
        <li>💊 Developed a responsive supplement store with dynamic product categories.</li>
        <li>🌍 Integrated country-based dropdown for better user experience.</li>
    </ul>

    <p><strong>💬 Chat App</strong></p>
    <ul>
        <li>📩 Real-time messaging app using MERN stack with Socket.io for live chat.</li>
        <li>🔐 Implemented authentication and secure user data storage.</li>
    </ul>

    <p><strong>🌐 Portfolio Website</strong></p>
    <ul>
        <li>👨‍💻 Personal portfolio built with Next.js and Tailwind CSS.</li>
        <li>📄 Includes an admin dashboard for adding projects and skills dynamically.</li>
    </ul>

    <p><strong>📊 AI-Powered Resume Analyzer</strong></p>
    <ul>
        <li>📑 Machine Learning model to analyze resumes and provide feedback.</li>
        <li>⚡ Helps users improve their resumes based on job market trends.</li>
    </ul>
</Section>


            </Main>
            <Footer darkMode={darkMode} />
            <Scrollup darkMode={darkMode} />
        </>
    );
};

export default About;
