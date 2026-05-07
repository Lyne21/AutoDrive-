import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      Mes réservations
      <Link href="/reservation/new">
        <Button>Faire une réservation</Button>
      </Link>
    </div>
  )
}

export default page
