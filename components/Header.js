import logo from "../src/images/logo2.png";
const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} />

            <div className="header-comp">
                <div className="header-comps">about-me</div>
                <div className="header-comps">projects</div>
                <div className="header-comps">technologies</div>
                <div className="header-comps">contact-me</div>
            </div>
        </div>
    );
};

export default Header;
