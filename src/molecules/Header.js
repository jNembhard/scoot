import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/about">
          <h4>About</h4>
        </Link>{" "}
        |
        <Link to="/careers">
          <h4>Careers</h4>
        </Link>
        <Link to="/locations">
          <h4>Locations</h4>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
