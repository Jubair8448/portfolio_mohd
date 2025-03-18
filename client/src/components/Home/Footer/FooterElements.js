import styled, { keyframes } from "styled-components";
import { Link as LinkS } from "react-scroll";

const bgAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

export const FooterMain = styled.footer`
    color: ${(props) => (props.darkMode ? "#fff" : "#000")};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 15px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    animation: ${bgAnimation} 10s ease infinite;
    transition: background 0.5s ease-in-out;
`;

export const FooterContainer = styled.div`
    max-width: 968px;
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 2rem 0 6rem;
    @media screen and (min-width: 992px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

export const FooterTitle = styled.h1`
    color: ${(props) => (props.darkMode ? "#fff" : "hsla(219, 8%, 19%, 1)")};
    text-align: center;
    margin-bottom: 2rem;
    transition: color 0.3s;
`;

export const FooterList = styled.ul`
    display: flex;
    justify-content: center;
    column-gap: 1.5rem;
    margin-bottom: 2rem;
`;

export const FooterLink = styled(LinkS)`
    color: ${(props) => (props.darkMode ? "#fff" : "hsla(219, 8%, 19%, 1)")};
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
        color: ${(props) => (props.darkMode ? "#ff0" : "#ff5722")};
    }
`;

export const FooterSocial = styled.ul`
    display: flex;
    justify-content: center;
    column-gap: 1.25rem;
`;

export const FooterSocialLink = styled.a`
    background-color: ${(props) => (props.darkMode ? "#222" : "hsla(0, 91%, 15%, 1)")};
    color: ${(props) => (props.darkMode ? "#ffb400" : "rgb(197, 63, 22)")};
    padding: 0.25rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    display: inline-flex;
    transition: 0.4s;
    &:hover {
        background-color: ${(props) => (props.darkMode ? "#444" : "rgb(51, 185, 17)")};
        color: #fff;
    }
    @media screen and (min-width: 992px) {
        font-size: 1.25rem;
        padding: 0.4rem;
        border-radius: 0.5rem;
    }
`;

export const FooterCopy = styled.span`
    display: block;
    margin-top: 4.5rem;
    color: ${(props) => (props.darkMode ? "#bbb" : "hsl(219, 32%, 12%)")};
    text-align: center;
    font-size: 0.625rem;
    transition: color 0.3s;
    @media screen and (min-width: 992px) {
        font-size: 0.813rem;
    }
`;

/* Video and Location Container */
export const FooterVideoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
`;

/* YouTube Video */
export const FooterVideo = styled.div`
    iframe {
        border-radius: 5px;
    }
`;

/* Location Box */
export const FooterLocation = styled.div`
    background-color: lightcoral;
    padding: 5px;
    border-radius: 5px;
    text-align: center;
    transition: background 0.3s;
    h4 {
        margin-bottom: 5px;
        font-size: 0.8rem;
    }
    iframe {
        border-radius: 5px;
    }
`;
