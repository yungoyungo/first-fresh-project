import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ユ</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" />
      </head>
      <body class="bg-gray-700 font-Dot text-gray-100">
        <Component />
      </body>
    </html>
  );
}
