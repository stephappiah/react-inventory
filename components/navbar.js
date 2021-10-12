import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Inventory Management
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Upgrade
                </a>
              </li>
              <li className="nav-item dropdown">
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
