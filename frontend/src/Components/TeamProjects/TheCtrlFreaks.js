import "./CodettaStone.css";
import "./TheCtrlFreaks.css";
import manifesto from "./Ctrl_Images/01_manifesto.png";
import ideation from "./Ctrl_Images/02_ideation.png";
import ideationAdvanced from "./Ctrl_Images/03_ideation_progress.png";
import persona from "./Ctrl_Images/04_userPersonas.png";
import wireframes from "./Ctrl_Images/05_wireframes.png";
import tree from "./Ctrl_Images/06_componentTree.png";
import walletPage from "./Ctrl_Images/07_walletPage.png";

function TheCtrlFreaks() {

    return (
        <div className="main-project-container">

        <div className="ctrl-freaks">
            <h1 className="team-name">The Ctrl Freaks</h1>
            <h2 className="team-name project-brief-description">Wise Wallet Kitchen<br/>Full Stack App built in four weeks - Group Project</h2>
            <div className="ctrl-freaks-description">
            <h2 className="team-description">
            The team manifesto and the golden rules defined how we will work as a team, fostering trust and open communication.
During the ideation process, we used brainstorming and collaborative voting to find solutions for the problems we wanted to address.
We started planning our MVP. Our ideas were ambitious and we were keen to have at least 4 features in our app.
We split into teams to create the component tree and  the wireframes.
We then reconvened and realised we all had slightly different views of what our MVP was.
This was our first challenge as a team. We went back to the white board and redefined the MVP, marking an important milestone in the project.
<br/><br/>
With a clear vision of what we were building, we began the coding phase.
We rotated daily, making sure every member of the team has the opportunity to familiarise themselves with all aspects of the app.
We made all major decisions together, such as implementing website navigation or selecting an appropriate database.
Furthermore, we achieved significant milestones, like transitioning from hard-coded data to data fetched dynamically, and successfully deploying our app on Netlify.
We used the weekly sprints feedback,  to improve our overall functionality and refine the design.
<br/><br/>
As a result of our teamwork, we are happy to introduce Wise Wallet Kitchen to our users.
            </h2>
            <div className="ctrl-links">
            <p className="links-title">Links:</p>
            <a className="ctrl-link" href="https://wisewalletkitchen.netlify.app" target="blank">Wise Wallet Kitcken - Official Website</a>
            <a className="ctrl-link" href="https://github.com/tom-soc14/WiseWalletKitchen" target="blank">Wise Wallet Kitchen GitHub Repository</a>
            <a className="ctrl-link" href="https://www.canva.com/design/DAFnmxOdSU4/3rRxFAgyYcoSDAyis_ZUCQ/view?utm_content=DAFnmxOdSU4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="blank">The Ctrl Freaks Presentation Slides</a>
            </div>

            <div className = "ctrl-images">

                <p className="photo-title">Group Manifesto</p>
                <img className = "manifesto ctrl-img" src={manifesto} alt="Manifesto"></img>

                <p className="photo-title">Disney Ideation</p>
                <img className = "ideation ctrl-img" src={ideation} alt="Disney Ideation"></img>

                <p className="photo-title">Ideation Process</p>
                <img className = "ideation ctrl-img" src={ideationAdvanced} alt="Progressed Ideation"></img>

                <p className="photo-title">Bernadette - User Profile</p>
                <img className = "persona ctrl-img" src={persona} alt="User Persona"></img>

                <p className="photo-title">High Fidelity Wireframes</p>
                <img className = "wireframes ctrl-img" src={wireframes} alt="Mobile Wireframes"></img>

                <p className="photo-title">Component Tree</p>
                <img className = "tree ctrl-img" src={tree} alt="Component Tree"></img>

                <p className="photo-title">Wallet Page - Part of the Final Design</p>
                <img className = "wallet ctrl-img" src={walletPage} alt="Final Design"></img>

            </div>

        </div>    
        </div>
        </div>
    )
}

export default TheCtrlFreaks;