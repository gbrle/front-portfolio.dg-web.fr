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
        link: null,
      },
      {
        date: "13/1223113/987",
        title: "Deuxieme titre",
        image:
          "https://dg-web.fr/assets/images/experiencesImages/rfblabstudio.png",
        link: null,
      },
      {
        date: "1asca3/1223113/987",
        title: "Troisime titre",
        image:
          "https://dg-web.fr/assets/images/experiencesImages/spinandgogo.jpg",
        link: null,
      },
      {
        date: "1asca3/1223113/987",
        title: "Troisime titre",
        image:
          "https://dg-web.fr/assets/images/experiencesImages/sporteventflyers.png",
        link: null,
      },
      {
        date: "1asca3/1223113/987",
        title: "Troisime titre",
        image:
          "https://dg-web.fr/assets/images/experiencesImages/spinandgogo.jpg",
        link: null,
      },
      {
        date: "1asca3/1223113/987",
        title: "Troisime titre",
        image:
          "https://dg-web.fr/assets/images/experiencesImages/spinandgogo.jpg",
        link: null,
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
