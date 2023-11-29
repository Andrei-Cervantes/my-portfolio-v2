// CSS Imports
import './Contact.css';

// Image Imports
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";

export function Contact() {
    return <>
        <section id="contact">
            <p className="section__text__p1">Get In Touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <img src={email} alt="Email Icon" className="icon contact-icon email-icon" />
                    <p><a href="mailto:andrei29.cervantes@gmail.com">andrei29.cervantes@gmail.com</a></p>
                </div>
                <div className="contact-info-container">
                    <img src={linkedin} alt="LinkedIn Icon" className="icon contact-icon" />
                    <p><a href="https://www.linkedin.com/in/andrei-cervantes-b08166286/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                </div>
            </div>
        </section>
    </>;
}