import my from "../src/images/my.jpg";
const Body = () => {
    return (
        <div className="about component">
            <h1 className="about-heading heading">ABOUT ME</h1>
            <div className="about-body">
                <img className="profile-image" src={my} />
                <div className="profile">
                    <div className="about-me">
                        Hi, I'm Satpal Singh, a 21-year-old Full-Stack developer
                        based in Uttarakhand, India. I am passionate about
                        developing applications and websites, specializing in
                        building WebApps and Websites using the MERN Stack.
                        Continuously working on personal projects, I am
                        dedicated to improving my skills and expanding my
                        expertise.
                    </div>
                    <div className="email">
                        <b className="my-contacts">email: </b>
                        satpalsingh248007@gmail.com
                    </div>
                    <div className="phone">
                        <b className="my-contacts">phone: </b>+91 8533829893
                    </div>
                    <a href={my} download="my.jpg" className="download-resume">
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Body;
