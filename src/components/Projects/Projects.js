import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import style from "./Projects.css";

function Projects() {
    return (
        <div className="body">
            <Navbar />
            <div className="main-content">
                <div className="bodyimage"> </div>
                <button type="button" className="btn btn-primary btn-lg">Large button</button>
            </div>
            <Footer />
        </div>
    );
}

export default Projects;
