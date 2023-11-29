import { useState } from 'react';
import './Nav.css';

export function Nav() {

    const[menuOpen, setMenuOpen] = useState('false');

    return <>
        <nav id="desktop-nav">
            <div className="logo">Andrei Cervantes</div>
            <div>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>

        <nav id="hamburger-nav">
            <div className="logo">Andrei Cervantes</div>
            <div className="hamburger-menu">
                <div className={menuOpen ? "hamburger-icon open" : "hamburger-icon"} onClick={() => {setMenuOpen(!menuOpen)}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={menuOpen ? "menu-links open" : "menu-links"}>
                    <li><a href="#about" onClick={() => {setMenuOpen(!menuOpen)}}>About</a></li>
                    <li><a href="#experience" onClick={() => {setMenuOpen(!menuOpen)}}>Experience</a></li>
                    <li><a href="#projects" onClick={() => {setMenuOpen(!menuOpen)}}>Projects</a></li>
                    <li><a href="#contact" onClick={() => {setMenuOpen(!menuOpen)}}>Contact</a></li>
                </div>
            </div>
        </nav>
    </>;
}