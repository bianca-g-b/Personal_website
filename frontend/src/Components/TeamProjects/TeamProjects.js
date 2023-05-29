import "./TeamProjects.css";
import manifesto from "./Images/001_Manifesto.png";
import figma from "./Images/002_Figjam.png";
import trelloSprint from "./Images/Board_partial.png";
import trelloRetro from "./Images/Retrospective_partial.png";
import registration from "./Images/Registration.png";
import retro from "./Images/006_Retrospective.png";


function TeamProjects() {

    return (
        <div className="all-projects">

        <div className = "codetta-stone">
            <h1 className="team-name">Codetta Stone</h1>

            <div className = "codetta-stone-description"></div>
            <h3 className="team-description">
            In our team, we embarked on an exciting journey to develop a React app aimed at assisting fellow bootcampers with their learning. Our vision was to create a quizzes app that would empower students to test and enhance their coding skills.<br/><br/>
            Throughout this one week project, we embraced agile principles and practices, ensuring our ability to swiftly adapt to changes. By leveraging the power of Git branching, we divided into smaller, focused teams, with each team responsible for crafting specific components. <br/><br/>
            This agile approach enabled us to work in parallel, efficiently tackling complex tasks and maintaining a steady stream of progress.
            Regular stand-up meetings and frequent communication facilitated seamless collaboration, enabling us to adapt and refine our strategies along the way.<br/><br/>
            The incorporation of Bootstrap's versatile navbar and sidebar components provided intuitive navigation and effortless organization. 
            By harnessing the power of React Router DOM, we skillfully created routes for diverse components, ensuring smooth and intuitive transitions between app sections.
            </h3>
            <div className="codetta-links">
            <p className="links-title">Links:</p>
            <a className="codetta-link" href="https://github.com/SchoolOfCode/bc14_w7_project-frontend-codettastone" target="blank">Codetta Stone GitHub Repository
            </a>
            <a className="codetta-link" href="https://docs.google.com/presentation/d/1l4cfGSN3PMxC3FOyBUvfT_WqQm9YKDdmqsYbO3Fu2Dg/edit#slide=id.g23aeb9bec81_0_456" target="blank">Codetta Stone Presentation Slides</a>
            </div>
            
            <div className = "codetta-stone-images">
                
                <p className="photo-title">Group Manifesto</p>
                <img className = "manifesto codetta-img" src={manifesto} alt="Manifesto"></img>
                

                <p className="photo-title">Figma Board Snippet</p>
                <img className = "figma codetta-img" src={figma} alt="Figma board"></img>

                <p className="photo-title">Trello Sprint Board</p>
        
                <img className = "trello-sprint codetta-img" src={trelloSprint} alt="Trello Sprint Board"></img>
                <br/>
                <p className="photo-title">Trello Sprint Retrospective</p>
                <img className = "trello-retro codetta-img" src={trelloRetro} alt="Trello Sprint Retrospective"></img>

                <p className="photo-title">Registration Page - Part of Final Design</p>
                <img className = "registration codetta-img" src={registration} alt="Registration page"></img>

                <p className="photo-title">Final Retrospective</p>
                <img className = "retro codetta-img" src={retro} alt="Retrospective after finishing the project"></img>


            </div>
        </div>


        </div>
    )
}

export default TeamProjects;