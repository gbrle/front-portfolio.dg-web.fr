import React, {Component} from "react";
import {NavLink, Link} from "react-router-dom";
import fingerMove from "./slide-left.gif";
import logo from "./dg-web-logo.svg";
import "./header.css";


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
            className="backgroundColor-black position-relative d-block d-md-flex justify-content-around"
          >
            {/* <div className="lines">
              <div className="line" />
              <div className="line" />
              <div className="line" />
            </div> */}
            <div className="logo d-flex pt-3 pl-3 pl-md-5 flex-wrap align-items-center justify-content-between text-nowrap">
              <div className="d-flex mb-0 mb-md-3">
                <Link to="/" style={{ zIndex: 3 }}>
                  <img className="logo-dg-web" alt="logo-dg-web" src={logo} />
                </Link>
                <div>
                  <p
                    style={{ zIndex: 3, fontSize: "26px" }}
                    className="pl-3 text-light mb-0 font-weight-bold"
                  >
                    David Gabriele
                  </p>
                  <p
                    style={{ fontSize: "15px", zIndex: 3 }}
                    className="pl-3 text-light mb-0"
                  >
                    Développeur Back-End
                  </p>
                </div>
              </div>
              <div style={{ zIndex: 3 }}>
                <button
                  style={{ borderRadius: "4px", border: "1px solid #cb875f" }}
                  onClick={() => this.props.displayLoginForm()}
                  className="btn btn-transparent text-light mr-4 text-uppercase text-bold connectionButton"
                >
                  Se connecter
                </button>
              </div>
            </div>
            <nav className="d-flex align-items-end text-light mt-2 mt-md-4 text-nowrap">
              <div className="menu">
                <ul
                  style={{ listStyleType: "none" }}
                  className="d-flex mb-0 pl-0"
                >
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
