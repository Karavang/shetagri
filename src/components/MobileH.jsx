import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderList from "./ListHeader";
export function MobileHeader() {
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Navigation"
      className="dropButton"
      variant="warning"
    >
      <HeaderList />
    </DropdownButton>
  );
}
