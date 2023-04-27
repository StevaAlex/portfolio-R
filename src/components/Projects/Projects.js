import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import style from "./Projects.css";
import placeholder from "../../assets/blank.png"

function Projects() {
    return (
        <div className="body">
            <Navbar />
            <div className="main-content">
                <div className="projectsTitle">
                    <h1> My Projects</h1>
                </div>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active placeholderContain" data-bs-interval="10000" >
                            <img src={placeholder} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block placeholder ">
                                <h5>Coming soon</h5>
                                <p>Coming soon</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="10000" >
                            <img src={placeholder} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block placeholder">
                                <h5>Coming soon</h5>
                                <p>Coming soon</p>
                            </div>
                        </div>
                        <div className="carousel-item " data-bs-interval="10000" >
                            <img src={placeholder} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block placeholder">
                                <h5>Coming soon</h5>
                                <p>Coming soon</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Projects;
