import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const Hero = () => {
  // const textTimeline = gsap.timeline({ defaults: { duration: 1 } });
  // useGSAP(() => {
  //   textTimeline.from("#first", {
  //     opacity: 0,
  //     ease: "power1.inOut",
  //   });
  //   textTimeline.from("#second", { opacity: 0, ease: "power1.inOut" });
  //   textTimeline.from("#third", { opacity: 0, ease: "power1.inOut" });
  // });
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    // applying some gradient to each letter of "mojito" to make is like 3D
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    // animating the hero title "mojito"
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      ease: "expo.out",
      duration: 1.8,
      stagger: 0.06,
    });

    // animating the hero paragraphs
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      ease: "expo.out",
      duration: 1.8,
      stagger: 0.06,
      // added delay so they are displayed after the hero title
      delay: 1,
    });

    // animating the leaves with scroll

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          // to add smooth animation
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);
  }, []);
  return (
    <section id="hero" className="noisy">
      <h1 className="title">MOJITO</h1>
      <img
        src="/images/hero-left-leaf.png"
        alt="left-leaf"
        className="left-leaf"
      />
      <img
        src="/images/hero-right-leaf.png"
        alt="right-leaf"
        className="right-leaf"
      />
      <div className="body">
        <div className="content">
          {/*md:mt-[calc(20%-40px)]*/}
          <div className="space-y-5 sm:hidden md:block ">
            <p>Cool. Crisp. Classic.</p>
            <p className="subtitle">
              Sip the Spirit <br /> of Summer
            </p>
          </div>
          <div className="view-cocktails">
            <p className="subtitle">
              Every cocktail on our menu is a blend of premium ingredients,
              creative flair, and timeless recipes — designed to delight your
              senses
            </p>
            <a href="#coctails">View coctails</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
