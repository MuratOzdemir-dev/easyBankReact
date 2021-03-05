import React from "react";

function Logo(props) {
  return (
    <div className="logo">
      <a href="/">
        <img src={props.src} alt="easybank logo" />
      </a>
    </div>
  );
}

export default Logo;
