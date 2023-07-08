import {useState, useEffect} from "react";
import '../CSS Files/InfoContainerOverrides.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBowlingBall} from "@fortawesome/free-solid-svg-icons";

function InfoContainer() {
    return (
        <div className={"Info-Container"}>
            <div className={"Images"}>
                
            </div>
            <div className={"Synopsis"}>
                <h2>Course Title</h2>
                This course was all about learning the Standard, Universal, and High Definition rendering pipelines in Unity!  Using the HDRP I created an old time feeling lawyers office that has the hints of a murder mystery painted on the walls.
                <div className={"Completion"}>
                    <h4>Completed On: </h4>
                    <button type={"button"} className={"btn btn-success"}>Go To Project</button>
                </div>
            </div>
        </div>
    );
}

export default InfoContainer;