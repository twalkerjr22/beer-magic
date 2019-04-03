import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

const styles = {
    nav : {
        backgroundColor: "#4977e3",
        flexGrow: 1
    }
}
/* Stateless component for the navbar */
const Nav = () => {
  return (
    <Navbar style={styles.nav} expand="lg">
      <h2>Beer Magic!</h2>
    </Navbar>
  );
};
export default Nav;
