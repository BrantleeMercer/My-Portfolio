import { useState, useEffect} from "react";
import '../CSS Files/CustomHeaderOverrides.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { ReactComponent as GitHubLogo } from "../Saved-SVG-Files/GitHubLogo.svg";
import { ReactComponent as LinkedInLogo } from "../Saved-SVG-Files/LinkedInLogo.svg";
import { ReactComponent as EmailLogo } from "../Saved-SVG-Files/envelope-solid.svg";

function CustomHeader() {
    return (
        <div className={"Custom-Header-Main"}>
            <div className={"Name-Section"}>
                <h2>Brantlee Mercer</h2>
            </div>
            <div className={"Resume-Section"}>
                <button type={"button"} className={"btn btn-secondary"}>Resume</button>
            </div>
            <div className={"Links-Section"}>
                <button type={"button"} className={"btn"}>
                    <GitHubLogo />
                </button>
                <button type={"button"} className={"btn"}>
                    <LinkedInLogo />
                </button>
                <button type={"button"} className={"btn"}>
                    <EmailLogo />
                </button>
            </div>
        </div>
    );
}

export default CustomHeader;