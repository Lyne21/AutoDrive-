import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET (request:Request , {params} : {params: Promise < {id:string} >} ){


    try {

        const {id} = await  params;
        const voiture = await db.voiture.findUnique({
        where:{id: id}
    })

        if(!voiture){
            return NextResponse.json({error:"Voiture non trouvé"} , {status:404})
        }
        return NextResponse.json(voiture)
    }catch (error){
        return NextResponse.json({error:"Erreur serveur"} , {status:500})
    }
    
}