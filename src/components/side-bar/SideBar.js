import {
  Competences,
  ExperiencesRealisations,
  Presentation,
  Contact,
} from "../../pages";
import { Route } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";

export default class SideBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      experience: {
        title: null,
        link: null,
        date: null,
        image: null,
      }
    }
} 
  render() {
    return (
      <div
        style={{ height: `calc(100vh - ${this.props.heightOfHeader}px)` }}
        className={"sideBar " + (this.props.sideBarStatus ? "fadeIn" : "d-none")}
      >
        <div className="position-fixed w-100 d-flex pt-3 pl-md-2 pr-3 pr-md-0 justify-content-end justify-content-md-start">
          {" "}
          <button
            onClick={() => {
              this.props.sideBarToggle();
            }}
            className="btn-lg border-0 bg-transparent"
          >
            <FontAwesomeIcon icon={faTimes} size="1x" />
          </button>
        </div>
        <div className="mt-5">
          <p className="p-4">
            Dolore duis aliqua mollit magna veniam cupidatat excepteur occaecat
            nostrud ut Lorem. Est aliqua proident nulla officia adipisicing
            officia tempor aute labore Lorem ullamco eiusmod anim. Consequat
            incididunt cupidatat dolore ea cupidatat tempor laborum dolore
            veniam occaecat consequat sit commodo. Officia laborum enim ea
            voluptate qui sit proident ea voluptate enim id in ullamco non.
            Reprehenderit fugiat in excepteur duis proident cillum sunt esse eu
            ipsum veniam cillum. Reprehenderit anim officia nulla velit
            incididunt deserunt et irure. Enim amet ut culpa eu tempor ad cillum
            aliqua cillum ad consequat voluptate. In pariatur adipisicing esse
            consequat laborum elit cupidatat magna tempor incididunt duis ut.
            Cillum deserunt sunt tempor est velit ullamco ea aliquip veniam
            nulla Lorem in. Id nulla duis incididunt cupidatat excepteur nisi.
            Minim est reprehenderit est ipsum nostrud consectetur id commodo.
            Veniam nostrud irure esse sunt consequat non excepteur cillum velit
            ut cillum in laboris. Est tempor ut dolor deserunt deserunt quis
            nostrud voluptate id elit velit est. Excepteur ut ullamco commodo eu
            velit laborum sit cupidatat consequat nostrud. Proident dolor do
            consectetur irure est in magna veniam tempor laborum culpa aliquip
            consequat. Cillum exercitation in voluptate proident dolore qui.
            Excepteur ut adipisicing cupidatat commodo enim est culpa sunt sit.
            Velit nulla nulla fugiat esse est duis amet consequat. Incididunt ex
            occaecat voluptate deserunt anim minim eiusmod ipsum tempor aute.
            Aute exercitation eiusmod ea incididunt dolore do nostrud. Pariatur
            sint minim Lorem laboris sunt id deserunt eu. Nisi consequat sunt
            exercitation quis proident excepteur adipisicing reprehenderit est
            elit aliquip. Eu anim proident ipsum laborum. Adipisicing Lorem id
            magna consectetur id. Magna minim id exercitation enim non mollit
            sunt ipsum ea labore cillum et. Esse cupidatat ad proident nulla
            fugiat anim. Voluptate occaecat nulla eiusmod excepteur ex
            incididunt excepteur. Mollit dolore nulla anim enim laborum quis
            nostrud officia sunt enim voluptate nostrud cillum exercitation.
            Reprehenderit ex reprehenderit elit mollit cillum commodo laboris
            laborum sint ea. Aliquip veniam ea ipsum velit quis reprehenderit
            consequat. Nisi sit consectetur cupidatat nostrud pariatur tempor
            aute. Laborum culpa eiusmod occaecat proident aliqua mollit culpa ex
            ullamco eu dolor quis eiusmod. Cillum dolor ipsum laborum aute ipsum
            duis. Magna eu ex laboris cupidatat. Pariatur ea voluptate voluptate
            labore officia amet sunt laboris. Elit labore veniam id velit
            voluptate esse et Lorem labore occaecat. Aute cillum occaecat fugiat
            mollit laborum. Laborum velit proident est consectetur velit esse
            eiusmod laborum sit culpa cillum ipsum cupidatat. Dolor ad ut
            commodo exercitation aliqua ut pariatur officia enim deserunt
            adipisicing reprehenderit est. Officia officia anim fugiat dolor
            anim qui ut sunt ad. Est pariatur pariatur aliquip nostrud anim
            esse. Consectetur cillum quis excepteur enim amet ad tempor. Aliquip
            velit ex quis esse minim occaecat fugiat qui eu duis non esse
            proident ad. Ex adipisicing pariatur quis ut tempor aliqua consequat
            deserunt laboris do. Incididunt ex et sint aliquip mollit cupidatat
            ut culpa laborum.
          </p>
        </div>
      </div>
    );
  }
}
