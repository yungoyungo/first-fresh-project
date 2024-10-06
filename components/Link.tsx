import { h } from "preact";

interface LinkProps {
  url: string;
  text: string;
  pColor: string;
}

export default function Link({ url, text, pColor }: LinkProps) {
  // const bgColor = `bg-${pColor}`;

  return (
    <a href={url} target="_blank">
      <div class="min-w-48 p-4 text-center border-b-2 hover:bg-gray-500 hover:text-white transition">
        {text}
      </div>
    </a>
  );
}
