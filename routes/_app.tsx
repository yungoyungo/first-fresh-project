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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=5g" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
