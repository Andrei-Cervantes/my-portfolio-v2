// CSS Imports
import './Profile.css';

// Image Imports
import profilePic from "../assets/profile-pic.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

export function Profile() {
    return <>
        <section id="profile">
            <div className="section__pic-container">
                <img src={profilePic} alt="Andrei Cervantes profile Picture" className="profile-pic" />
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">Andrei Cervantes</h1>
                <p className="section__text__p2">Full-Stack Developer</p>
                <div className="btn-container">
                    <button className="btn btn-color-2" onclick="window.open('./assets/resume-cervantes.pdf')">Download CV</button>
                    <button className="btn btn-color-1" onclick="location.href='./#contact'">Contact Info</button>
                </div>
                <div id="socials-container">
                    <img src={linkedin} alt="My LinkedIn Profile" class="icon" onclick="window.open('https://www.linkedin.com/in/andrei-cervantes-b08166286/')" />
                    <img src={github} alt="My GitHub Profile" class="icon" onclick="window.open('https://github.com/Andrei-Cervantes')" />
                </div>
            </div>
        </section>
    </>;
}