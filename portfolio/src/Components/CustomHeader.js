import { useState, useEffect} from "react";
import '../CSS Files/CustomHeaderOverrides.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { ReactComponent as GitHubLogo } from "../Saved-SVG-Files/GitHubLogo.svg";
import { ReactComponent as LinkedInLogo } from "../Saved-SVG-Files/LinkedInLogo.svg";
import { ReactComponent as EmailLogo } from "../Saved-SVG-Files/envelope-solid.svg";
import Resume from "../Misc/Brantlee_Mercer_Resume.pdf";

export default function CustomHeader(props) {
    const gitHubLocation = "https://github.com/BrantleeMercer?tab=repositories";
    const linkedInLocation = "https://www.linkedin.com/in/brantlee-mercer-433012112/";
    const emailAddress = "brantleemercer@gmail.com";
    
    return (
        <div className={"Custom-Header-Main"}>
            <div className={"Name-Section"}>
                <h2>Brantlee Mercer</h2>
            </div>
            <div className={"Resume-Section"}>
                <a href={Resume} download={"Brantlee Mercer Resume"} target={"_blank"} rel={"noreferrer"}>
                    <button type={"button"} className={"btn btn-secondary"}>Resume</button>
                </a>
            </div>
            <div className={"Links-Section"}>
                <a href={gitHubLocation}>
                    <button type={"button"} className={"btn"}>
                        <GitHubLogo />
                    </button>
                </a>
                <a href={linkedInLocation}>
                    <button type={"button"} className={"btn"}>
                        <LinkedInLogo />
                    </button>
                </a>
                <a href={`mailto:${emailAddress}`}>
                    <button type={"button"} className={"btn"}>
                        <EmailLogo />
                    </button>
                </a>
            </div>
        </div>
    );
}