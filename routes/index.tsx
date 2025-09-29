import Link from "../components/Link.tsx"
import MahjongTile from "../islands/MahjongTile.tsx";

export default function Home() {
  return (
    <div class="mx-auto flex flex-col items-center justify-center">
      {/* <h1 class="text-2xl">爆速.com</h1> */}
      <div>
        <MahjongTile />
      </div>
      <div class="py-4 px-4 flex flex-col items-center justify-center space-y-2">
        <Link url="https://x.com/sslloowwllyy" text="本垢" pColor="blue-300" />
        <Link url="https://x.com/pasocon_suko" text="ｗｅｂ屋垢" pColor="teal-300" />
        <Link url="https://x.com/slow_slow_down_" text="車垢" pColor="orang-400" />
        {/* <Link url="https://x.com/z_sh_rc" text="ゲーム垢" pColor="blue-300" /> */}
        <Link url="https://x.com/slow_slow_shot" text="写真垢" pColor="blue-300" />
        <Link url="https://note.com/sslloowwllyy/" text="note" pColor="blue-300" />
        <Link url="https://photohito.com/user/photo/166054/" text="photohito" pColor="blue-300" />
        <Link url="https://www.cizucu.com/slow_slow_down_" text="cizucu" pColor="black" />
        <Link url="https://open.spotify.com/playlist/1ccRI6DwKUiXnanK6A5WXO?si=66bcdd1528d8411e" text="でえすき" pColor="blue-300" />
      </div>
    </div>
  );
}
