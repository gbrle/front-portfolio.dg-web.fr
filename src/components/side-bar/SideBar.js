
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
      <div className="ml-3 mr-3 mt-5 text-center">
        <h3 className="mb-4">{experience.title}</h3>

        <img
        className="fadeIn"
          width="100%"
          style={{ borderRadius: '7px' }}
          src={experience.image}
          alt={experience.title}
        />
        <p className="mt-4">{experience.descriptif}</p>
      </div>
    </div>
  );
}
