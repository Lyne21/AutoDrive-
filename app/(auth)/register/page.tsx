"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from '@/components/ui/badge'
import { register } from '@/actions/register'


const Register = () => {

    const handleRegister = async (formData : FormData ) => {
        
        const result = await register (formData);

        if (result?.error){
            alert(result.error)
        }

        if (result?.success){
            alert(result.success)
        }
    };

  return (
    <main className='w-full min-h-screen  flex items-center justify-center bg-gray-50 p-4'>
        {/* Card du formulair */}
        <div className='w-full max-w-md border rounded-2xl p-6 bg-white'>
        {/* Logo or titlte */}
        <div className='flex justify-center mb-4 font-bold'>
            Autodrive
        </div>

        {/* en tête */}
        <div className='w-full mb-4'>
            <div className='flex gap-2 '>
            <h1 className='font-bold'>Créer un compte </h1> <Badge className='bg-blue-50 text-blue-950 dark:bg-blue-950 dark:text-blue-300 mt-1'>Gratuit</Badge>
            </div>
            <div>Louez ou achetz en un cli</div>
        </div>

       {/* Form */}
        <form action={handleRegister} className='flex flex-col gap-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div>
                <Label>Nom</Label>
                <Input
                    type='text'
                    placeholder='Nom'
                    name='last-name'
                    required
                />
                </div>

                <div>
                     <Label>Prénom</Label>
                    <Input
                        type='text'
                        placeholder='prenom'
                        name='first-name'
                        required
                        
                    />
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                 <Label>Email</Label>
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

                     <Label>Confirmer mot de passe</Label>
                    <Input
                        type='password'
                        placeholder='......'
                        name='confirm-password'
                        required
                        
                    />

                    <Button 
                        type='submit'
                        className='w-full' 
                    >
                        Créer mon compte
                    </Button>
            </div>
            <div className='flex justify-center'>
                Déjà un compte? <a href="/login" className='text-blue-700'>Connectez-vous</a>
            </div>
        </form>

        </div>
    </main>
  )
}

export default Register
