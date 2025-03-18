import React, { useEffect, useState } from "react";
import {
    FooterContainer,
    FooterCopy,
    FooterLink,
    FooterList,
    FooterMain,
    FooterSocial,
    FooterSocialLink,
    FooterTitle,
    FooterVideoContainer,
    FooterVideo,
    FooterLocation
} from "./FooterElements";
import styled, { keyframes } from "styled-components";

const bgAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

const FooterWrapper = styled(FooterMain)`
    background: ${(props) =>
        props.darkMode
            ? "linear-gradient(135deg,rgb(142, 7, 7), #333,rgb(238, 224, 23))"
            : "linear-gradient(135deg,rgb(239, 231, 150),rgb(241, 148, 148),rgb(243, 200, 47))"};
    background-size: 300% 300%;
    color: ${(props) => (props.darkMode ? "#fff" : "#333")};
    animation: ${bgAnimation} 8s infinite alternate;
    transition: background 0.5s ease-in-out, color 0.3s;
`;

const Footer = ({ darkMode }) => {
    const [animatedDarkMode, setAnimatedDarkMode] = useState(darkMode);

    useEffect(() => {
        setTimeout(() => {
            setAnimatedDarkMode(darkMode);
        }, 100);
    }, [darkMode]);

    return (
        <FooterWrapper darkMode={animatedDarkMode}>
            <FooterContainer>
                <FooterTitle darkMode={animatedDarkMode}>Mohd Jubair Alam</FooterTitle>

                <FooterList>
                    <li>
                        <FooterLink to="about" darkMode={animatedDarkMode}>About</FooterLink>
                    </li>
                    <li>
                        <FooterLink to="skills" darkMode={animatedDarkMode}>Skills</FooterLink>
                    </li>
                    <li>
                        <FooterLink to="works" darkMode={animatedDarkMode}>Projects</FooterLink>
                    </li>
                </FooterList>

                <FooterSocial>
                    <FooterSocialLink href="https://www.linkedin.com/in/jubair-ansari-7b9253259/" target="_blank">
                        <i className="bx bxl-linkedin-square"></i>
                    </FooterSocialLink>

                    <FooterSocialLink href="https://github.com/jubair0786" target="_blank">
                        <i className="bx bxl-github"></i>
                    </FooterSocialLink>

                    <FooterSocialLink href="https://leetcode.com/u/oX1lXzrzvb/" target="_blank">
                        <i className="bx bxl-codepen"></i>
                    </FooterSocialLink>

                    <FooterSocialLink href="https://wa.me/8448454299" target="_blank">
                        <i className="bx bxl-whatsapp"></i>
                    </FooterSocialLink>
                </FooterSocial>

                <FooterVideoContainer>
                    <FooterVideo>
                        <iframe
                            width="150"
                            height="90"
                            src="https://www.youtube.com/embed/-p1DJSgrA6k"
                            title="YouTube video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </FooterVideo>

                    <FooterLocation>
                        <iframe
                            width="150"
                            height="90"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://www.google.com/maps?q=New+Delhi,India&output=embed"
                            allowFullScreen
                        ></iframe>
                    </FooterLocation>
                </FooterVideoContainer>

                <FooterCopy>
                    Copyright &#169; {new Date().getFullYear()} Mohd Jubair Alam. All rights reserved.
                </FooterCopy>
            </FooterContainer>
        </FooterWrapper>
    );
};

export default Footer;
