"use client"
import React from "react";
import {useState, useEffect} from 'react'
import axios from 'axios'
import { Superhero } from "../../../types";
const page = () => {
  const [isLoading,setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [error,setError] = useState('')

  useEffect(()=>{
    axios.get('http://localhost:4000/superheroes').then((res)=>{
      setData(res.data)
      setIsLoading(false)
    }).catch(error=> {
      setError(error.message)
      setIsLoading(false)
    })
  },[])

  if(isLoading){
    return <h2>Loading..</h2>
  }

  if(error) {
    return <h2>{error}</h2>
  }
  return (
    <div>
    <h2>
      Super Heros Page
    </h2>
    {data.map((hero:Superhero)=>{
      return <div key={hero.name}>{hero.name}</div>
    })

    }
   
  </div>
    
  )
 
};

export default page;
