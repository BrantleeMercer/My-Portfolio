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
    
    const spaceInfo = new CourseInfo("Space Shooter",
        "In this 2D space shooter, the player is to go through 4 waves with the 4th wave being an overpowered Mothership.  Use the powerups and your quick reflexes to defeat the coming horde!",
        "24 February 2022", 
        SpaceShooterImages,
        "");
    
    const beautifulGamesInfo = new CourseInfo("Beautiful Games",
        "This course was all about learning the Standard, Universal, and High Definition rendering pipelines in Unity!  Using the HDRP I created an old time feeling lawyers office that has the hints of a murder mystery painted on the walls.",
        "23 March 2022",
        BeautifulGamesImages,
        "");
    
    const newInputSystemCCInfo = new CourseInfo("New Input System Crash Course",
        "This course was used to learn the new input system that Unity is using.  Using action maps, the objective was to update an already existing project to use the new input system.",
        "21 March 2023",
        NewInputSystemCCImages,
        "");
    
    const GLI1 = new CourseInfo("Games Logic and Interactions 1",
        "In this framework assignment the objective was to create a “Sniper” style 2.5D shooter game.  The core mechanics that were to be learned were how to deal with Raycasting as well as working with Nav Mesh components while building on UI creation, game managers, audio, and visual effects that were learned previously.",
        "2 April 2023",
        GLI1Images,
        "");
    
    return (
    <div className="App">
      <header>
         <MyHeader />
          
      </header>
      <div className={"Info-Body"}>
          <InformationContainer courseTitle={spaceInfo.courseTitle} courseDescription={spaceInfo.courseDescription} dateCompleted={spaceInfo.completionDate} courseImageFolder={spaceInfo.courseImages}/>
          <InformationContainer courseTitle={beautifulGamesInfo.courseTitle} courseDescription={beautifulGamesInfo.courseDescription} dateCompleted={beautifulGamesInfo.completionDate} courseImageFolder={beautifulGamesInfo.courseImages}/>
      </div>
    </div>
);
}

export default App;
