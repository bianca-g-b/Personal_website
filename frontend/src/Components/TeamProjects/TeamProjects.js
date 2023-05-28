import "./TeamProjects.css";
import manifesto from "./Images/001_Manifesto.png";
import figma from "./Images/002_Figjam.png";
import trelloSprint from "./Images/Board_partial.png";
import trelloRetro from "./Images/Retrospective_partial.png";
import registration from "./Images/Registration.png";
// import retro from "./Images/Retrospective.png";


function TeamProjects() {

    return (
        <div className="all-projects">

        <div className = "codetta-stone">
            <h1 className="team-name">Codetta Stone</h1>

            <div className = "codetta-stone-description"></div>
            <h3 className="team-description">
            In our team, we embarked on an exciting journey to develop a React app aimed at assisting fellow bootcampers in their learning journey. Our vision was to create a quizzes app that would empower students to test and enhance their coding skills.
            Throughout the project, we embraced agile principles and practices, ensuring our ability to swiftly adapt to changes. By leveraging the power of Git branching, we divided into smaller, focused teams, with each team responsible for crafting specific components. 
            This agile approach enabled us to work in parallel, efficiently tackling complex tasks and maintaining a steady stream of progress.
            Regular stand-up meetings and frequent communication facilitated seamless collaboration, enabling us to adapt and refine our strategies along the way.
            The incorporation of Bootstrap's versatile navbar and sidebar components provided intuitive navigation and effortless organization. 
            By harnessing the power of React Router DOM, we skillfully created routes for diverse components, ensuring smooth and intuitive transitions between app sections.
            </h3>
            <div>
            <a className="codetta-repo" href="https://github.com/SchoolOfCode/bc14_w7_project-frontend-codettastone">Codetta Stone GitHub Repository
            </a>
            </div>
            
            <div className = "codetta-stone-images">
                
                <p>Group Manifesto</p>
                <img className = "manifesto" src={manifesto} alt="Manifesto"></img>
                

                <p>Figma Board</p>
                <img className = "figma" src={figma} alt="Figma board"></img>

                <p>Trello Sprint Board</p>
        
                <img className = "trello-sprint" src={trelloSprint} alt="Trello Sprint Board"></img>
                <br/>
                <p>Trello Sprint Retrospective</p>
                <img className = "trello-retro" src={trelloRetro} alt="Trello Sprint Retrospective"></img>

                <p>Registration Page - Part of Final Design</p>
                <img className = "registration" src={registration} alt="Registration page"></img>

                {/* <p>Retrospective after finishing the project</p>
                <img className = "retro" src={retro} alt="Retrospective after finishing the project"></img> */}


            </div>
        </div>


        </div>
    )
}

export default TeamProjects;