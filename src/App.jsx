import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Blog from "./components/Blog";
import { BlogElem } from "./components/BlogElem";
import { Contacts } from "./components/Contacts";
import Header from "./components/Header";
import Home from "./components/Home";
import Methods from "./components/Methods";
import ModalCallMe from "./components/ModalCallMe";

function App() {
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = isModal ? "hidden" : "scroll";
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
          element={<Home setIsModal={setIsModal} />}
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
          path="/contacts"
          element={<Contacts />}
        />
        <Route
          path="/blog"
          element={<Blog />}
        />
        <Route
          path="/blog/:id"
          element={<BlogElem />}
        />
      </Routes>
      {isModal ? <ModalCallMe setIsModal={setIsModal} /> : null}
    </>
  );
}

export default App;
