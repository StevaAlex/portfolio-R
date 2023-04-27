import React from "react";
import Navbar from "../Navbar/Navbar";
import Jumbotron from "../Jumbotron/Jumbotron";
import Footer from "../Footer/Footer";
import style from "./Home.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="body">
            <Navbar />
            <div className="main-content">
                <div className="bodyimage"> </div>
                <Link to="/projects">
                    <button type="button" className="btn btn-primary btn-lg">Click here for projects</button>
                </Link>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
