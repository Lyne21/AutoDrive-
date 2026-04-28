import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

// On exporte par défaut une fonction qui enveloppe la logique d'Auth.js
export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;

  const isAuthPage = nextUrl.pathname.startsWith("/login") || 
                     nextUrl.pathname.startsWith("/register");
  const isDashboardPage = nextUrl.pathname.startsWith("/dashboard");

  // Si on est sur le dashboard sans être connecté -> Login
  if (isDashboardPage && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  // Si on est connecté et qu'on veut aller sur login/register -> Dashboard
  if (isAuthPage && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  // Si tout est ok, on laisse passer la requête
  return NextResponse.next();
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}