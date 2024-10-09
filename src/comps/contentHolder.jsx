import NavBar from "./navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Projects from "../pages/projects";
import Contact from "../pages/contact";
import SocialLinks from "../comps/socialLinks";
import Spotify from "../comps/spotify";

const ContentHolder = () =>
{
    return(
        <div className="page">
            <SocialLinks/>
            <Router>
                <div className = "top-bar-holder">
                    <NavBar />
                </div>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects/>} />
                        <Route path="/contact" element={<Contact/>} />
                    </Routes>
                </div>
            </Router>
            <Spotify/>
        </div>
    );
}

export default ContentHolder;