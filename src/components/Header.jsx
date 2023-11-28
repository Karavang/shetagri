import { NavLink } from "react-router-dom";
import HeaderList from "./ListHeader";
import { MobileHeader } from "./MobileH";
import { useState } from "react";
export default function Header({ isModal, setIsModal }) {
  const [isNav, setIsNav] = useState(false);
  const handleNavLinkClick = () => {
    setIsNav(false);
  };
  return (
    <div className="header">
      <NavLink
        to="/"
        onClick={handleNavLinkClick}
      >
        <div className="logo" />
      </NavLink>
      {window.innerWidth > 830 ? (
        <HeaderList
          isModal={isModal}
          setIsModal={setIsModal}
        />
      ) : (
        <MobileHeader
          setIsNav={setIsNav}
          isNav={isNav}
          isModal={isModal}
          setIsModal={setIsModal}
        />
      )}
    </div>
  );
}
