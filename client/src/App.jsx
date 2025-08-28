import gsap from "gsap";
// importing gsap plugins
import { ScrollTrigger, SplitText } from "gsap/all";

// registering the plugins
// registering them in the App makes them registered globally
gsap.registerPlugin(ScrollTrigger, SplitText);

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <Cocktails />
      <About />
    </main>
  );
}

export default App;
