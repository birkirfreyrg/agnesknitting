import FeaturedItem from "./components/FeaturedItem";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="flex lg:px-52">
        <FeaturedItem />
      </div>
    </>
  );
}
