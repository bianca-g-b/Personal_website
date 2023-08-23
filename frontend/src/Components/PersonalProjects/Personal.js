import React from 'react';
import './Personal.css';
import dictionaryApp from './Images/DictionaryApp.jpeg';
import taskManager from './Images/taskLight.jpeg';
import taskDark from './Images/taskDark.jpeg';
import website from "./Images/PersonalWebsite.jpeg"


export default function PersonalProjects() {
    return(
        <div className="main-projects-section">
        <h1 className='personal-projects-title'>Individual Projects</h1>
        <div className="personal-projects-container">

        <div className="task-manager">
            <h2 className="project-title">Breezy Online Planner</h2>
            <h3 className="project-description">Full-stack app built with React.js, Node.js, Express, Supabase</h3>
            <div className="task-manager-image-container">
                <img className = "dictionary-img task-light" src={taskManager} alt="Task Manager"></img>
                <img className = "dictionary-img task-dark" src={taskDark} alt="Task Manager"></img>
            </div>
            <div className="project-links">   
                <p className="projects-links-title">Links:</p>
                <a className="app-link" href="https://breezyonlineplanner.netlify.app" target="blank">B.O.P. - Netlify website</a>
                <a className="app-link" href="https://github.com/bianca-g-b/TaskManager" target="blank">GitHub Repository</a>
            </div>
        </div>

        <div className="personal-website">
            <h2 className="project-title">This website</h2>
            <h3 className="project-description">Built with React.js, Node.js, Express</h3>
            <div className="personal-website-image-container">
                <img className = "dictionary-img task-light" src={website} alt="Personal Website"></img>
            </div>
            <div className="project-links">   
                <p className="projects-links-title">Links:</p>
                <a className="app-link" href="https://github.com/bianca-g-b/Personal_website" target="blank">GitHub Repository</a>
            </div>
        </div>

        <div className="dictionary-app">
            <h2 className="project-title">Dictionary App</h2>
            <h3 className="project-description">Simple app built in React.js, using a public API to fetch data</h3>
            <div className="dictionary-image-container">
                <img className = "dictionary-img" src={dictionaryApp} alt="Dictionary App"></img>
            </div>
            <div className="project-links">
                <p className="projects-links-title">Links:</p>
                <a className="app-link" href="https://bianca-g-b.github.io/DictionaryApp/" target="blank">Official website </a>
                <a className="app-link" href="https://github.com/bianca-g-b/DictionaryApp" target="blank">GitHub Repository</a>
            </div>
        </div>
        
        </div>
        </div>
    )
}