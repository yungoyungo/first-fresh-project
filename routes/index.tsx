import Link from "../components/Link.tsx"

export default function Home() {
  return (
    <div class="mx-auto py-20 flex flex-col items-center justify-center bg-gray-700 font-Dot text-gray-100">
      <h1 class="text-2xl">爆速.com</h1>
      <span class=" border-white hover:rotate-[360deg] transition-transform duration-700" style="font-size:8rem">〄</span>
      <div>こ、これはSOS団じゃなくて</div>
      <div>U+3004(旧JISマーク)なんだからねっ！</div>
      <div class="py-4 px-4 flex flex-col items-center justify-center space-y-2">
        <Link url="https://x.com/sslloowwllyy" text="キュウリンゴ垢" pColor="blue-300" />
        <Link url="https://x.com/pasocon_suko" text="ｗｅｂ屋垢" pColor="teal-300" />
        <Link url="https://x.com/slow_slow_down_" text="車垢" pColor="orang-400" />
        <Link url="https://x.com/z_sh_rc" text="ゲーム垢" pColor="blue-300" />
        <Link url="https://x.com/slow_slow_shot" text="写真垢" pColor="blue-300" />
        <Link url="https://note.com/sslloowwllyy/" text="note" pColor="blue-300" />
        <Link url="https://photohito.com/user/photo/166054/" text="photohito" pColor="blue-300" />
        <Link url="https://www.cizucu.com/slow_slow_down_" text="cizucu" pColor="black" />
        <Link url="https://open.spotify.com/playlist/1ccRI6DwKUiXnanK6A5WXO?si=66bcdd1528d8411e" text="Spotifyプレイリスト" pColor="blue-300" />
      </div>
    </div>
  );
}
