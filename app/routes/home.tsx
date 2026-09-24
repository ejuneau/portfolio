import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Eve Juneau's Portfolio" },
    { name: "description", content: "Welcome to React Router!" },
    { icon: [
      {
        media: '(prefer-color-scheme:light)',
        url: '/public/favicon-light.ico',
        href: '/public/favicon-light.ico',
      },
      {
        media: 'prefer-color-scheme:dark)',
        url: '/public/favicon-dark.ico',
        href: '/public/favicon-dark.ico',
      }
    ]
    }
  ];
}

export default function Home() {
  return <Welcome />;
}
