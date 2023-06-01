import Banner from "./components/Banner";
import Blog from "./components/Blog";
import DailyDeals from "./components/DailyDeals";
import Hero from "./components/Hero";
import Icons from "./components/Icons";
import MenCollection from "./components/MenCollection";
import Products from "./components/Products";
import WomenCollection from "./components/WomanCollection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Icons />
      <DailyDeals />
      <Banner />
      <MenCollection />
      <WomenCollection />
      <Blog />
      <Products />
    </main>
  );
}
