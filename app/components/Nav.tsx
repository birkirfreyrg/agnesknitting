import Image from "next/image";
import Link from "next/link";
import Cart from "./CartIcon";
import SearchIcon from "./SearchIcon";

export default function Nav() {
  return (
    <div className="w-full h-20 bg-white shadow-md flex items-center justify-between px-8">
      <Link href="/" className="h-full flex items-center w-1/3">
        <Image
          src="/knittingLogo.webp"
          alt="Agnes Knitting Logo"
          width={80}
          height={80}
          className="object-contain"
        ></Image>
        <h2 className="text-lg">Agnes Knitting</h2>
      </Link>
      <div className="flex justify-center text-lg gap-10 w-1/3 ">
        <Link href="/">home</Link>
        <Link href="/projects">projects</Link>
        <Link href="/about">about</Link>
      </div>
      <div className="flex gap-10 w-1/3 justify-end">
        <SearchIcon />
        <Link href="/cart">
          <Cart />
        </Link>
      </div>
    </div>
  );
}
