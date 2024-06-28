import logo from "../src/images/logo2.png";
const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} />

            <div className="header-comp">
                <div
                    className="header-comps"
                    onClick={() => {
                        const aboutSection = document.querySelector(".about");
                        aboutSection.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                >
                    about-me
                </div>
                <div
                    className="header-comps"
                    onClick={() => {
                        const aboutSection =
                            document.querySelector(".projects");
                        aboutSection.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                >
                    projects
                </div>
                <div
                    className="header-comps"
                    onClick={() => {
                        const aboutSection =
                            document.querySelector(".technologies");
                        aboutSection.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                >
                    technologies
                </div>
                <div
                    className="header-comps"
                    onClick={() => {
                        const aboutSection = document.querySelector(".footer");
                        aboutSection.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                >
                    contact-me
                </div>
            </div>
        </div>
    );
};

export default Header;
