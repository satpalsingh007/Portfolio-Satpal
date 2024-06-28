import ben10Api from "../src/images/ben10Api.jpg";
import unplanned from "../src/images/unplanned.jpg";
import forkify from "../src/images/forkify.jpg";

const Projects = () => {
    return (
        <div className="projects component">
            <div>
                <h1 className="about-heading heading">PROJECTS</h1>
                <div>HERE ARE SOME OF MY AWESOME PROJECTS</div>
            </div>
            <div className="project-container">
                <a
                    className="project ben10Api"
                    href="https://ben-10-api-1n4b.onrender.com"
                    target="_blank"
                >
                    <img className="project-image" src={ben10Api} />
                    <div className="project-name">Ben-10 Api</div>
                    <div>
                        This api allows you to search for your favorite Ben 10
                        character
                    </div>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>MongoDb</li>
                    </ul>
                </a>
                <a
                    className="project unplanned"
                    href="https://unplanned-main.onrender.com"
                    target="_blank"
                >
                    <img className="project-image" src={unplanned} />
                    <div className="project-name">Unplanned</div>
                    <div>
                        This is an your own travel Guide, it's having a bot name
                        ~Destina which will be your private destination guide
                    </div>
                    <div>API used: Google Gemini, Geocode, Leaflet</div>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>MongoDb</li>
                    </ul>
                </a>
                <a
                    className="project forkify"
                    href="https://forkify-satpal.netlify.app/"
                    target="_blank"
                >
                    <img className="project-image" src={forkify} />
                    <div className="project-name">Forkify</div>
                    <div>
                        This web app allows you to search for dishes from the
                        ingriedients you search.
                    </div>
                    <div>API used: Forkify Api</div>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </a>
            </div>
        </div>
    );
};
export default Projects;
