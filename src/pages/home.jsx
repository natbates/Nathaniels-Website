import "../styles/home.css";
import { Link } from 'react-router-dom';

const Home = () =>
{

    return(
        <div id = "home">
            <a href = "https://docs.google.com/document/d/1z1ZhAOo5Xm14Zn8l6D2DmgzzzgykIuJBRXjiSrFTrRc/edit" target="_blank" ><h1 id = "name">Nathaniel Bates</h1></a>
            <p>Front end React web developer<span className="blinking">_</span></p>
            <Link to="/contact"><button id = "contact-me">Contact me</button></Link>

        </div>
    );
}

export default Home;