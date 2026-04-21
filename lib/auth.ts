import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" }, 
  providers: [
    Credentials({
      async authorize(credentials) {
        // Cette fonction s'exécute quand tu appelles signIn("credentials")
        
        const { email, password } = credentials;

        // Sécurité de base : on vérifie que les champs ne sont pas vides
        if (!email || !password) return null;

        // 1. On cherche l'utilisateur dans Neon via Prisma
        const user = await db.user.findUnique({
          where: { email: email as string }
        });

        // 2. Si l'utilisateur n'existe pas OU s'il n'a pas de mot de passe 
        // (cas d'un utilisateur qui s'est inscrit avec Google), on refuse.
        if (!user || !user.password) return null;

        // 3. LA COMPARAISON CRUCIALE
        // bcrypt.compare prend le texte clair ("azerty") et le compare au hash indéchiffrable.
        const isPasswordValid = await bcrypt.compare(
          password as string,
          user.password
        );

        // 4. Le verdict
        // Si c'est valide, on retourne l'objet user. NextAuth va alors créer la session.
        if (isPasswordValid) return user;
        
        // Sinon, on retourne null (accès refusé)
        return null;
      },
    }),
  ],
})