import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { db } from '@/lib/db';


const page = async () => {

//  const catalogueVoiture = [
//    {
//      id : "1",
//      marque: "Toyota",
//      type: "SUV",
//      tarif: 40000,
//      disponible: true,
//      image: "",
//    },

//    {
//      id: "2",
//      marque: "Tesla",
//      type: "SUV",
//      tarif: 40000,
//      disponible: true,
//      image: "",
//    },

//    {
//      id: "3",
//      marque: "RAV4",
//      type: "SUV",
//      tarif: 40000,
//      disponible: true,
//      image: "",
//    },

//    {
//      id: "4",
//      marque: "Lomborghini",
//      type: "SUV",
//      tarif: 40000,
//      disponible: false,
//      image: "",
//    },
//  ]

const catalogueVoiture = await db.voiture.findMany();
  
  return (
    <div>
      {/* Filter */}
      <div>
        
      </div>

      {/* Ctalogue */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {catalogueVoiture.map ((voiture) =>(
        
        <Card key={voiture.id} className='w-full max-w-sm overflow-hidden flex flex-col justify-between'>

          <CardHeader className="p-0"> 
            <div className="relative w-full  bg-gray-100">
              {/* {voiture.image} */}
            </div>
          </CardHeader>

          <CardContent className="p-4 space-y-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl font-bold">{voiture.marque}</CardTitle>
              <Badge variant={voiture.disponible? "default" : "destructive"} >{voiture.disponible? "Disponible" : "Indisponible"}</Badge>
            </div>
            {/* <CardDescription>{voiture.type}</CardDescription> */}
          </CardContent>

          <CardFooter className="p-4 border-t flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500">Tarif</p>
              <p className="text-lg font-bold text-blue-600">{voiture.prix_location.toLocaleString()} FCFA <span className="text-xs font-normal text-gray-500">/ jour</span></p>
            </div>
            <Button>Voir</Button>
          </CardFooter>

        </Card>
        ))}
      </div>
    </div>
  )
}

export default page
