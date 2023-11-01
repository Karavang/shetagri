import axios from "axios";
import { useEffect, useState } from "react";
import scrollToTop from "../../hooks/scrollToTop";
import loadingGif from "../images/loading.gif";
const Blog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  window.onload = scrollToTop();
  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.baseURL = "https://shetagri-back.onrender.com";
        const response = await axios.get("/");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="gifPos">
        <img
          className="loadingGif"
          src={loadingGif}
          alt="Loading"
        />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ul className="posts-list">
        {data.map((post) => {
          return (
            <li
              key={post._id}
              className="poststyle"
            >
              <ul className="blog-post">
                <li>
                  <img
                    src={post.pic}
                    alt=""
                    className="image-post"
                  />
                </li>
                <li>
                  <p>{post.text}</p>
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;
