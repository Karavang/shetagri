import { NavLink } from "react-router-dom";
import  scrollToTop,{ scrollToFeed  } from "../../hooks/scrollToTop";
import iam from "../images/iam.jpg";
import { Feedback } from "./Feedback";

export default function Home({setIsModal}) { 
  window.onload = scrollToTop();
  const openModal = ()=>{
    setIsModal(true)
  }
  return (
    <div className="homestyle">
      <section className="hero heroAboutMe">
        <div className="hero-indiv">
          <h1 className="hero-title">Тетяна Шестак</h1>
          <h3 className="hero-pretitle">ВАШ Психолог</h3>
          <p className="hero-p">
            `Хто хоче - шукає можливості, <br/>Хто не хоче - виправдання` <br /> Сократ
          </p>
        </div><img
            src={iam}
            alt="I am"
            className="iam"
          />
      </section>
      <section className="home-about ">
        <div className="abzac">
          
        
          <span className="fat">
          Я – психолог, сексолог, психотерапевт, супервізор, член Української спілки психотерапевтів.
          </span>
         
         <div className="paragraph">Основний метод моєї роботи - <span className="fat">Транзакційний аналіз</span>. За необхідності  додаю методи схема-терапії, травма-фокусу, психосоматичної релаксації, арт-терапії. Детальніше тут. <NavLink to="/methods">❇️</NavLink></div>
         <div className="paragraph">Маю десятирічний досвід роботи і багато позитивних відгуків моїх клієнтів. Про це можна почитати тут <button onClick={scrollToFeed}>❇️</button></div>
         <div className="paragraph"> Я надаю індивідуальні консультації, а також працюю з парами та сім’ями.  Мої пропозиції покращити життя адресовані дорослим і підліткам.</div>
        
<div className="paragraph">          <span className="fat">Кожна людина</span> - має свою{" "}
          <span className="fat"> унікальну психіку</span>, свою історію життя, свої проблеми. Тому для кожного клієнта я індивідуально підбираю методи роботи.. 💌</div>
          <br />
          <br />
          <span className="fat">Індивідуальна терапія </span>спрямована на:
          <br />
          <ul className="list-before">
            <li>розуміння своїх особистих бажань та потреб</li>
            <li>підвищення самооцінки</li>
            <li>комфортне відчуття себе в цьому світі</li>
            <li>знаходження шляхів заробляти стільки, скільки хочеться</li>
          </ul>{" "}
          <span className="fat">В сімейному консультуванні </span>
          допомагаю відтворити добрі відносини в родині 💞( з партнером, між
          батьками та дітьми )
          <br />
          <br />
          <span className="fat">
            Якщо Ви відчуваєте потребу в професійній допомозі, змінах,
            особистому рості, підвищенні доходу, звертайтесь <span className="button-modal" onClick={openModal}>📲</span>, бо я тут, поруч.
            💛
          </span>
        </div>
      </section>
      <Feedback/>
    </div>
  );
}
