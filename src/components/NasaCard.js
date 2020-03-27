import React from "react";

const NasaCard = props => {
    return (
        <div>
            {/* Fill in with whatever we want to display from the API object that is returned */}
            <h1>{props.title}</h1>
            <h2>{props.explanation}</h2>
            <img src={props.url} alt="NASA APOD" />
        </div>
    );
};

export default NasaCard;
