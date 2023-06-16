import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Hero from "./components/Hero";
import Icons from "./components/Icons";
import MenCollection from "./components/MenCollection";
import Products from "./components/Products";
import Tabs from "./components/Tabs";
import Testy from "./components/Testy";
import WomenCollection from "./components/WomanCollection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Icons />
      <Tabs />

      <Banner />

      <MenCollection />
      <WomenCollection />
      <Blog />
    </main>
  );
}
