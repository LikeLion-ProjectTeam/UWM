import React from "react";
import "./AboutUs.css";
import { ReactTyped } from "react-typed";
import { Fade } from "react-awesome-reveal";

import logo from "../Assets/AboutUs/logo.png";

const AboutUs = () => {
    return (
        <div className="about-us">
            <main className="about-us-content">
                <Fade cascade fraction={0.2} damping={0.2} delay={100}>
                    <header className="typed-container">
                        <h1>
                            <span className="highlight">POSSIBILITY</span> TO{" "}
                            <ReactTyped
                                strings={["REALITY"]}
                                typeSpeed={100}
                                backSpeed={80}
                                backDelay={10000}
                                startDelay={500}
                                loop
                                className="typed-text"
                            />
                        </h1>
                    </header>
                    <Fade direction="up" delay={100}>
                        <div className="description">
                            <img
                                src={logo}
                                alt="LikeLion UW-Madison Logo"
                                className="logo-image"
                            />
                            <h2 className="slogan">
                                <span className="slogan-word">Create</span>
                                <span className="bullet">•</span>
                                <span className="slogan-word">Collaborate</span>
                                <span className="bullet">•</span>
                                <span className="slogan-word">Conquer</span>
                            </h2>
                            <p className="main-text">
                                LikeLion UW-Madison empowers individuals with
                                resources, mentorship, and a collaborative
                                environment to turn unique ideas into impactful
                                realities. We foster creativity, teamwork, and
                                the tools to bring your vision to life.
                            </p>
                            <p className="end-text">
                                Let's bring your ideas to life, together!
                            </p>
                        </div>
                        <div className="apply">
                            <a href="https://www.instagram.com/likelion_wisconsin/">
                                <button className="apply-button">
                                    <span className="apply-word">Join Us</span>
                                </button>
                            </a>
                            <p className="apply-message">See you next round!</p>
                        </div>
                    </Fade>
                </Fade>
            </main>
        </div>
    );
};

export default AboutUs;
