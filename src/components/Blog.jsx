import axios from "axios";
import { useEffect, useState } from "react";

const Blog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.baseURL = "https://shetagri-back.vercel.app";
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ul className="posts-list">
        {data.map((post) => {
          return (
            <li key={post._id} className="poststyle">
              <img src={post.pic} alt="" className="image-post" />
              <p>{post.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;
