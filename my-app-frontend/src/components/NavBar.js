import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline",
    width: "70px",
    padding: "4px",
    margin: "0 6px 6px",
    color: "black",
    };

function NavBar() {

    return(
        <div>
            <NavLink to="/" exact style={linkStyles} activeStyle={{background:"khaki"}}>Home</NavLink>
            <NavLink to="/monday" exact style={linkStyles} activeStyle={{background:"khaki"}}>Monday</NavLink>
            <NavLink to="/Tuesday" exact style={linkStyles} activeStyle={{background:"khaki"}}>Tuesday</NavLink>
            <NavLink to="/Wednesday" exact style={linkStyles} activeStyle={{background:"khaki"}}>Wednesday</NavLink>
            <NavLink to="/Thursday" exact style={linkStyles} activeStyle={{background:"khaki"}}>Thursday</NavLink>
            <NavLink to="/Friday" exact style={linkStyles} activeStyle={{background:"khaki"}}>Friday</NavLink>
            <NavLink to="/Saturday" exact style={linkStyles} activeStyle={{background:"khaki"}}>Saturday</NavLink>
            <NavLink to="/Sunday" exact style={linkStyles} activeStyle={{background:"khaki"}}>Sunday</NavLink>
        </div>
    )
}

export default NavBar;