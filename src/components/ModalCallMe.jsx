import iconClose from "../images/cross.png";
import CallMeFrom from "./CallMeFrom";
export default function ModalCallMe({ setIsModal }) {
  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div className="backdrop">
      <div className="cardback">
        <h1>
          Залиште, будь ласка, контакти. <br /> Я з вами зв'яжусь.
        </h1>
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
