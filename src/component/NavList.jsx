import React from "react";
import "../features/Styles/navlist.scss";

function NavList() {
  return (
    <div className="NavList">
      <ul>
        <li>
          <a href="#">collections</a>
        </li>
        <li>
          <a href="#">men</a>
        </li>{" "}
        <li>
          <a href="#">women</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>{" "}
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
    </div>
  );
}

export default NavList;
