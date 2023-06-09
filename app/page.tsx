import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Hero from "./components/Hero";
import Icons from "./components/Icons";
import MenCollection from "./components/MenCollection";
import WomanCollection from "./components/WomanCollection";
import Sale from "./components/Sale";

export default function Home() {
  return (
    <main>
      <Hero />
      <Icons />
      <Sale />
      <Banner />
      <MenCollection />
      <WomanCollection />
      <Blog />
    </main>
  );
}
