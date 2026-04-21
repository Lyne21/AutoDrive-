"use server"
import { db } from "@/lib/db"
import bcrypt from "bcryptjs"
import { error } from "console";

export const register = async (formData: FormData) => {

     //on récupère les donnée du formulaire
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const firstName = formData.get("first-name") as string;
        const lastName = formData.get("last-name") as string;

        //on scrypt le mot de passe 
        const hashedPassword= await bcrypt.hash(password, 10);

        //on vérifie que l'email est unique 

        const existUser = await db.user.findUnique({
            where:{
                email
            }
        });

        if (existUser){
            return {
                error: "L'utilisateur existe déjà"
                
            }
        } 
        else {
            await db.user.create({
                data:{
                    first_name: firstName,
                    last_name: lastName,
                    password: hashedPassword,
                    email:  email,
                },
            });
        }

    return {
       success: "Compte crée , tu peux maintenant te connecté"
    }
}