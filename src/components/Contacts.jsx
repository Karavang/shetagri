import { Karavang } from "./Karavang";

export const Contacts = () => {
  const handleLinkClick = (url) => {
    window.location.href = url;
  };
  return (
    <>
      <div className="homestyle contacts-pos">
        ☎️ Консультую на платформах{" "}
        <span onClick={() => handleLinkClick("https://t.me/TetianaPSYholog")}>
          Telegram
        </span>
        ,{" "}
        <span
          onClick={() =>
            handleLinkClick("https://www.instagram.com/tetianapsyholog/")
          }
        >
          Instagram
        </span>
        ,{" "}
        <span onClick={() => handleLinkClick("mailto:shestak.t20@gmail.com")}>
          Email
        </span>
        , ZOOM, Viber, WhatsApp за телефоном{" "}
        <span onClick={() => handleLinkClick("tel:+380500601278")}>
          +38 050 060 1278
        </span>
        <br />
        💸 Вартість консультації обговорюється індівідуально. При оплаті
        одночасно більшій кількості сеансів кейсом – вигідні знижки.
        <br /> 😉 Великі знижки, особливо для постраждалих під час війни
        українців.
        <br />
        🪖 Працюю з військовослужбовцями та їх сім`ями безкоштовно. <Karavang />
      </div>
    </>
  );
};
