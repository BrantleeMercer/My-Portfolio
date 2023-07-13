import {useState, useEffect} from "react";
import '../CSS Files/InfoContainerOverrides.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBowlingBall} from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carousel";

export default function InfoContainer(props) {
    
    /*
    * get a list of images in the folder for each course
    * map them to a carousel img tag
    */
    
    
    
    return (
        <div className={"Info-Container"}>
            <div className={"Images"}>
                <Carousel>
                    <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
                    <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
                </Carousel>
            </div>
            <div className={"Synopsis"}>
                <h2>{props.courseTitle}</h2>
                {props.courseDescription}
                <div className={"Completion"}>
                    <h4>Completed On: {props.dateCompleted}</h4>
                    <button type={"button"} className={"btn btn-success"}>Go To Project</button>
                </div>
            </div>
        </div>
    );
}