
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import * as axios from "axios";
axios.defaults.headers.common["Accept"] = "application/json";
export default function SideBar({sideBarToggle, sideBarStatus, heightOfHeader, experience}) {
 
  return (
    <div
      style={{ height: `calc(100vh - ${heightOfHeader}px)` }}
      className={"sideBar " + (sideBarStatus ? "fadeIn" : "d-none")}
    >
      <button
        onClick={() => {
          sideBarToggle();
        }}
        className="btn-lg border-0 bg-transparent position-absolute buttonCloseSideBar"
      >
        <FontAwesomeIcon icon={faTimes} size="1x" />
      </button>
      <div className="ml-3 mr-3 mt-5 text-center fadeIn">
        <h3 className="mb-4 fadeIn">{experience.title}</h3>

        <img
          className="fadeIn mb-4"
          width="100%"
          style={{ borderRadius: "7px" }}
          src={experience.image}
          alt={experience.title}
        />
        <div className="d-flex flex-wrap justify-content-center">
          {experience.technos
            ? experience.technos.map((techno, index) => (
                <strong className="fadeIn m-1 m-1 pl-2 pr-2" key={index}>
                  {techno.name}
                </strong>
              ))
            : ""}
        </div>
        <p className="mt-4 fadeIn">{experience.description}</p>
      </div>
    </div>
  );
}
