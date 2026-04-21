

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Avatar } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {db} from "@/lib/db"

const Testui = async() => {
    console.log("Coté serveur:", process.env.DATABASE_URL);
    console.log("Coté client:", process.env.NEXT_PUBLIC_API_URL);


//on récuère la liste des users 
const users= await db.user.findMany();

//on récupère les voiture disponible
const isDisponible = await db.voiture.findMany({
  where: {
    disponible: true,
  },
});

  return (
    <div >
        <Label>Accept variant</Label>
       <Badge variant={'destructive'}>Default</Badge>
       <Input  type='yo'  className='w-20'/>
       <Card className="w-\[350px\]">
      <CardHeader>
        <CardTitle>Titre de la carte</CardTitle>
        <CardDescription>Un petit texte de description ici.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>C'est ici que tu mets ton contenu principal (formulaire, texte, images).</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Annuler</Button>
        <Button>Valider</Button>
      </CardFooter>
    </Card>
    
        
        <h1>Liste des utilisateur</h1>

        <ul>
          {users && users.map((user) => (
              <li key={user.id} > {user.last_name} {user.first_name}</li>
          ))}
          
        </ul>


        <h1>Les voitures disponible</h1>
        {isDisponible.length===0? (
            <p>Aucune voiture disponible</p>
        ): (
          <div>
            {isDisponible.map((voiture) => (
              <div key={voiture.id}>
              <p>{voiture.marque} {voiture.prix_location.toString()} </p>
              
              </div>
            ))}
            
          </div>
        )}
        
    </div>
  )
}

export default Testui
