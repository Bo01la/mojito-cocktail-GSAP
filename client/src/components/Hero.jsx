// note, we used ffmpeg (downloaded and installed it) to make the output.mp4 video to make the scroll animation
// a little bit smoother when we scroll using a mouse
// this makes each frame of the video is a key-frame in order for GSAP to control it
// the command is (ffmpeg -i input.mp4 -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output.mp4) and it is to be used in the videos directory

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();
  // check if we are in mobile device using the useMediaQuery from react-responsive package
  const isMobile = useMediaQuery({ maxWidth: 767 });

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

    // defining the start and end values based on the screen size we defined using useMediaQuery()
    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    // creating timeline for the video:
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        // to pin the video on the screen while scrolling:
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      // tie the video play to the scroll trigger by GSAP
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []);

  return (
    <>
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

      <div className="video absolute inset-0 ">
        <video
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
          ref={videoRef}
        />
      </div>
    </>
  );
};
export default Hero;
