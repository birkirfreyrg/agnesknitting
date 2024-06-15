import Nav from "@/app/components/Nav";
import { options } from "../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import UserCard from "../../components/UserCard";

export default async function page() {
  const session = await getServerSession(options);

  return (
    <>
      <Nav />
      {session ? (
        <>
          <UserCard user={session?.user} />
          <div className="flex w-full h-screen shadow-lg border">
            <div className="w-1/5 border shadow-md p-2">
              <p>Home Page</p>
              <p>Projects</p>
              <p>About</p>
            </div>
            <div className="w-4/5 border shadow-sm p-2">
              <h1>Eitthvað kúl...</h1>
            </div>
          </div>
        </>
      ) : (
        <h1>Not Logged in</h1>
      )}
    </>
  );
}
