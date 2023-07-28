// import NextAuth from "next-auth/next";
// // import { OAuthConfig } from "next-auth/providers";
// import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),

//     // FacebookProvider({
//     //   clientId: process.env.FACEBOOK_CLIENT_ID as string,
//     //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
//     // })
//   ],
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import { authOptions } from "@/app/api/utils/authOptions";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };