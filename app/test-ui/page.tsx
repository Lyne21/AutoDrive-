

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

const Testui = () => {
    console.log("Coté serveur:", process.env.DATABASE_URL);
    console.log("Coté client:", process.env.NEXT_PUBLIC_API_URL);


  return (
    <div >
        <Label>Accept variant</Label>
       <Badge variant={'destructive'}>Default</Badge>
       <Input  type='yo'  className='w-20'/>
       <Card className="w-[350px]">
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
    
        

    </div>
  )
}

export default Testui
