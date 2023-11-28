import { NavLink } from "react-router-dom";

export default function HeaderList({ setIsModal, setIsNav, isNav }) {
  const handleNavLinkClick = () => {
    setIsNav(false);
  };

  if (window.innerWidth > 830 || isNav) {
    return (
      <>
        <ul className="header-list">
          <li>
            <NavLink
              className="header-list-el"
              to="/about"
              onClick={handleNavLinkClick}
            >
              Про мене
            </NavLink>
          </li>
          <li>
            <NavLink
              className="header-list-el"
              to="/methods"
              onClick={handleNavLinkClick}
            >
              Методи
            </NavLink>
          </li>
          <li>
            <NavLink
              className="header-list-el"
              to="/blog"
              onClick={handleNavLinkClick}
            >
              Блог
            </NavLink>
          </li>
          <li>
            <NavLink
              className="header-list-el"
              to="/contacts"
              onClick={handleNavLinkClick}
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
}
