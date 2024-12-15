import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        axios.defaults.baseURL = "https://shetagri-back.onrender.com/shetagri";
        const response = await axios.get("/");
        console.log(response);
        const revertedData = response.data.reverse();
        setData(revertedData);

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
          const uint8Array = new Uint8Array(post.data?.data);
          const binaryString = uint8Array.reduce(
            (data, byte) => data + String.fromCharCode(byte),
            "",
          );
          const base64String = btoa(binaryString);
          return (
            <li
              key={post._id}
              className="poststyle"
            >
              <Link to={`${post._id}`}>
                <img
                  src={`data:image/jpeg;base64,${base64String}`}
                  alt=""
                  className="image-post"
                />
                <h2>{post.title}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;
