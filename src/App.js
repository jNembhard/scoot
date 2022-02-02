// import logo from "./logo.svg";

import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Homepage</h1>
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
      <h1>Main Page</h1>
    </div>
  );
}

export default App;
