import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import {auth} from "@/lib/auth"
import {voitureSchema} from "@/lib/zod"

export async function GET(request:Request){
    
    //extraire les paramètre de l'url , transformer l'url en objet facile à utiliser
    const {searchParams} = new URL (request.url);

    const marque = searchParams.get("marque");
    const disponible = searchParams.get("disponible");

    const voitures = await db.voiture.findMany({
        where: {
            marque : marque || undefined ,
            disponible : disponible === null ? undefined : disponible === "true"
        }
    })

    return NextResponse.json(voitures);
}


export async function POST (request:Request) {
    const session = await auth();

    if (!session || (session.user as any).role !== "ADMIN"){
        return NextResponse.json({error:"Accès autorisé a ADMIN uniquement "} , {status:401})
    }

    
    try {
        const body = await request.json ();
        const validation = voitureSchema.safeParse(body)

        //Vérification de la validation  (si zod n'est pas correcte ou bien vérifié)
        if (!validation.success){
            return NextResponse.json({error:"Erreur lors des entrés"} , {status:400})
        } else {
            return NextResponse.json({message:"Voiture créer"})
        }

    const newCar =  await db.voiture.create({
        data:{
            marque : body.data.marque,
            prix_location: body.data.prix_location,
        }
    });

    return NextResponse.json(newCar , {status:201})

    } catch (error){
        return NextResponse.json({error:"Erreur lors de la création "} , {status:500})
    }
    
}