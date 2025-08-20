import Hero from "../components/Hero";
import About from "../components/About";
import Contents from "../components/Contents";
import Experience from "../components/Experience";
import AllCategories from "../components/AllCategories";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Contents />
      <Experience />
      <AllCategories />  {/* ✅ New unified gallery */}
      <Contact />
    </>
  );
}
