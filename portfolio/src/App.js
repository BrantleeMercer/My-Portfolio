import './App.css';
import {useState, useEffect} from "react";
import InformationContainer from './Components/InfoContainer';
import MyHeader from './Components/CustomHeader';

function App() {
  return (
    <div className="App">
      <header>
         <MyHeader />
      </header>
      <div className={"Info-Body"}>
          <InformationContainer />
      </div>
    </div>
  );
}

export default App;
