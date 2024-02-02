import axios from "axios";

export const feedsImages = await axios
  .get("https://shetagri-back.onrender.com/feed")
  .then((e) =>
    e.data.map((i) => {
      const uint8Array = new Uint8Array(i.data.data);
      const binaryString = uint8Array.reduce(
        (data, byte) => data + String.fromCharCode(byte),
        "",
      );
      return btoa(binaryString);
    }),
  );

// [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11]
