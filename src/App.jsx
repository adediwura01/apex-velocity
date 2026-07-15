import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import useLenis from "./hooks/useLenis";
import Analytics from "./components/Analytics";
import Features from "./components/Features"
import PlatformPreview from "./components/PlatformPreview";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  useLenis();

  return (
    <div className="app">

      <Navbar />
        <main>
          <Hero />
          <Analytics />
          <Features />
          <PlatformPreview />
          <CTA />
        </main>
      <Footer/>
    </div>
  );
}

export default App;