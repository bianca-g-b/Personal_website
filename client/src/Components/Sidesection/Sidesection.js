import "./Sidesection.css";
import github from "../Images/icons8-github-128.png";
import linkedin from "../Images/icons8-linkedin-125.png";


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