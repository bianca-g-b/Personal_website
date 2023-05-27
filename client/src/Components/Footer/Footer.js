import './Footer.css';
import github from "../Images/icons8-github-32.png";
import linkedin from "../Images/icons8-linkedin-31.png";

function Footer() {
    return (
        <div className='footer'>
        <a className="github" href="https://github.com/bianca-g-b" target="_blank" rel="noreferrer">
            <img src={github} alt="GitHub"/>
            </a>
            <a className="linkedin" href="https://www.linkedin.com/in/biancabuha" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="GitHub"/>
            </a>
        </div>
    )
}

export default Footer;