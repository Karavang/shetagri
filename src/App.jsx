import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Home from "./components/Home";
import "./index.scss";
import Methods from "./components/Methods";
import Blog from "./components/Blog";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/methods" element={<Methods />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
