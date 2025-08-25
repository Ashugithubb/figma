import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server"
export default withAuth({
  pages: {
    signIn: "/login",
  },

});


export const config = {
  matcher: ["/home","/dashboard"],
};


