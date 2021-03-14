import { Component } from "react";
import Card from "./components/card/Card";
import "../../conf/axios-conf";
import Loading from "./../../components/utils/Loading";
import * as axios from "axios";

export default class ExperiencesRealisations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [],
      loaded: false,
    };
  }

  // const getData = async () => {
  //   try {
  //     const {data} = await axios.get("http://localhost:8000/api/experiences").then((response) => {
  //     this.setState({ experiences: response.data });
  //   } catch (error) {

  //   }
  // }

  componentDidMount() {
    axios
      .get("/experiences")
      .then((response) => response.data)
      .then((experiences) => this.setState({ experiences }))
      .catch((err) => console.log(err));

    this.setState({ loaded: true });
  }
  render() {
    return (
      <div className="fadeIn">
        <h1>Expériences et réalisations</h1>
        <p>
          Mes diplômes et certificats s'accompagnent d'une pratique{" "}
          <strong>autodidacte</strong> prononcée. En effet les clients que j'ai
          pu gérer en amont et en parallèle m'ont permis d'acquérir de
          l'expérience et de l'
          <strong>autonomie</strong>. Des <strong>projets personnels</strong> et
          en cours requièrent l'autoformation sur de nouvelles technologies
          telles que <strong>ReactJS</strong> sur laquelle je me forme
          actuellement.
        </p>
        <div className="mt-5">
          {this.state.loaded ? (
            <div className="row fadeIn">
              {this.state.experiences.map(
                ({ title, date, image, description, technos }, index) => (
                  <Card
                    key={index}
                    title={title}
                    date={date}
                    image={image}
                    description={description}
                    technos={technos}
                  />
                )
              )}
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    );
  }
}
