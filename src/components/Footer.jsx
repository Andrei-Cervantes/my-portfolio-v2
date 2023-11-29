// CSS Imports
import './Footer.css';

export function Footer() {
    return <>
        <footer>
            <nav>
                <div className="nav-links-container">
                    <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <p>Copyright &copy; 2023 Andrei Cervantes. All Rights Reserved.</p>
        </footer>
    </>;
}