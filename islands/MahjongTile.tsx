import { useState, useEffect } from "preact/hooks";

const MahjongTile = () => {
  const [tile, setTile] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const start = 0x1F000;
    const end = 0x1F021;
    const randomCodePoint = Math.floor(Math.random() * (end - start + 1)) + start;
    setTile(String.fromCodePoint(randomCodePoint));
  }, []);

  const handleClick = () => {
    setTile(`${String.fromCodePoint(0x1F006)}`);
    setClicked(true);
  };

  return (
    <div class="flex flex-col items-center mb-8">
      <div
        class="cursor-pointer"
        style="font-size:8rem"
        onClick={handleClick}
      >
        {tile}
      </div>
      <div class={`text-6xl ${clicked ? "visible" : "invisible"}`}>
        轟盲牌
      </div>
    </div>
  );
};

export default MahjongTile;
