import React, { useState, useEffect } from "react";
import axios from "axios";

import NasaCard from "./NasaCard";

function NasaList() {
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api.nasa.gov/planetary/apod?api_key=t2P6022lPIC13RKHo8XMlq1lwPYdYSoIb91VADud"
            )
            .then(response => {
                setPictures(response.data);
            });
    });

    return (
        <div>
            <NasaCard
                title={pictures.title}
                explanation={pictures.explanation}
                url={pictures.url}
            />
        </div>
    );
}

export default NasaList;
