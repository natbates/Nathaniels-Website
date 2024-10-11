import { ThemeContext } from "./App";
import { useContext } from "react";
import { ReactComponent as LightModeIcon } from '../svgs/lightmode.svg'; 
import "../styles/themeButton.css";

const ThemeButton = () =>
    {

        const {theme, toggleTheme} = useContext(ThemeContext);

        return (
            <button className = "theme-button" onClick={toggleTheme}>
                <LightModeIcon id = "lightmode-img"/>
            </button>
        );
    } 


export default ThemeButton;