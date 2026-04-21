"use server"
import { signIn } from "@/lib/auth";
import { db } from "@/lib/db"
import bcrypt from "bcryptjs"
import { AuthError, CredentialsSignin } from "next-auth";


export const login = async (formData: FormData) =>{

    const email = formData.get ("email") as string;
    const password = formData.get ("password") as string;

    try{
        await signIn ("credentials" ,{
            email,
            password,
            redirectTo: "/dashboard"
        })
    }catch(error){
        if (error instanceof AuthError){
            if(error.type === "CredentialsSignin"){
                return {error:"Email ou mot de passe incorrect"}
            }
        }
        throw error;  //important pour que la redirection se fasse 
    }
   return{
     success: "Connexion réussie"
   }
};