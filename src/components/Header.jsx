import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <div className="logo" />
      </NavLink>
      <ul className="header-list">
        <li>
          <NavLink className="header-list-el" to="/about">
            Про мене
          </NavLink>
        </li>
        <li>
          <NavLink className="header-list-el" to="/methods">
            Методи
          </NavLink>
        </li>
        <li>
          <NavLink className="header-list-el">Блог</NavLink>
        </li>
        <li>
          <NavLink className="header-list-el">Клуб `Шоколад`</NavLink>
        </li>
      </ul>
    </div>
  );
}
