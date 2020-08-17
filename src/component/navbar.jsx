import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a href="#jhhh" className="navbar-brand">
          Diary
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="colapse"
          data-target="#navcontent"
          aria-controls="navcontent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcontent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#home">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#contact">
                contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
