import { NavLink } from "react-router-dom";
import { MobileHeader } from "./MobileH";
import HeaderList from "./ListHeader";
export default function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <div className="logo" />
      </NavLink>
      {window.innerWidth > 830 ? <HeaderList /> : <MobileHeader />}
    </div>
  );
}
