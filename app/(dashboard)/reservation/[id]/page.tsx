"use client"

import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { newReservation } from '@/actions/reservation'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const page = () => {

    const Reservation = async (formData:FormData) =>{
        const result = await newReservation (formData);
        if(result?.error){
            alert(result.error)
        }
        if(result?.success){
            alert(result.success)
        }
    }


  return (
    <div className=''>
      Faire une vouvelle réservation

      <form action={Reservation} className='mt-10 border-2 rounded-2xl p-8'>
         <div className='flex flex-col gap-4'>

                 <Label>Voiture</Label>
                    <Input
                        type='text'
                        placeholder='Quelle voiture'
                        name='voiture'
                        required
                        
                    />

                    <Label>Date de début</Label>
                    <Input
                        type='Date'
                        placeholder=''
                        name='début-date'
                        required
                        
                    />

                    <Label>Date de fin</Label>
                    <Input
                        type='Date'
                        placeholder=''
                        name='fin-date'
                        required
                        
                    />

                    <Button 
                        type='submit'
                        className='w-full' 
                    >
                        Réserver
                    </Button>
            </div>
      </form>
    </div>
  )
}

export default page
