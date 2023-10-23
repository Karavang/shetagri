import { useTranslation } from "react-i18next";


export default function Home() { 
  const { t } = useTranslation();


  return (
    <div className="homestyle">
      <div className="hero heroHome">
        <div className="hero-indiv">
          <h1 className="hero-title">Тетяна Шестак</h1>
          <h3 className="hero-pretitle">ВАШ Психолог</h3>
          <p className="hero-p">
            `Дорогу осилить пішки ідучий` <br /> Луций Анней Сенека
          </p>
        </div>
      </div>
      <div className="home-about ">
      <h2 className="flexator home-hi">🙌 Вітаю вас, шановні друзі!</h2>
        <pre className="pre-formatted-text">
       {t('home')}
        </pre>
      </div>
    </div>
  );
}
