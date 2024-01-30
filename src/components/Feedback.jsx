import { useState } from "react";
import { feedsImages } from "../../hooks/feeds";

export const Feedback = () => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(1);
  const [currentIndex3, setCurrentIndex3] = useState(2);

  const nextSlide = () => {
    setCurrentIndex1((prevIndex) => (prevIndex + 1) % feedsImages.length);
    setCurrentIndex2((prevIndex) => (prevIndex + 1) % feedsImages.length);
    setCurrentIndex3((prevIndex) => (prevIndex + 1) % feedsImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex1(
      (prevIndex) => (prevIndex - 1 + feedsImages.length) % feedsImages.length,
    );
    setCurrentIndex2(
      (prevIndex) => (prevIndex - 1 + feedsImages.length) % feedsImages.length,
    );
    setCurrentIndex3(
      (prevIndex) => (prevIndex - 1 + feedsImages.length) % feedsImages.length,
    );
  };
  return (
    <section className="feeds">
      <h2>Відгуки</h2>
      <div className="carousel">
        <ul>
          <button onClick={prevSlide}>9</button>
          <li>
            <img
              src={feedsImages[currentIndex1]}
              alt={`Slide ${currentIndex1}`}
            />
          </li>
          <li>
            <img
              src={feedsImages[currentIndex2]}
              alt={`Slide ${currentIndex2}`}
            />
          </li>
          <li>
            <img
              src={feedsImages[currentIndex3]}
              alt={`Slide ${currentIndex3}`}
            />
          </li>
          <button onClick={nextSlide}>9</button>
        </ul>
      </div>
    </section>
  );
};
