// if you see next-auth and want id  when user send a request also send id  
// next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string; // Add the 'id' field to the User type
  }

  interface Session {
    user: {
      id: string; // Ensure 'id' is part of the session.user
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
