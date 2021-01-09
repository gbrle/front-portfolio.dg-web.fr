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
        descriptif:
          "Ullamco aliqua ea enim deserunt enim aute sint consequat cupidatat ea. Enim ullamco tempor ut non non ea elit est incididunt eu duis quis. Excepteur non irure cupidatat quis anim nostrud anim aliqua qui. Aliqua sint excepteur ad aliquip pariatur. Esse aute consectetur ipsum tempor laboris ex velit enim aliquip ipsum. Nostrud magna nulla id non aliquip dolore veniam sit cupidatat ex nisi ullamco aliqua do.",
        image:
          "https://i.pinimg.com/originals/bf/ae/3f/bfae3fa83ae7efd6b7b56c3df0fac9bf.jpg",
        link: null,
      },
      {
        date: "13/1223113/987",
        title: "Deuxieme titre",
        descriptif:
          "Deserunt magna reprehenderit qui consequat consequat quis excepteur tempor officia incididunt. Dolor reprehenderit ex veniam incididunt enim cupidatat ea excepteur cupidatat magna labore amet et quis. Cupidatat fugiat adipisicing non occaecat tempor culpa mollit in eiusmod deserunt. Adipisicing exercitation duis voluptate qui nostrud voluptate dolore cupidatat labore eu id cillum. In ex exercitation esse anim tempor reprehenderit dolore magna aliqua non. Eu id aute reprehenderit nisi aliquip sint quis. Laborum qui in et nisi sunt irure reprehenderit tempor enim eu aliquip qui Lorem.",

        image:
          "https://dg-web.fr/assets/images/experiencesImages/rfblabstudio.png",
        link: null,
      },
      {
        date: "1asca3/1223113/987",
        title: "Troisime titre",
        descriptif:
          "Anim adipisicing aliqua reprehenderit nostrud irure et occaecat sit deserunt ipsum. Fugiat anim dolore exercitation nostrud. Ea fugiat sit commodo voluptate nisi. Occaecat ullamco magna quis laboris id ex ut quis commodo aute quis tempor. Qui proident minim exercitation tempor consequat deserunt enim ad. Proident enim non aute ullamco incididunt commodo velit nostrud reprehenderit incididunt fugiat incididunt. Id sint esse ut elit pariatur ea dolore excepteur ut.",

        image:
          "https://dg-web.fr/assets/images/experiencesImages/spinandgogo.jpg",
        link: null,
      },
      {
        date: "1asca3/1223113/987",
        title: "Troisime titre",
        descriptif:
          "Eu do sit laboris occaecat officia dolore nisi. Qui aliqua voluptate excepteur voluptate proident enim ea culpa elit ad cupidatat nostrud. Reprehenderit Lorem ea est ex est ea aliqua sit laboris.",

        image:
          "https://dg-web.fr/assets/images/experiencesImages/sporteventflyers.png",
        link: null,
      },
      {
        date: "1asca3/1223113/987",
        title: "Troisime titre",
        descriptif:
          "Aliquip aute nostrud deserunt ipsum quis deserunt eiusmod do cillum amet in irure magna aute. Sunt velit officia culpa reprehenderit cupidatat. Dolore nostrud commodo quis aute nostrud commodo cillum ex ad. In ex eiusmod occaecat excepteur magna veniam laboris commodo ut ex. Occaecat elit adipisicing ut ipsum. Cillum elit sunt commodo cupidatat aliquip incididunt nulla labore consequat..",

        image:
          "https://dg-web.fr/assets/images/experiencesImages/spinandgogo.jpg",
        link: null,
      },
      {
        date: "1asca3/1223113/987",
        title: "Troisime titre",
        descriptif:
          "Magna laborum in ipsum nisi excepteur id magna ea eiusmod. Qui ipsum culpa nisi Lorem sunt consectetur ut non eiusmod reprehenderit duis non. Pariatur officia et labore fugiat commodo consectetur ipsum esse dolor sunt. Cillum sint do mollit est anim consequat nulla laboris. Aliqua voluptate in quis Lorem sunt enim nisi veniam irure occaecat incididunt.",

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
      <div className="mt-5">
        <div className="row">
          {this.state.experiences.map(({ title, date, image, descriptif }, index) => (
            <Card
              key={index}
              title={title}
              date={date}
              image={image}
              descriptif={descriptif}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
}
