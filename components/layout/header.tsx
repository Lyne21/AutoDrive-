"use client"
import React from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export const Header = ({ user }: { user: any }) => {
 

  return (
    <header className='h-16 flex items-center justify-between px-6 border-b bg-white text-black w-full'>
        {/* Titre à gauche */}
        <div className="font-bold text-lg">
            Tableau de bord
        </div>

        {/* Infos utilisateur à droite */}
        <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9 border">
                <AvatarFallback className="bg-black text-white text-xs">
                    U
                </AvatarFallback>
            </Avatar>
            
            <div className="flex flex-col items-end">
                <span className="text-sm font-semibold leading-none">
                    {user?.first_name} {user?.last_name}
                </span>
                
            </div>
            
            
        </div>
    </header>
  )
}