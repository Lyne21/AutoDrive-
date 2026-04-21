import { PrismaClient } from "@prisma/client";

// On définit une fonction qui crée une nouvelle instance de Prisma
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// On déclare une variable globale pour stocker l'instance Prisma
// Cela permet de ne pas perdre la connexion lors du "Hot Reload" de Next.js
declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

// On récupère l'instance existante ou on en crée une nouvelle
const db = globalThis.prisma ?? prismaClientSingleton();

export { db };

// Si on n'est pas en production, on stocke l'instance dans globalThis
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;