import React from "react";

export default function ArticleCard(props) {
  const style = {
    backgroundImage: `url(${props.imgUrl})`,
  };

  return (
    <a href="/" className="article__card">
      <div className="article__card__img" style={style}></div>
      <div className="article__card__author">
        <p>{props.author}</p>
      </div>
      <div className="article__card__text">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </a>
  );
}
