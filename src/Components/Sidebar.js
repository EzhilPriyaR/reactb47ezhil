import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Image } from "react-bootstrap";
import logo from './../Assets/Images/logo.jpeg';

function Sidebar() {

    return (
        <div id='sideBar'>
            <div className ="d-flex justify-content-center">
                <Image id='adminImage'src={logo} roundedCircle />
            </div>
            <h2 id='sidebar-heading'><strong>INFO's ADMIN</strong></h2>
            <div id='sidebar-div'>
                <a id='navigation' href='#Dashboard'>Dashboard</a>
                <a id='navigation' href='#Project'>Project</a>
                <a id='navigation' href='#Task'>Task</a>
                <a id='navigation' href='#Client'>Client</a>
                <a id='navigation' href='#Contact'>Contact</a>
                <a id='navigation' href='#About'>About</a>
            </div>
        </div>
    )
}

export default Sidebar
