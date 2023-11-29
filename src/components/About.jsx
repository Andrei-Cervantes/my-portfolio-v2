// CSS Imports
import './About.css';

// Image Imports
import aboutPic from "../assets/about-pic.jpg";
import experience from "../assets/experience.png";
import education from "../assets/education.png";
import arrow from "../assets/arrow.png";

export function About() {
    return <>
        <section id="about">
            <p className="section__text__p1">Get To Know More</p>
            <h1 className="title">About Me</h1>
            <div className="section-container">
                <div className="section__pic-container">
                    <img src={aboutPic} alt="Profile Picture" className="about-pic" />
                </div>
                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <img src={experience} alt="Experience Icon" className="icon" />
                            <h3>Experience</h3>
                            <p>Fresh Graduate <br />Full-Stack Development</p>
                        </div>
                        <div className="details-container">
                            <img src={education} alt="Education Icon" className="icon" />
                            <h3>Education</h3>
                            <p>Bachelor of Science<br />in Computer Engineering</p>
                        </div>
                    </div>
                    <div className="text-container">
                        <p>Diligent individual with proficient problem solving skills and works well in a team. Eager to experience and explore more to refine my skills for growth in a challenging environment and be able to contribute more to the success of the company.</p>
                    </div>
                </div>
            </div>
            <img src={arrow} alt="Arrow Down Icon" className="icon arrow" onclick="location.href='./#experience'" />
        </section>
    </>;
}