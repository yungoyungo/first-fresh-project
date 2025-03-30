import { useState, useEffect } from "preact/hooks";

const MahjongTile = () => {
  const [tile, setTile] = useState("");
  const [clicked, setClicked] = useState(false);

  const generateRandomTile = () => {
    const start = 0x1F000;
    const end = 0x1F021;
    const randomCodePoint = Math.floor(Math.random() * (end - start + 1)) + start;
    return String.fromCodePoint(randomCodePoint);
  };

  useEffect(() => {
    setTile(generateRandomTile());
  }, []);

  const handleClick = () => {
    if (clicked) {
      // 再クリック時にランダムな牌を生成
      setTile(generateRandomTile());
      setClicked(false);
    } else {
      // 初回クリック時に特定の牌を表示
      setTile(String.fromCodePoint(0x1F006));
      setClicked(true);
    }
  };

  return (
    <div class="flex flex-col items-center mb-8 select-none">
      <div
        class="cursor-pointer text-[8rem]"
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
