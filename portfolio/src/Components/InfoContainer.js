import React, {useState, useEffect} from "react";
import '../CSS Files/InfoContainerOverrides.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBowlingBall} from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carousel";

export default function InfoContainer(props) {
    
    const handleClick = (dest) => {
        window.open(dest);
    }
    
    return (
        <div className={"Info-Container"}>
            <div className={"Images"}>
                <Carousel>
                    {props.courseImageFolder.map((imgSrc, index) => 
                        (<img src={imgSrc.src} key={index} alt="image"/>)
                    )}
                </Carousel>
            </div>
            <div className={"Synopsis"}>
                <h2>{props.courseTitle}</h2>
                {props.courseDescription}
                <div className={"Completion"}>
                    <h4>Completed On: {props.dateCompleted}</h4>
                    <button onClick={() => {handleClick(props.destinationLinkURL)}} 
                            className={"btn btn-success"}>
                        Go To Project
                    </button>
                </div>
            </div>
        </div>
    );
}