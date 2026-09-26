import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Eve Juneau's Portfolio" },
    { name: "description", content: "Passionate about creating engaging user experiences." },
    {
      name: "theme-color",
      content: "#EEE7D7",
      media: "(prefers-color-scheme:light)"
    },
    {
      name: "theme-color",
      content: "#2E2F2F",
      media: "(prefers-color-scheme:dark)"
    }
  ];
}

export default function Home() {
  return <Welcome />;
}
