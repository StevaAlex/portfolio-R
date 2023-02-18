import React from "react";
import Navbar from "../Navbar/Navbar";
import Jumbotron from "../Jumbotron/Jumbotron";
import Footer from "../Footer/Footer";
import style from "./Home.css";
function Home() {
    return (
        <div className="body">
            <Navbar />
            <div className="main-content"> 
            <div className="bodyimage"> </div>
            <Jumbotron/>
            </div>
            <Footer/> 
        </div>
    );
} 

export default Home;
