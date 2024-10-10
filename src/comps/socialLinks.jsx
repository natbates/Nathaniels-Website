import "../styles/socialLinks.css";
import { ReactComponent as DiscordIcon } from '../svgs/discord-svgrepo-com.svg'; 
import { ReactComponent as GithubIcon } from '../svgs/github-square-svgrepo-com.svg'; 
import { ReactComponent as LinkedInIcon } from '../svgs/linked-in-logo-of-two-letters-svgrepo-com.svg'; 
import ThemeButton from "./themeButton";

const SocialLinks = () =>
{
    return (
        <div className="social-container">
            <ThemeButton />
            <a href = "https://discord.com/users/1024815470836187187" target="_blank"><DiscordIcon className = "svg"/></a>
            <a href = "https://github.com/natbates" target="_blank"><GithubIcon className = "svg"/></a>
            <a href = "www.linkedin.com/in/nathaniel-bates-69b8b9266" target="_blank"><LinkedInIcon className = "svg"/></a>
        </div>
    );
}

export default SocialLinks;