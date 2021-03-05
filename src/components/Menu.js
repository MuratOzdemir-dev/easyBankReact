import React from "react";

function Menu(props) {
  return (
    <div className= {props.class}>
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Contact</a>
      <a href="/">Blog</a>
      <a href="/">Career</a>
    </div>
  );
}

export default Menu;
