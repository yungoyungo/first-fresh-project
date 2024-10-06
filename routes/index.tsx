import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Link from "../components/Link.tsx"

export default function Home() {
  return (
    <div class="h-dvh mx-auto my-auto flex flex-col items-center justify-center space-y-4 font-Dot">
      <div class="py-4 px-4 flex flex-col items-center justify-center space-y-4">
        <div>ヒｗｉヒヒｅｒｓ</div>
        <Link url="https://x.com/sslloowwllyy" text="キュウリンゴ" pColor="blue-300" />
        <Link url="https://x.com/pasocon_suko" text="ｗｅｂ屋" pColor="teal-300" />
        <Link url="https://x.com/slow_slow_down_" text="車" pColor="orang-400" />
        <Link url="https://x.com/z_sh_rc" text="ゲーム" pColor="blue-300" />
      </div>
    </div>
  );
}
