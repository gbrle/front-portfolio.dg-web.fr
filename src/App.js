import React, {Component} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import SideBar from "./components/side-bar/SideBar";
import Main from "./components/main/Main";
import LoginForm from "./components/loginForm/LoginForm"
import ExperiencesContext from "./contexts/ExperiencesContext";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: {
        title: null,
        image: null,
        link: null,
        date: null,
        descriptif: null,
        technos: null,
      },
      heightOfHeader: "10px",
      sideBarStatus: false,
      displayLoginForm: false
    };
  }

  getInitialHeight = (initialHeight) => {
    this.setState({ heightOfHeader: initialHeight });
  };

  updateHeight = (height) => {
    this.setState({ heightOfHeader: height });
  };



  sideBarToggle = () => {
    this.setState({ sideBarStatus: !this.state.sideBarStatus });
  };
  sideBarToggleExperiences = () => {
    this.setState({ sideBarStatus: true });
  };
  selectExperience = (title, link, date, image, description, technos) => {
    this.setState({
      experience: {
        title: title,
        link: link,
        date: date,
        image: image,
        description: description,
        technos: technos,
      },
    });
  };

    displayLoginForm = () => {
    this.setState({ displayLoginForm: !this.state.displayLoginForm });
    console.log(this.state.displayLoginForm);
  };

  render() {
    const contextValue = {
      sideBarStatus: this.sideBarStatus,
      sideBarToggle: this.sideBarToggle,
      sideBarToggleExperiences: this.sideBarToggleExperiences,
      selectExperience: this.selectExperience,
    };

    return (
      <div className="fadeIn d-flex flex-column vh-100 position-relative">
        <Router>
          <LoginForm
            displayLoginFormAction={this.displayLoginForm}
            displayLoginForm={this.state.displayLoginForm}
          />

          <ExperiencesContext.Provider value={contextValue}>
            <Header
              heightOfHeader={this.updateHeight}
              getInitialHeight={this.getInitialHeight}
              displayLoginForm={this.displayLoginForm}
            />

            <div className="d-flex flex-row flex-fill">
              <Main heightOfHeader={this.state.heightOfHeader} />
              <SideBar
                experience={this.state.experience}
                sideBarToggle={this.sideBarToggle}
                sideBarStatus={this.state.sideBarStatus}
                heightOfHeader={this.state.heightOfHeader}
              />
            </div>
          </ExperiencesContext.Provider>
        </Router>
      </div>
    );
  }
}
