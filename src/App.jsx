import { Route, Routes, unstable_HistoryRouter } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Home from "./components/Home";

import Methods from "./components/Methods";
import Blog from "./components/Blog";
import { Contacts } from "./components/Contacts";
import { useEffect, useState } from "react";
import ModalCallMe from "./components/ModalCallMe";

function App() {
  const history = unstable_HistoryRouter();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.location.reload();
    });
    return () => {
      unlisten();
    };
  }, [history]);
  const [isModal, setIsModal] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isModal ? "hidden" : "scroll";
  }, [isModal]);
  return (
    <>
      <Header
        isModal={isModal}
        setIsModal={setIsModal}
      />
      <Routes>
        <Route
          index
          element={<Home />}
        />
        <Route
          path="/about"
          element={<AboutMe />}
        />
        <Route
          path="/methods"
          element={<Methods />}
        />
        <Route
          path="/blog"
          element={<Blog />}
        />
        <Route
          path="/contacts"
          element={<Contacts />}
        />
      </Routes>
      {isModal ? <ModalCallMe setIsModal={setIsModal} /> : null}
    </>
  );
}

export default App;
