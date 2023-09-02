import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex gap-10'>
       
            <Link href="/SuperHeros">
            <button>
                SupperHero
            </button>
            </Link>
            <Link href="/RQSupperHeros">
            <button>
                RQSupperHero
            </button>
            </Link>
    </div>
  )
}

export default Navbar