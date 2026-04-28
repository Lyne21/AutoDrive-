import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import {auth} from "@/lib/auth"

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
    const newCar =  await db.voiture.create({
        data:{
            marque : body.marque,
            prix_location: body.prix_location,
        }
    });

    return NextResponse.json(newCar , {status:201})

    } catch (error){
        return NextResponse.json({error:"Erreur lors de la création "} , {status:500})
    }
    
}