// CSS Imports
import './Projects.css';

// Image Imports
import proj1 from "../assets/project-1.png";
import proj2 from "../assets/project-2.png";
import proj3 from "../assets/project-3.png";
import arrow from "../assets/arrow.png";

export function Projects() {
    return <>
        <section id="projects">
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src={proj1} alt="Project 1 Image" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">PADES Printing</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/Andrei-Cervantes/Project-1'">
                                Github
                            </button>
                            <button className="btn btn-color-2 project-btn" onclick="location.href='https://padesprinting.com'">
                                Live Demo
                            </button>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src={proj2} alt="Project 2 Image" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title"> Project Two</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com'">
                                Github
                            </button>
                            <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com'">
                                Live Demo
                            </button>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src={proj3} alt="Project 3 Image" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title"> Project Three</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com'">
                                Github
                            </button>
                            <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com'">
                                Live Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <img src={arrow} alt="Arrow Down Icon" className="icon arrow" onclick="location.href='./#contact'" />
        </section>
    </>;
}