"use server"
import { auth } from "@/lib/auth"
import { db } from "@/lib/db"

export const newReservation = async (formData: FormData) => {

    const session =  await auth();
    if (!session?.user?.id){
        return {error : "Utilisateur introuvable, Vous devez être déconnectez "}
    }

      const voiture_id = formData.get("voiture") as string
      const dte_debut = formData.get("début-date") as string
      const dte_fin = formData.get("fin-date") as string

      try{
        const existVoiture = await db.voiture.findUnique({
            where:{
                id: voiture_id
            }
        });

        if(!existVoiture){
            return {
                error : "Voiture non existante dans la base"
            }
        } 

        if (existVoiture.disponible === false){
            return{
                error: "Voiture non disponible"
            }
        }

         await db.reservation.create({
        data:{
            userId : session.user.id,
            voitureId : voiture_id,
            startDate : new Date (dte_debut),
            endDate : new Date  (dte_fin),
        },
      })

        return {
            success: "Réservation créer avec succès"
        }
      }catch(error){
        return {
            error : "Erreur lors de la création"
        }
      }

     
}