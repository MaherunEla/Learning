"use client"
import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'
import { Superhero } from '../../../types'

const fetchSupperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')

}
const page = () => {
    const {isLoading, data, isError, error, isFetching} = useQuery('super-heros',fetchSupperHeroes)

    if(isLoading)
    {
      return <h2>Loading...</h2>

    }
    console.log({isLoading,isFetching})
    if(isError){
      return <h2>{error?.message}</h2>
    }
   
  return (
    <div>
        <h2>RQ Super Heros Page</h2>
        {data?.data.map((hero:Superhero)=>{
            return <div key={hero.name}>{hero.name}</div>
        })}
    </div>
  )
}

export default page