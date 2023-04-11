import React from "react";
import style from "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
library.add(faHouse);


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  bg-light">
      <div className="container-fluid nav-content">
        {/* <img className="navbar-brand icon" src={require ("../../assets/avatar.png")} ></img> */}

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navsec" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link ><li className="nav-link active" aria-current="page" href="#"><FontAwesomeIcon icon="house" />Home</li></Link>
            <Link><li className="nav-link" href="#"><FontAwesomeIcon icon={faPenToSquare} />Projects</li></Link>
            <Link><li className="nav-link" href="#"><FontAwesomeIcon icon={faPhone} />Contact</li></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;