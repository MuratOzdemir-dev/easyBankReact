import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__img"></div>
      <div className="hero__text">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button />
      </div>
    </div>
  );
}
