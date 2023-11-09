import { NavLink } from "react-router-dom";
import HeaderList from "./ListHeader";
import { MobileHeader } from "./MobileH";
export default function Header({ isModal, setIsModal }) {
  return (
    <div className="header">
      <NavLink to="/">
        <div className="logo" />
      </NavLink>
      {window.innerWidth > 830 ? (
        <HeaderList
          isModal={isModal}
          setIsModal={setIsModal}
        />
      ) : (
        <MobileHeader
          isModal={isModal}
          setIsModal={setIsModal}
        />
      )}
    </div>
  );
}
