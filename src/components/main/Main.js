import {
    Competences,
    ExperiencesRealisations,
    Presentation,
    Contact,
} from "../../pages";
import {Route} from "react-router-dom";

import logo from "./developpeur-david-gariele-background.svg";

export default function Main(props) {

    return (
      <div
        className="main d-flex container flex-column w-100 pt-4 pt-md-5 p-md-5 text-center"
        style={{
          height: `calc(100vh - ${props.heightOfHeader}px)`,
        }}
      >
          <img className="backgroundImage img-fluid" alt="Fond d'écran dg-web" src={logo}/>
        <Route path="/" exact component={Presentation} />
        <Route path="/competences" component={Competences} />
        <Route
          path="/experiences-realisations"
          component={ExperiencesRealisations}
        />
        <Route path="/contact" component={Contact} />
      </div>
    );
}
