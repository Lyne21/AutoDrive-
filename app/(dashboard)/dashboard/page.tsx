import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from '@/components/ui/badge'
import {db} from '@/lib/db'
import {auth} from '@/lib/auth'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



const page = () => {
  return (
    <main>
      <div className='flex flex-col gap-6 md:flex-row  '>
          <Card className='w-full md:w-50 h-30 bg-gray-100 text-black'>
            <CardHeader>
              <CardTitle>Nombre de voiture</CardTitle>
            </CardHeader>
            <CardContent>
              20
            </CardContent>
        
          </Card>

          <Card className='w-full md:w-50 h-30 bg-gray-100 text-black'>
            <CardHeader>
              <CardTitle>Nombre de voiture</CardTitle>
            </CardHeader>
            <CardContent>
              20
            </CardContent>
        
          </Card>

          <Card className='w-full md:w-50 h-30 bg-gray-100 text-black'>
            <CardHeader>
              <CardTitle>Nombre de voiture</CardTitle>
            </CardHeader>
            <CardContent>
              20
            </CardContent>
        
          </Card>

          <Card className='w-full md:w-50 h-30 bg-gray-100 text-black'>
            <CardHeader>
              <CardTitle>Nombre de voiture</CardTitle>
            </CardHeader>
            <CardContent>
              20
            </CardContent>
        
          </Card>
      </div>
      
    </main>
  )
}

export default page
