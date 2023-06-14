import { useContext } from "react";
import "./themeSelector.css";
import { ThemeContext } from "../../contexts/ThemeContext";


const theme = ["danger", "success", "warning", "primary"];

function ThemeSelector() {

    const { changeColor, mode, changeMode } = useContext(ThemeContext);

    const toggleMode = () => {
        changeMode(mode === "dark" ? "light" : "dark")
    }

    return (
        <div className="container theme-container">
            <div className="mode-toggle">
                <h4 onClick={toggleMode} className={mode === "dark" ? "text-white" : "text-dark"}>{mode === "dark" ? "light" : "dark"}</h4>
            </div>
            <div className="theme-links">
                {theme.map(color => {
                    return <span key={color} onClick={() => changeColor(color)} className={`bg-${color}`}></span>
                })}
            </div>
        </div>
    );
}


export default ThemeSelector;