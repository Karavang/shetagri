export const Karavang = () => {
  const handleLinkClick = (url) => {
    window.location.href = url;
  };
  return (
    <>
      <div className="karavang">
        <a>Розробник сайту</a>{" "}
        <h3 onClick={() => handleLinkClick("https://github.com/Karavang")}>
          Karavang
        </h3>
        <p>2023</p>
      </div>
    </>
  );
};
