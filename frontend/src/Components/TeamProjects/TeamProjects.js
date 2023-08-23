import React from 'react';
import './TeamProjects.css';
import codetta from './Images/Codetta_stone.jpeg';
import wwk from './Images/Ctrl_Freaks.jpeg';



export default function TeamProjects() {
    return(
        <div className="main-projects-section">
        <h1 className='team-projects-title'>Team Projects</h1>
        <div className="team-projects-container">

        <div className="ctrl-freaks">
            <h2 className="project-title">The CTRL FREAKS - Wise Wallet Kitchen</h2>
            <h3 className="project-description">Full-stack app built in 5 weeks in a team of 6</h3>
            <div className="task-manager-image-container">
                <img className = "dictionary-img task-light" src={wwk} alt="Task Manager"></img>
            
            </div>
            <div className="project-links">
                <p className="projects-links-title">Links:</p>
                <a className="app-link" href="https://wisewalletkitchen.netlify.app" target="blank">Wise Wallet Kitcken - Official Website</a>
                <a className="app-link" href="https://github.com/tom-soc14/WiseWalletKitchen" target="blank">Wise Wallet Kitchen GitHub Repository</a>
                <a className="app-link" href="https://www.canva.com/design/DAFnmxOdSU4/3rRxFAgyYcoSDAyis_ZUCQ/view?utm_content=DAFnmxOdSU4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="blank">The Ctrl Freaks Presentation Slides</a>
            </div>
        </div>

        <div className="codetta-stone">
            <h2 className="project-title">Codetta Stone - Quiz App</h2>
            <h3 className="project-description">Front-end app built in one week, in a team of 4</h3>
            <div className="dictionary-image-container">
                <img className = "dictionary-img" src={codetta} alt="Dictionary App"></img>
            </div>
            <div className="project-links">
                <p className="projects-links-title">Links:</p>
                <a className="app-link" href="https://github.com/SchoolOfCode/bc14_w7_project-frontend-codettastone" target="blank">Codetta Stone GitHub Repository</a>
                <a className="app-link" href="https://docs.google.com/presentation/d/1l4cfGSN3PMxC3FOyBUvfT_WqQm9YKDdmqsYbO3Fu2Dg/edit#slide=id.g23aeb9bec81_0_456" target="blank">Codetta Stone Presentation Slides</a>
            </div>
        </div>
        
        </div>
        </div>
    )
}
