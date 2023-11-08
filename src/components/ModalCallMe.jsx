import CallMeFrom from "./CallMeFrom";

export default function ModalCallMe({ setIsModal }) {
  const closeModal = () => {
    setIsModal(false);
  };
  const newClient = (e) => {
    e.preventDefault();
    console.log("aboba");
  };
  const handleClickBackground = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };
  return (
    <div
      className="backdrop"
      onClick={handleClickBackground}
    >
      <div className="cardback">
        <h1>Я вам передзвоню!</h1>
        <CallMeFrom />
      </div>
    </div>
  );
}
