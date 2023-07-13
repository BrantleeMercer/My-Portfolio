import './App.css';
import {useState, useEffect} from "react";
import InformationContainer from './Components/InfoContainer';
import MyHeader from './Components/CustomHeader';
import CourseInfo from './Components/CourseInformation';
import SpaceShooterImages from './Image Gallery/Space Shooter/ImagePool';
import BeautifulGamesImages from './Image Gallery/Beautiful Games/ImagePool';
import NewInputSystemCCImages from './Image Gallery/New Input CC/ImagePool';
import GLI1Images from './Image Gallery/GLI 1/ImagePool';

function App() {
    const gitHubLocation = "https://github.com/BrantleeMercer?tab=repositories";
    const linkedInLocation = "https://www.linkedin.com/in/brantlee-mercer-433012112/";
    const emailAddress = "brantleemercer@gmail.com";


    const spaceInfo = new CourseInfo("Space Shooter",
        "In this 2D space shooter, the player is to go through 4 waves with the 4th wave being an overpowered Mothership.  Use the powerups and your quick reflexes to defeat the coming horde!",
        "24 February 2022", 
        SpaceShooterImages,
        "https://github.com/BrantleeMercer/Galaxy-Shooter-2D");
    
    const beautifulGamesInfo = new CourseInfo("Beautiful Games",
        "This course was all about learning the Standard, Universal, and High Definition rendering pipelines in Unity!  Using the HDRP I created an old time feeling lawyers office that has the hints of a murder mystery painted on the walls.",
        "23 March 2022",
        BeautifulGamesImages,
        "https://github.com/BrantleeMercer/Framework_Assignment");
    
    const newInputSystemCCInfo = new CourseInfo("New Input System Crash Course",
        "This course was used to learn the new input system that Unity is using.  Using action maps, the objective was to update an already existing project to use the new input system.",
        "21 March 2023",
        NewInputSystemCCImages,
        "https://github.com/BrantleeMercer/Input_Framework_Assignment");
    
    const GLI1Info = new CourseInfo("Games Logic and Interactions 1",
        "In this framework assignment the objective was to create a “Sniper” style 2.5D shooter game.  The core mechanics that were to be learned were how to deal with Raycasting as well as working with Nav Mesh components while building on UI creation, game managers, audio, and visual effects that were learned previously.",
        "2 April 2023",
        GLI1Images,
        "https://github.com/BrantleeMercer/GLI_Framework_Assignment");
    
    return (
    <div className="App">
      <header>
         <MyHeader githubLocation={gitHubLocation} linkedInLocation={linkedInLocation} myEmail={emailAddress}/>
          
      </header>
      <div className={"Info-Body"}>
          <InformationContainer courseTitle={spaceInfo.courseTitle} courseDescription={spaceInfo.courseDescription} dateCompleted={spaceInfo.completionDate} courseImageFolder={spaceInfo.courseImages} destinationLinkURL={spaceInfo.projectURL}/>
          <InformationContainer courseTitle={beautifulGamesInfo.courseTitle} courseDescription={beautifulGamesInfo.courseDescription} dateCompleted={beautifulGamesInfo.completionDate} courseImageFolder={beautifulGamesInfo.courseImages} destinationLinkURL={beautifulGamesInfo.projectURL}/>
          <InformationContainer courseTitle={newInputSystemCCInfo.courseTitle} courseDescription={newInputSystemCCInfo.courseDescription} dateCompleted={newInputSystemCCInfo.completionDate} courseImageFolder={newInputSystemCCInfo.courseImages} destinationLinkURL={newInputSystemCCInfo.projectURL}/>
          <InformationContainer courseTitle={GLI1Info.courseTitle} courseDescription={GLI1Info.courseDescription} dateCompleted={GLI1Info.completionDate} courseImageFolder={GLI1Info.courseImages} destinationLinkURL={GLI1Info.projectURL}/>
      </div>
    </div>
);
}

export default App;
