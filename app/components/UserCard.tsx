import Image from "next/image";

type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type Props = {
  user: User;
};

export default function Card({ user }: Props) {
  //console.log(user);

  const greeting = user?.name ? (
    <div className="flex items-center">Hello {user?.name}!</div>
  ) : null;

  const emailDisplay = user?.email ? (
    <div className="flex items-center"> {user?.email}</div>
  ) : null;

  const userImage = user?.image ? (
    <Image
      className="border border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full"
      src={user?.image}
      width={30}
      height={30}
      alt={user?.name ?? "Profile Pic"}
      priority={true}
    />
  ) : null;

  return (
    <section className="flex items-center gap-2 p-2 ">
      <div>{userImage}</div>
      <div>
        {greeting}
        {/*emailDisplay*/}
      </div>
    </section>
  );
}
