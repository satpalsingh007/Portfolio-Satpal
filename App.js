import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Starter from "./components/Starter";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Header />
            <Starter />
            <About />
            <Projects />
            <Technologies />
            <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(<App />);
