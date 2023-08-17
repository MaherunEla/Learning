"use client"
import Image from 'next/image'
import Account from './Components/Account'
import Bonus from './Components/Bonus'

import { useAppSelector } from '@/services/redux/store'
import Reword from './Components/Reward'


export default function Home() {
 const {account:{amount},bonus:{points}} = useAppSelector(state=>state);    

  return (
    <main>
      <h1>App</h1>
       <h2>Current Amount: {amount}</h2> 
      <h2>Total Bonus:{points}</h2>
      <Account/>
      <Bonus/>
      <Reword/>
     
    </main>
  )
}
