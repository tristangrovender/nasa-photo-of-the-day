import React from "react";

import NasaList from "./components/NasaList";
import NavBar from "./components/NavBar";
import DropDown from "./components/DropDown";

import "./App.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <div className="title">
                <h1>Astronomy Picture of the Day</h1>
            </div>
            <div className="button">
                <DropDown />
            </div>
            <NasaList />
        </div>
    );
}

export default App;
