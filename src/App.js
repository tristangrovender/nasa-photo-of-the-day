import React from "react";

import NasaList from "./components/NasaList";

import "./App.css";
import DropDown from "./components/DropDown";

function App() {
    return (
        <div className="App">
            <h1>Astronomy Picture of the Day</h1>
            {/* Dropdown should go here once I figure out state/props flow */}
            <NasaList />
        </div>
    );
}

export default App;
