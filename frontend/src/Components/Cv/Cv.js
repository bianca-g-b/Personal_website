import "./Cv.css";
import github from "../Images/icons8-github-32.png";
import linkedin from "../Images/icons8-linkedin-31.png";

function Cv() {
  
    
    return (
        <div className="main-cv-area">
        <div className="empty-area">
          <button className="download-cv-button">
          <a className="download-cv-link"
          href="/Bianca_Buha_CV.pdf"
          download="Bianca_Buha_CV.pdf" >
          Download CV</a></button>
        </div>
        <div className="cv-profile-all">
        
        <div className="cv-intro content-flex">
        <h2>Bianca Buha</h2>
<h3>Junior Software Developer</h3>
<br/>
<p>bianca@biancabuha.com</p>
<p>Milton Keynes, UK (willing to relocate)</p>
<div>
<a className="github" href="https://github.com/bianca-g-b" target="_blank" rel="noreferrer">
            <img src={github} alt="GitHub"/>
            </a>
            <a className="linkedin" href="https://www.linkedin.com/in/biancabuha" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="GitHub"/>
            </a>
            </div>
        </div>

        <div className="cv-content content-flex">

<div className="cv-profile content-flex">
<h3 className="section-title">PROFILE</h3>
<br/>
<p>
I am a passionate junior software developer, freshly graduated from the School of Code Bootcamp.
I am excited to join a software development team and apply my new skills to real-world projects.
With a strong drive for problem-solving and a commitment to continuous learning, I'm eager to collaborate with
fellow professionals to create innovative software solutions.
</p>
</div>
<br/>

<div className="cv-skills content-flex">
<h3 className="section-title">SKILLS</h3>
<br/>
<ul className="skills-list content-flex">
<li>JavaScript</li>
<li>Python</li>
<li>Git</li>
<li>GitHub</li>
<li>HTML</li>
<li>CSS</li>
<li>UI / UX</li>
<li>Jest</li>
<li>Playwright</li>
<li>React</li>
<li>React Testing Library</li>
<li>Node.js</li>
<li>Express</li>
<li>REST API</li>
<li>PostgreSQL</li>
<li>Agile</li>
</ul>
</div>
<br/>
{/* Experience - all */}
<div className="experience-all">
<h3 className="section-title">PROFESSIONAL EXPERIENCE</h3>
<br/>
{/* Experience - School of code */}
<div className="soc">
<h4>Full Stack Software Developer</h4>
<div className="location-dates">
<h5>School of Code - Remote, UK</h5>
<h5>03/2023 - present</h5>
</div>
<ul>
  <li>16 week intensive Bootcamp in Full Stack Software Development.</li>
  <li>Covered the fundamentals of programming, how to collaborate in a high performance tech team and how to
work to industry best practices and standards.</li>
  <li>Engaged with front-end and back-end technologies, including JavaScript, React.js, CSS, HTML and Node.js,
employing these tools to develop robust and responsive applications.</li>
  <li>Weekly hackathons to implement the topics covered in the week, using Agile methodologies.</li>
</ul>
<br/>
<h4>TEAM PROJECTS</h4>
<br/>
<h5>The CTRL FREAKS Team</h5>
<h5>Wise Wallet Kitchen - Full-stack app built in 5 weeks following Agile priciples</h5>
<h5>Official website: https://wisewalletkitchen.netlify.app</h5>
<ul>
  <li>Designed and built a full-stack app that allows users to find recipes based on their budget requirements.</li>
  <li>One of the main features of the app is the recipes section, where people can find recipes depending on their weekly budget</li>
  <li>Another important feature of the app is the wallet section, which shows the users how much they saved per week by using our recipe plans</li>
  <li>We used Trello, Figma and Canva for planning and managing the project, and Agile methodologies for working as a team</li>
  <li>Tech Stack: JavaScript, React, CSS, JSON, Supabase, Jest</li>
</ul>
<br/>
<h5>Codetta Stone Team</h5>
<h5>ONE WEEK TEAM PROJECT - Building an app in React that will help students with their learning</h5>
<ul>
  <li>The project was a collaborative effort where each member of the team made significant contributions</li>
  <li>Designed a quiz app to assist fellow bootcampers with testing their coding skills</li>
  <li>Started the project by building a team manifesto and a set of rules that we all agreed on</li>
  <li>Prioritised the Agile way of working, so we decided to be flexible and make changes if necessary and used tools
such as Trello boards and Figma to keep track of our progress</li>
  <li>One of my personal contributions was successfully integrating routing functionality into our application. After
thorough research, I discovered the 'react-router-dom' package as the ideal solution. Through trial and error, I
efficiently implemented the routing system, enabling navigation between different components</li>
</ul>
</div>
<br/>
{/* Experience - Santander */}
<div className="santander">
<h4>Customer Service Advisor</h4>
<div className="location-dates">
<h5>Santander, UK</h5>
<h5>05/2022 - 02/2023</h5>
</div>
<ul>
  <li>Worked in the Business Banking and Financial Support departments.</li>
  <li>Developed a deep understanding of business banking products, services, and policies, effectively
communicating complex information to clients in a clear and concise manner. Utilised active listening skills to
empathetically understand client needs, addressing concerns promptly and providing appropriate solutions.</li>
  <li>Handled sensitive customer information and financial data with confidentiality and adhered to strict security
protocols, ensuring the privacy and protection of customer accounts and transactions.</li>
</ul>
</div>
<br/>
{/* Experience - Classics */}
<div className="classics">
  <h4>Customer Service Advisor</h4>
<div className="location-dates">
<h5>Classic Shoe Repairs - London, UK</h5>
<h5>11/2019 - 11/2021</h5>
</div>
<ul>
  <li>Dealing with customer enquiries, orders and quality control. Resolving any issues efficiently and professionally.</li>
  <li>Creating, updating and maintaining records in the company's bespoke computerised system; ensuring the
administrative systems are always understood and adhered to, following the appropriate operational
guidelines.</li>
  <li>Providing assistance to corporate clients and private customers either face to face, via telephone or by email.</li>
  <li>Making sure all incoming post is recorded in the system; preparing outgoing postal deliveries and relevant
support documents.</li>
</ul>
</div>
<br/>
{/* Experience - Acting */}
<div className="acting">
<h4>Theatre Performer / Actor</h4>
<div className="location-dates">
<h5>UK and Romania</h5>
<h5>2010 - 2019</h5>
</div>
<ul>
  <li>Collaborated with ensembles of performers, directors, and production teams, fostering effective teamwork and
cooperation to deliver successful productions.</li>
  <li>Adapted to unexpected changes during live performances and exhibited adaptability and resilience in coping
with demanding schedules and the pressures of the shows.</li>
  <li>Used analytical and research skills to analyse scripts and plays, creating character profiles and narratives.</li>
  <li>Developed characters by incorporating personal insights, enhancing the depth and authenticity of
performances.</li>
</ul>
</div>
</div>
<br/>
{/* Experience end */}


{/* Education */}
<div className="education">
<h3 className="section-title">EDUCATION</h3>
<br/>
<h4>Bachelor of Arts - Acting Studies</h4>
<div className="location-dates">
<h5>George Enescu National University of Arts, Faculty of
Theatre</h5>
<h5>Iasi, Romania</h5>
<h5>2007 - 2010</h5>
</div>
</div>
<br/>
{/* Education end*/}


<div className="interests-hobbies">
<h3 className="section-title">INTERESTS AND HOBBIES</h3>
<br/>
<p>I recently started attending Tech meetups, such as React Advanced London. It's a great opportunity for
networking and meeting people in the industry, and I'm planning to doing that on a regular basis.<br/>
In my spare time, I like exploring new places, walks in nature, cooking foods from scratch or growing plants.<br/>
To relax, I sometimes engage in arts and crafts activities, such as up-cycling small pieces of furniture or painting
plant pots.<br/>
I also enjoy watching art-house films, documentaries, reading fiction and non-fiction and visiting art museums.</p>
</div>


      </div>
        </div>
      </div>
    );
  }

export default Cv;