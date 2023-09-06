import { NavLink } from "react-router-dom";

export default function HeaderList() {
  return (
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
        <NavLink className="header-list-el" to="/blog">
          Блог
        </NavLink>
      </li>
      <li>
        <NavLink className="header-list-el">Клуб `Шоколад`</NavLink>
      </li>
    </ul>
  );
}
