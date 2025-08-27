import { useEffect, useState } from "react";

const sections = ["about", "skills", "projects"];

export default function Navbar() {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollY >= el.offsetTop) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav>
      {sections.map((id) => (
        <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </a>
      ))}
    </nav>
  );
}
