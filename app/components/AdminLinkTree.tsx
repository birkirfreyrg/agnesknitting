import Link from "next/link";

export default function AdminLinkTree() {
  const linkStyles =
    "text-white mt-1 bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800";

  return (
    <div className="flex flex-col w-1/5 border shadow-md p-2">
      <Link href={"/dashboard"} className={linkStyles}>
        Dashboard
      </Link>

      <Link href={"/dashboard/homepage"} className={linkStyles}>
        Home Page
      </Link>
      <Link href={"/dashboard/projects"} className={linkStyles}>
        Projects
      </Link>
      <Link href={"/dashboard/about"} className={linkStyles}>
        About
      </Link>
    </div>
  );
}
