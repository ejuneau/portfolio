import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Eve Juneau's Portfolio" },
    { name: "description", content: "Passionate about creating engaging user experiences." },
    { icon: [
      {
        media: "(prefers-color-scheme: light)",
        rel: "icon",
        url: "./app/welcome/assets/favicon-light.ico",
        href: "./app/welcome/assets/favicon-light.ico",
      },
        {
        media: "(prefers-color-scheme: dark)",
        rel: "icon",
        url: "./app/welcome/assets/favicon-dark.ico",
        href: "./app/welcome/assets/favicon-dark.ico",
      },
    ]
    }
  ];
}

export default function Home() {
  return <Welcome />;
}
