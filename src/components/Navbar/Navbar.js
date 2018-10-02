import React from "react";
import "./Navbar.css";

const Navbar = props =>  {
    // build a componenet to display score
    return(<nav className= "navbar">
    <ul>
        <li className = "brand gameTitle">
        <a href="/">
            Clicky-Game
        </a>
            
        </li >
        <li className = "brand">
            Click an image to begin
        </li>
        <li className = "brand">
            Score: {props.score} | Top-Score: {props.topScore}
        </li>
    </ul>
</nav>
)}

export default Navbar;
