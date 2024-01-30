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
    <section
      className="feeds"
      id="feed"
    >
      <h2>Відгуки</h2>
      <div className="carousel">
        <ul>
          <button onClick={prevSlide}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="icon-arrows-feed"
            >
              <path d="M15.422 16.594l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"></path>
            </svg>
          </button>
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
          <button onClick={nextSlide}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="icon-arrows-feed"
            >
              <path d="M8.578 16.594l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"></path>
            </svg>
          </button>
        </ul>
      </div>
    </section>
  );
};
