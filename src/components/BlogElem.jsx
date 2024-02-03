import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const BlogElem = () => {
  const { id } = useParams();
  const [text, setText] = useState("");

  useEffect(() => {
    async function getText() {
      try {
        const response = await axios.get(
          `https://shetagri-back.onrender.com/${id}`,
        );
        console.log(response.data);
        setText(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getText();
  }, [id]);

  return <pre className="text-in-blog posttextstyle">{text}</pre>;
};
