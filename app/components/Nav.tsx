import Image from "next/image";
import Link from "next/link";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { HamburgerMenu } from "./HamburgerMenu";

export default async function Nav() {
  const session = await getServerSession(options);
  return (
    <div className="w-full h-20 bg-white shadow-md flex items-center justify-between px-8">
      <HamburgerMenu />
      <Link href="/" className="h-full flex  items-center w-1/3">
        <Image
          src="/knittingLogo.webp"
          alt="Agnes Knitting Logo"
          width={80}
          height={80}
          className="object-contain"
        ></Image>
        <h2 className="text-lg">Agnes Knitting</h2>
      </Link>
      <div className="flex justify-center md:flex hidden text-lg gap-10 w-/3 ">
        <Link href="/">home</Link>
        <Link href="/projects">projects</Link>
        <Link href="/about">about</Link>
      </div>
      <div className="flex w-1/3 justify-end">
        {session ? (
          <Link
            href="/api/auth/signout"
            className="h-full flex gap-1 items-center w-1/3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
              />
            </svg>
            <h1>Sign out</h1>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
