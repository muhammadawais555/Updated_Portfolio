//import "./App.css";
// import Layout from "./components/Layout/Layout";
import About from "./pages/About/About.js";
import Contact from "./pages/Contact/Contact.js";
import Education from "./pages/Education/Education.js";
import Projects from "./pages/Projects/Projects.js";
import Techstack from "./pages/Techstack/Techstack.js";
import WorkExp from "./pages/WorkExp/WorkExp.js";
import ScrollToTop from "react-scroll-to-top";
import Menu from "./components/Menus/Menu.js";
import { useTheme } from "../src/context/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [theme] = useTheme();
  return (
    <>
      {/* <Layout /> */}
      <div id={theme}>
        <ToastContainer />
        <Menu />
        <div className="container">
          <About />
        </div>
        <Education />
        <Techstack />
        <Projects />
        <WorkExp />
        <Contact />
        <Footer />
        <ScrollToTop smooth className="Scroll" />
      </div>
    </>
  );
}

export default App;
