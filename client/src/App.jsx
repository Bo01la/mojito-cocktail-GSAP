import gsap from "gsap";
// imposting gsap plugins
import { ScrollTrigger, SplitText } from "gsap/all";

// registering the plugins
// registering them in the App makes them registered globally
gsap.registerPlugin(ScrollTrigger, SplitText);

import Nav from "./components/Nav";
import Hero from "./components/Hero";

function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <div className="h-dvh" />
    </main>
  );
}

export default App;
