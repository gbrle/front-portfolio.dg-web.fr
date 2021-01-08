import { Component } from "react";
import Card from "./components/card/Card";

export default class ExperiencesRealisations extends Component {
constructor(props){
  super(props)
  this.state = {
    experiences: [
      {
        date: "17/02/1986",
        title: "Premier titre",
        image:
          "https://i.pinimg.com/originals/bf/ae/3f/bfae3fa83ae7efd6b7b56c3df0fac9bf.jpg",
      },
      {
        date: "13/1223113/987",
        title: "Deuxieme titre",
        image:
          "https://jcsatanas.fr/wp-content/uploads/2017/05/test-camera-videosurveillance-jour-nuit-1080p-vt-cm1-aukey-31.jpg",
      },
      {
        date: "1asca3/1223113/987",
        title: "Troisime titre",
        image:
          "data:image/png;base64,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",
      },
    ],
  };
}


  render(){
  return (
    <div className="fadeIn">
      <h1>Expériences et réalisations</h1>
      <p>
        Mes diplômes et certificats s'accompagnent d'une pratique{" "}
        <strong>autodidacte</strong> prononcée. En effet les clients que j'ai pu
        gérer en amont et en parallèle m'ont permis d'acquérir de l'expérience
        et de l'
        <strong>autonomie</strong>. Des <strong>projets personnels</strong> et
        en cours requièrent l'autoformation sur de nouvelles technologies telles
        que <strong>ReactJS</strong> sur laquelle je me forme actuellement.
      </p>
      <div className="mt-5 container-fluid">
        <div className="row">
          {console.log(this.props)}
          {this.state.experiences.map(({ title, date, image }, index) => (
            <Card
              key={index}
              title={title}
              date={date}
              image={image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
}
