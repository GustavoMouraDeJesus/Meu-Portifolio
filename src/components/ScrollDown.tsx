// src/components/ScrollDown.tsx
import { FiChevronDown } from "react-icons/fi";
import { getLenis } from "../lib/lenis";

export default function ScrollDown() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo("#sobre", { duration: 1.4, offset: 0, easing: (t: number) => 1 - Math.pow(1 - t, 3) });
    } else {
      // fallback
      const el = document.querySelector("#sobre");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a onClick={handleClick} href="#sobre" className="mt-80 z-20 inline-block">
      <FiChevronDown size={48} className="text-white opacity-80 animate-bounce cursor-pointer" />
    </a>
  );
}
