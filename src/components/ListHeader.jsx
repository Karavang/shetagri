import { NavLink } from "react-router-dom";

export default function HeaderList({ setIsModal }) {
  return (
    <>
      <ul className="header-list">
        <li>
          <NavLink
            className="header-list-el"
            to="/about"
          >
            Про мене
          </NavLink>
        </li>
        <li>
          <NavLink
            className="header-list-el"
            to="/methods"
          >
            Методи
          </NavLink>
        </li>
        <li>
          <NavLink
            className="header-list-el"
            to="/blog"
          >
            Блог
          </NavLink>
        </li>
        <li>
          <NavLink
            className="header-list-el"
            to="/contacts"
          >
            Контакти
          </NavLink>
        </li>
        {window.innerWidth > 830 && (
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
        )}
      </ul>
    </>
  );
}
