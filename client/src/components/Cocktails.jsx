import { cocktailLists, mockTailLists } from "../../constents/data.js";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Cocktails = () => {
  useGSAP(() => {
    const leavesTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    leavesTimeline
      .from("#c-left-leaf", { x: -100, y: 100 })
      .from("#c-right-leaf", { x: 100, y: 100 });
  });
  return (
    <section id="cocktails" className="noisy">
      <img
        src="/images/cocktail-left-leaf.png"
        alt="left-leaf"
        id="c-left-leaf"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="right-leaf"
        id="c-right-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2>Most Popular Cocktails:</h2>
          <ul>
            {cocktailLists.map(({ name, country, price, detail }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                </div>
                <div className="flex gap-2">
                  <p>
                    {country} | {detail}
                  </p>
                  <span>{price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Most Loved mocktails:</h2>
          <ul>
            {mockTailLists.map(({ name, country, price, detail }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                </div>
                <div className="flex gap-2">
                  <p>
                    {country} | {detail}
                  </p>
                  <span>{price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Cocktails;
