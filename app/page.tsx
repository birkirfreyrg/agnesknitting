import FeaturedItem from "./components/FeaturedItem";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="">
        <FeaturedItem />
      </div>
    </>
  );
}
