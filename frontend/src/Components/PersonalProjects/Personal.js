import React from 'react';
import './Personal.css';
import landingMobile from "./ImagesDictionary/01_landingMobile.png";
import loadedMobile from "./ImagesDictionary/02_loadedMobile.png";
import loadedLargeScreen from "./ImagesDictionary/03_loadedLargeScreen.png";
import landingMobile2 from "./ImagesDictionary/04_largerMobileLanding.png";
import loadedMobile2 from "./ImagesDictionary/05_largerMobileLoaded.png";

export default function Personal() {
    return(
        <div className="main-project-section">
        <h1 className='personal-projects-title'>Personal Projects</h1>
        <h2 className="project-title">Dictionary App</h2>
        <h3 className="project-description">Simple app built in React.js</h3>
        <div className="all-images-container">
        <div className="mobile-images-container">
        <img className="mobile-image project-image" src={landingMobile} alt="Mobile landing page"></img>
        <img className="mobile-image project-image" src={loadedMobile} alt="Mobile loaded page"></img>
        <img className="mobile-image project-image" src={landingMobile2} alt="Mobile loaded page"></img>
        <img className="mobile-image project-image" src={loadedMobile2} alt="Mobile loaded page"></img>
        </div>
        <img className="large-screen-image project-image" src={loadedLargeScreen} alt="Large screen loaded page"></img>
        </div>
        </div>
    )
}