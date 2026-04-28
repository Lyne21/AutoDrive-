"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const page = () => {
  return (
    <div className='w-full min-h-screen md:flex items-center justify-center bg-gray-100 p-4'>
      <div className=' border rounded-2xl bg-gray-50 text-black p-6'>
        <form action="" className='flex flex-col gap-4'>
        <Label>Entrer votre email</Label>
        <Input
            type='email'
            name='password-reset'
            placeholder='email@gmail.com'
            required
        />
        <Button className='w-full' >
            Envoyer
        </Button>
        </form>
      </div>
    </div>
  )
}

export default page
