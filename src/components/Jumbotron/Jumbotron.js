import React from "react";
import style from "./Jumbotron.css"

function Jumbotron() {
    return (
        <div className="holder">
            <div className="jumbotron text-center">
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>
            </div>
        </div>
    )
} 
export default Jumbotron;