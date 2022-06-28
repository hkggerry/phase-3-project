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
            <NavLink to="/Day/1" exact style={linkStyles} activeStyle={{background:"khaki"}}>Monday</NavLink>
            <NavLink to="/Day/2" exact style={linkStyles} activeStyle={{background:"khaki"}}>Tuesday</NavLink>
            <NavLink to="/Day/3" exact style={linkStyles} activeStyle={{background:"khaki"}}>Wednesday</NavLink>
            <NavLink to="/Day/4" exact style={linkStyles} activeStyle={{background:"khaki"}}>Thursday</NavLink>
            <NavLink to="/Day/5" exact style={linkStyles} activeStyle={{background:"khaki"}}>Friday</NavLink>
            <NavLink to="/Day/6" exact style={linkStyles} activeStyle={{background:"khaki"}}>Saturday</NavLink>
            <NavLink to="/Day/7" exact style={linkStyles} activeStyle={{background:"khaki"}}>Sunday</NavLink>
            <NavLink to="/Edit" exact style={linkStyles} activeStyle={{background:"khaki"}}>Edit Activities</NavLink>
        </div>
    )
}

export default NavBar;