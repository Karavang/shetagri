import { useState } from "react";
import { useParams } from "react-router-dom";

export const BlogElem = ({ postText }) => {
  const { id } = useParams();
  let text;
  const matchingItem = postText.data.filter((e) => e._id === id);
  console.log(matchingItem);
  if (matchingItem) {
    text = matchingItem[0].text;
    console.log(text);
  }

  return <pre className="text-in-blog">{text}</pre>;
};
