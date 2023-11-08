import { NavLink } from "react-router-dom";
import ModalCallMe from "./ModalCallMe";
import { useEffect, useState } from "react";

export default function HeaderList() {
  const [isModal, setIsModal] = useState(false);
  useEffect(() => {
    isModal;
    document.body.style.overflow = isModal ? "hidden" : "scroll";
  }, [isModal]);
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
      </ul>
      {isModal ? <ModalCallMe setIsModal={setIsModal} /> : null}
    </>
  );
}
