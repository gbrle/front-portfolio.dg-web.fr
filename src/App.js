import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import SideBar from "./components/side-bar/SideBar";
import Main from "./components/main/Main";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heightOfHeader: "10px",
      sideBarStatus: false
    };
  }
  getInitialHeight = (initialHeight) => {
    this.setState({ heightOfHeader: initialHeight });
  };
  updateHeight = (height) => {
    this.setState({ heightOfHeader: height });
  };

  sideBarToggle = () => {
      this.setState({ sideBarStatus: !this.state.sideBarStatus })
  }

  render() {
    return (
      <div className="fadeIn d-flex flex-column vh-100 position-relative">
        <Router>
          <Header
            heightOfHeader={this.updateHeight}
            getInitialHeight={this.getInitialHeight}
          />

          <div className="d-flex flex-row flex-fill">
            <Main
              sideBarToggle={this.sideBarToggle}
              heightOfHeader={this.state.heightOfHeader}
            />
            <SideBar
              sideBarToggle={this.sideBarToggle}
              sideBarStatus={this.state.sideBarStatus}
              heightOfHeader={this.state.heightOfHeader}
            />
          </div>
        </Router>
      </div>
    );
  }
}
