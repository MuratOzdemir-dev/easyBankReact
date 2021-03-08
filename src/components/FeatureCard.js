import React from "react";

export default function FeatureCard(props) {
  return (
    <div className="feature__card">
      <div className="feature__card__icon">
        <img src={props.icon} alt="icon" />
      </div>
      <div className="feature__card__text">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
