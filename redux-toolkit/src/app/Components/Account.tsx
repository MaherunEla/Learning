"use client"
import React, {useState} from 'react'
import { decrement, increment, incrementByAmount ,getUserAccount} from '../../services/redux/slices/accountSlice';
import { useAppDispatch, useAppSelector } from '@/services/redux/store';
const Account = () => {
    const [value,setValue] = useState(0);
    const dispatch = useAppDispatch();
    const amount = useAppSelector(state=>state.account.amount);  
  return (
    <div>
        <h3>Account Component</h3>
        <h2>Amount:${amount}</h2>

        <button onClick={()=>dispatch(increment())}>Increament+</button>
        <button onClick={()=>dispatch(decrement())}>Decreament-</button>
        <input type="text" onChange={(e)=>setValue(+e.target.value)}></input>
        <button onClick={()=>dispatch(incrementByAmount(value))}>Increament</button>
        <button onClick={()=>dispatch(getUserAccount(1))}>Get User</button>
    </div>
  )
}

export default Account