import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { navLinks } from "../../constents/data.js";

const Nav = () => {
  useGSAP(() => {
    const scrollTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    scrollTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      },
    );
  });

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p className="">Velvet Pour</p>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.id}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
