import scrollToTop from "../../hooks/scrollToTop";
import iam from "../images/iam.jpg";
export default function Home() { 
  window.onload = scrollToTop();
  return (
    <div className="homestyle">
      <section className="hero heroAboutMe">
        <div className="hero-indiv">
          <h1 className="hero-title">Тетяна Шестак</h1>
          <h3 className="hero-pretitle">ВАШ Психолог</h3>
          <p className="hero-p">
            `Хто хоче, шукає можливості, хто не хоче - виправдання` <br /> Сократ
          </p>
        </div>
      </section>
      <section className="home-about ">
        <div className="abzac">
          <img
            src={iam}
            alt="I am"
            className="iam"
          />
          Я –
          <span className="fat">
            {" "}
            психолог, сексолог, психотерапевт, супервізор.
          </span>
          <br />
          Мої пропозиції покращити життя адресовані
          <span className="fat"> дорослим і підліткам</span>
          <br />
          <br /> Терапія спрямована на
          <span className="fat"> індивідуальних</span> клієнтів, а також на
          <span className="fat"> пари та сім’ї.</span>
          <br />
          <br />
          <span className="fat">Кожна людина</span> - має свою{" "}
          <span className="fat"> унікальну психіку</span>, тому для кожного
          клієнта я індивідуально підбираю методи роботи.. 💌
          <br />
          <br />
          <span className="fat">Індивідуальна терапія </span>спрямована на:
          <br />
          <ul className="list-before">
            <li>розуміння своїх особистих бажань та потреб</li>
            <li>підвищення самооцінки</li>
            <li>комфортне відчуття себе в цьому світі</li>
            <li>знаходження шляхів заробляти скільки хочеться</li>
          </ul>{" "}
          <span className="fat">В сімейному консультуванні </span>
          допомагаю відтворити добрі відносини в родині 💞( з партнером, між
          батьками та дітьми )
          <br />
          <br />
          <span className="fat">
            Якщо Ви відчуваєте потребу в професійній допомозі, змінах,
            особистому рості, підвищенні доходу, звертайтесь📲, бо я тут, поруч.
            💛
          </span>
        </div>
      </section>
    </div>
  );
}
