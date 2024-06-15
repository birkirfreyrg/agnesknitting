import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const adminEmails = ["birkirgudbjartsson@gmail.com"];

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (
        user.email === "birkirgudbjartsson@gmail.com" ||
        user.email === "agnesjohanns@gmail.com"
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
