import React, { useState, useEffect } from "react";
import axios from "axios";

import NasaCard from "./NasaCard";

function NasaList() {
    const [pictures, setPictures] = useState({});

    useEffect(() => {
        axios
            .get(
                "https://api.nasa.gov/planetary/apod?api_key=HNIHfZ4hyxOhH1UOZNRGwkOpZshdXFT8ZwUuW6Hd"
            )
            .then(response => {
                setPictures(response.data);
            });
    }, []);

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
