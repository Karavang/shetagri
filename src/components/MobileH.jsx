import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import HeaderList from "./ListHeader";
export function MobileHeader({ setIsModal }) {
  return (
    <>
      <ul className="flexator">
        <li>
          <button
            className="openModal"
            onClick={() => {
              setIsModal(true);
            }}
          >
            Записатись
          </button>
        </li>
        <li className="ml-8">
          <DropdownButton
            id="dropdown-basic-button"
            title="Navigation"
            className="dropButton"
            variant="warning"
          >
            <HeaderList setIsModal={setIsModal} />
          </DropdownButton>
        </li>
      </ul>
    </>
  );
}
