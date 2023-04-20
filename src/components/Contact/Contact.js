import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import style from "./Contact.css";

function Contact() {
    return (
        <div className="body">
            <Navbar />
            <div className="main-content">
                <h1>Contacts page</h1>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
