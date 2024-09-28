import Image from "next/image";
import "../styles/flow.css";

const icons = [
  "go",
  "python",
  "pytorch",
  "django",
  "flask",
  "rust",
  "tauri",
  "js",
  "ts",
  "react",
  "nextjs",
  "angular",
  "nodejs",
  "vite",
  "c",
  "neovim",
  "ubuntu",
  "docker",
  "vscode",
  "cpp",
  "cloudflare",
  "tailwind",
];

const li = icons.map((icon, idx) => (
  <li className="scroll-infinity__item px-1" key={idx}>
    <Image
      src={"https://skillicons.dev/icons?i=" + icon}
      width={70}
      height={70}
      alt=""
    />
  </li>
));
export default function Flow() {
  return (
    <section className="h-[30vh] flex items-center">
      <div className="overflow-hidden flex">
        <ul className="flex animate-scroll-infinity whitespace-nowrap">{li}</ul>
        <ul className="flex animate-scroll-infinity whitespace-nowrap">{li}</ul>
      </div>
    </section>
  );
}
