"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from '@/components/ui/badge'
import { login } from '@/actions/login'

import { db } from "@/lib/db"


const Login = () => {

    const handleLogin  = async (formData : FormData) => {
        const result = await login (formData)
        if(result?.success){
           alert( result.success)
        }
    }


  return (
    <main className=' w-full min-h-screen flex items-center justify-center bg-gray-50 p-4'>
        <div className='w-full max-w-md border rounded-2xl p-6 bg-white'>
                {/* Logo or titlte */}
                <div className='flex justify-center mb-4 font-bold'>
                    Autodrive
                </div>
        
                {/* en tête */}
                <div className='w-full mb-4'>
                    <div className='flex gap-2 '>
                    <h1 className='font-bold'>Bon retour</h1> 
                    </div>
                    <div>Connectez-vous à votre compte</div>
                </div>

            {/* Form */}
                    <form action={handleLogin} className='flex flex-col gap-4'>
                        
            
                        <div className='flex flex-col gap-4'>
                             <Label>Adresse Email</Label>
                                <Input
                                    type='email'
                                    placeholder='email@gmail.com'
                                    name='email'
                                    required
                                    
                                />
            
                                 <Label>Mot de passe</Label>
                                <Input
                                    type='password'
                                    placeholder='......'
                                    name='password'
                                    required
                                    
                                />
                        <div className='flex justify-end'>
                            <a href="/forgot-password" className='text-blue-700'>Mot de passe oublié?</a>
                        </div>
                                
                                <Button className='w-full' type='submit'>Se connecter</Button>
                        </div>
                        
                    </form>
            

        </div>
    </main>
  )
}

export default Login
