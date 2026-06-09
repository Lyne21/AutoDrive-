import {z} from "zod"


export const registerSchema = z.object({
    last_name : z.string().trim().min(1, {message: "Remplissez tous les champs"}),
    first_name : z.string().trim().min(1, {message :"Remplissez tous les champs"}),
    email: z.string().trim().email("Mettez un email valide"),
    password : z.string().trim().min(6,{message: "Ton mot de passe doit contenir au moins six caractères"}),
    confirmed_password : z.string()
}).refine((data)=> data.password === data.confirmed_password, {
    message :"Les mots de passes ne sont pas identique",
    path: ["confirmed_password"],
});


export const voitureSchema = z.object ({
    marque : z.string().trim().min(1),
    prix_location : z.coerce.number({
        invalid_type_error: "Le prix doit être un nombre"
    }).positive(),
    disponible : z.boolean({
        invalid_type_error: "La disponibilité doit être vrai ou fausse"
    }).default(true),
});

export const reservationSchema = z.object({
    voiture_id : z.string({
        required_error: "Veuillez selectionnez un véhicule" 
    }),
    date_debut : z.coerce.date({
        invalid_type_error : "Date invalide"
    }),
    date_fin : z.coerce.date({
        invalid_type_error: "Date invalide"
    })
}).refine((data) => data.date_debut < data.date_fin, {
    message :"La date de fin doit être supérieur à la date de début "
});




// const userSchema = z.object({
//     pseudo : z.string().min(3, {message:"Ton pseudo est trop court champion"}),
//     age : z.coerce.number(),
//     bio : z.string().optional()
// })