import { useState, useEffect } from "preact/hooks";

const MahjongTile = () => {
  const [tile, setTile] = useState("");

  useEffect(() => {
    const start = 0x1F000;
    const end = 0x1F021;
    const randomCodePoint = Math.floor(Math.random() * (end - start + 1)) + start;
    setTile(String.fromCodePoint(randomCodePoint));
  }, []);

  return (
    <div>
      {tile}
    </div>
  );
};

export default MahjongTile;
