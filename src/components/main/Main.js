import {
  Competences,
  ExperiencesRealisations,
  Presentation,
  Contact,
} from "../../pages";
import { Route } from "react-router-dom";
import "./main.css";

import logo from "./developpeur-david-gariele-background.png";
export default function Main(props) {

  return (
    <div
      className="main d-flex flex-column w-100 pt-4 pt-md-5 p-2 p-md-5 text-center"
      style={{ height: `calc(100vh - ${props.heightOfHeader}px)` }}
    >
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>

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
