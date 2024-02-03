import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Home from "./components/Home";
import { BlogContext } from "./components/BlogContext";
import { useEffect, useState } from "react";
import Blog from "./components/Blog";
import { Contacts } from "./components/Contacts";
import Methods from "./components/Methods";
import ModalCallMe from "./components/ModalCallMe";
import { BlogElem } from "./components/BlogElem";

function App() {
  const [isModal, setIsModal] = useState(false);
  const [postText, setPostText] = useState([]);
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
          element={<Blog setPostText={setPostText} />}
        />
        <Route
          path="/blog/:id"
          element={<BlogElem postText={postText} />}
        />
      </Routes>
      {isModal ? <ModalCallMe setIsModal={setIsModal} /> : null}
    </>
  );
}

export default App;
