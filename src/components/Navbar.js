import React from "react";
import { Link } from "react-router-dom";

const navBarStyle = {
  backgroundColor: "#000000",
  color: "#fff",
};

const listStyle = {
  display: "flex",
  listStyle: "none",
  marginTop: 0,
};

const listItems = {
  marginLeft: "1.5rem",
  marginTop: "1rem",
  marginBottom: "1rem",
  cursor: "pointer",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

const Navbar = () => {
  return (
    <div style={navBarStyle}>
      <ul style={listStyle}>
        <Link to="/" style={linkStyle}>
          <li style={listItems}>Page 1</li>
        </Link>
        <Link to="/page2" style={linkStyle}>
          <li style={listItems}>Page 2</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;

const styles = {};
