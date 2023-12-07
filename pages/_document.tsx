import { getInitColorSchemeScript } from "@mui/material";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  const links = [
    { rel: "icon", href: "/favicon.ico" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    },
  ];

  return (
    <Html>
      <Head>
        {links.map(({ rel, href }) => (
          <link key={href} rel={rel} href={href} />
        ))}
      </Head>

      <body>
        {getInitColorSchemeScript()}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
