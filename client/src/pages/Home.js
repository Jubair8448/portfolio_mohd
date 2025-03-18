import React, { useEffect, useState } from 'react';
import styled, { keyframes } from "styled-components";
import Navbar from '../components/Home/Navbar/Navbar';
import HeroSection from '../components/Home/HeroSection/HeroSection';
import About from '../components/Home/About/About';
import Skills from '../components/Home/Skills/Skills';
import Work from '../components/Home/Work/Work';
import Contact from '../components/Home/Contact/Contact';
import Footer from '../components/Home/Footer/Footer';
import Scrollup from '../components/Home/Scrollup/Scrollup';

const bgAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

const Main = styled.div`
    background: ${(props) => (props.darkMode ? "linear-gradient(135deg,rgb(156, 10, 10),rgb(226, 242, 84))" : "linear-gradient(135deg,rgb(250, 233, 49),rgb(232, 235, 215))")};
    background-size: 400% 400%;
    color: ${(props) => (props.darkMode ? "#000" : "#fff")};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 50px 20px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    animation: ${bgAnimation} 10s ease infinite;
`;

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDarkMode);
    }, []);

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            <Navbar handleDarkMode={handleDarkMode} darkMode={darkMode} />
            <Main darkMode={darkMode}>
                <HeroSection darkMode={darkMode} />
                <About darkMode={darkMode} />
                <Skills darkMode={darkMode} />
                <Work darkMode={darkMode} />
                <Contact darkMode={darkMode} />
            </Main>
            <Footer handleDarkMode={handleDarkMode} darkMode={darkMode} />
            <Scrollup darkMode={darkMode} />
        </>
    );
};

export default Home;
