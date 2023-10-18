import '../CSS Files/CustomHeaderOverrides.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ReactComponent as GitHubLogo } from "../Saved-SVG-Files/GitHubLogo.svg";
import { ReactComponent as LinkedInLogo } from "../Saved-SVG-Files/LinkedInLogo.svg";
import { ReactComponent as EmailLogo } from "../Saved-SVG-Files/envelope-solid.svg";
import Resume from "../Misc/Resume";

export default function CustomHeader(props) {
    
    const handleGoToNewPage = (dest) => {
        window.open(dest);
    }
    
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
                <button onClick={() => {handleGoToNewPage(props.githubLocation)}} className={"btn"}>
                    <GitHubLogo />
                </button>
                <button onClick={() => {handleGoToNewPage(props.linkedInLocation)}} className={"btn"}>
                    <LinkedInLogo />
                </button>
                <a href={`mailto:${props.myEmail}`}>
                    <button type={"button"} className={"btn"}>
                        <EmailLogo />
                    </button>
                </a>
            </div>
        </div>
    );
}