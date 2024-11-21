import CredentialsProvider from "next-auth/providers/credentials";
import { User as NextAuthUser, Session as NextAuthSession } from "next-auth";
import { JWT } from "next-auth/jwt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "john Smith", required: true },
        phone: { label: "PhoneNo", type: "tel", placeholder: "1234567899", required: true },
        password: { label: "Password", type: "password", required: true },
        email: { label: "Email", type: "email", placeholder: "example@gmail.com", required: true },
      },
      async authorize(credentials): Promise<NextAuthUser | null> {
        try {
          if (!credentials) {
            console.error("Credentials are not provided");
            return null;
          }

          const { username, email, password, phone } = credentials;

          // Demo: Mock user validation (Replace with your actual validation logic)
          if (email === "example@gmail.com" && password === "password123" && phone === "9001686460") {
            return {
              id: "1",
              name: username || "John Doe",
              email: email,
              phone:phone   
            } as NextAuthUser;
          } else {
            console.error("Invalid credentials");
            return null;
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async session({ session, token }: { session: NextAuthSession; token: JWT }) {
      if (token && session.user) {
        session.user.id = token.sub!;
      }
      return session;
    },
  },
};
