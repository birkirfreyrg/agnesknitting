import Nav from "@/app/components/Nav";
import { options } from "../../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import UserCard from "../../../components/UserCard";
import AdminLinkTree from "@/app/components/AdminLinkTree";
import AboutPageOptions from "@/app/components/AboutPageOptions";

export default async function page() {
  const session = await getServerSession(options);

  return (
    <>
      <Nav />
      {session ? (
        <>
          <UserCard user={session?.user} />
          <div className="flex w-full h-full shadow-lg border">
            <AdminLinkTree />
            <div className="w-4/5 border shadow-sm p-2">
              <AboutPageOptions />
            </div>
          </div>
        </>
      ) : (
        <h1>Not Logged in</h1>
      )}
    </>
  );
}
