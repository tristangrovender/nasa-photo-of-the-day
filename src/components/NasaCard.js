import React from "react";

const NasaCard = props => {
    return (
        <div className="nasa-card">
            {/* Fill in with whatever we want to display from the API object that is returned */}
            <img src={props.url} alt="NASA APOD" />
            <div className="description">
                <h1>{props.title}</h1>
                <p>{props.explanation}</p>
            </div>
        </div>
    );
};

export default NasaCard;
