import "bootstrap/dist/css/bootstrap.min.css";
import HeaderList from "./ListHeader";
export function MobileHeader({ setIsModal, setIsNav, isNav }) {
  const changerNav = () => {
    setIsNav(!isNav);
  };
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
          <button
            onClick={changerNav}
            className="openModal"
          >
            Навігація
          </button>
          <HeaderList
            setIsNav={setIsNav}
            isNav={isNav}
            setIsModal={setIsModal}
          />
        </li>
      </ul>
    </>
  );
}
