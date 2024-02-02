import axios from "axios";

export const feedsImages = axios
  .get("https://shetagri-back.onrender.com/feed")
  .then((response) =>
    response.data.map((item) => {
      const uint8Array = new Uint8Array(item.data.data);
      const binaryString = uint8Array.reduce(
        (data, byte) => data + String.fromCharCode(byte),
        "",
      );
      return btoa(binaryString);
    }),
  )
  .catch((error) => {
    console.error("Error fetching or processing data:", error);
    throw error; // Re-throw the error if needed
  });
