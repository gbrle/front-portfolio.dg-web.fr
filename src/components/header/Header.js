import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import fingerMove from "./slide-left.gif";
import logo from "./dg-web-logo.svg";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
  }

  render() {
    window.onload = () => {
      this.props.getInitialHeight(this.header.current.offsetHeight);
    };

    window.onresize = () => {
      this.props.heightOfHeader(this.header.current.offsetHeight);
    };


    return (
      <header
        ref={this.header}
        className="backgroundColor-black position-relative"
      >
        <div className="logo d-flex pt-3 pl-3 pl-md-5 flex-wrap align-items-center">
          <Link to="/">
            <img className="logo-dg-web" alt="logo-dg-web" src={logo} />
          </Link>
          <div>
            <p className="pl-3 text-light mb-0 font-weight-bold">
              David Gabriele
            </p>
            <p style={{ fontSize: "14px" }} className="pl-3 text-light mb-0">
              Développement web
            </p>
          </div>
        </div>
        <nav className="d-flex align-items-end text-light mt-3 text-nowrap">
          <div className="menu">
            <ul style={{ listStyleType: "none" }} className="d-flex mb-0 pl-0">
              <NavLink
                exact
                to="/"
                className="pb-2 pl-3 pr-3 menu-title"
                activeClassName="activeMenu"
              >
                Présentation
              </NavLink>
              <NavLink
                to="/competences"
                className="pb-2 pl-3 pr-3 menu-title"
                activeClassName="activeMenu"
              >
                Compétences{" "}
              </NavLink>
              <NavLink
                to="/experiences-realisations"
                className="pb-2 pl-3 pr-3 menu-title"
                activeClassName="activeMenu"
              >
                Expériences / Réalisations{" "}
              </NavLink>
              <NavLink
                to="/contact"
                className="pb-2 pl-3 pr-3 menu-title"
                activeClassName="activeMenu"
              >
                Contact{" "}
              </NavLink>
              <NavLink
                to="/cv"
                className="pb-2 pl-3 pr-3 menu-title"
                activeClassName="activeMenu"
              >
                Curiculum Vitae{" "}
              </NavLink>
            </ul>
          </div>
          <img
            className="fingerMove"
            alt="super doigt"
            width="40px"
            src={fingerMove}
          />
        </nav>
      </header>
    );
  }
}
