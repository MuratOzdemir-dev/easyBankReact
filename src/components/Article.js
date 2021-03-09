import React from "react";

export default function Article() {
  const style = {
    backgroundImage: `url(./images/image-currency.jpg)`,
  };

  return (
    <div className="article">
      <div className="article__head">
        <h2>Latest Articles</h2>
      </div>
      <div className="article__container">
        <div className="article__card">
          <div className="article__card__img" style={style}></div>
          <div className="article__card__author">
            <p>By Claire Robinson</p>
          </div>
          <div className="article__card__text">
            <h3>Receive money in any currency with no fees</h3>
            <p>
              The world is getting smaller and we're becoming more mobile. So
              why should you be forced to only receive money in a single...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
