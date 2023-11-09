import iconClose from "../images/cross.png";
import CallMeFrom from "./CallMeFrom";
export default function ModalCallMe({ setIsModal }) {
  const closeModal = () => {
    setIsModal(false);
  };
  const newClient = (e) => {
    e.preventDefault();
    console.log("aboba");
  };

  return (
    <div className="backdrop">
      <div className="cardback">
        <h1>Я вам передзвоню!</h1>
        <CallMeFrom closeModal={closeModal} />{" "}
        <img
          onClick={closeModal}
          src={iconClose}
          alt=""
          className="close-icon"
        />
      </div>
    </div>
  );
}
