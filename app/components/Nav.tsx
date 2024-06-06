import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="w-full h-20 bg-white shadow-md flex items-center justify-between px-4">
      <Link href="/" className="h-full flex">
        <Image
          src="/knittingLogo.webp"
          alt="Agnes Knitting Logo"
          width={500}
          height={300}
          className="h-full w-full object-contain"
        ></Image>
      </Link>
      <div className="flex gap-6">
        <Link href="/">home</Link>
        <Link href="/shop">shop</Link>
        <Link href="/projects">projects</Link>
        <Link href="/about">about</Link>
      </div>
      <div className="flex gap-6">
        <div>search</div>
        <Link href="/cart">cart</Link>
      </div>
    </div>
  );
}
