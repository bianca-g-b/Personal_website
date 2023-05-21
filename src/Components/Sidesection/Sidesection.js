import "./Sidesection.css";
import github from "../Images/github-mark-white.png";
import linkedin from "../Images/linkedin-white.png";


export default function Sidesection() {
    return (
        <div className="sidebar-full">
            {/* add icons to link to github and linkedin */}
            <div className="links">
            <a className="github" href="https://github.com/bianca-g-b" target="_blank" rel="noreferrer">
            <img src={github} alt="GitHub"/>
            </a>
            <a className="linkedin" href="https://www.linkedin.com/in/biancabuha" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="GitHub"/>
            </a>
            </div>
        </div>
    )
}