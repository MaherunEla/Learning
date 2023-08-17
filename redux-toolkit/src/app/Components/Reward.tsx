import React from 'react'
import { useAppDispatch, useAppSelector } from '@/services/redux/store';
import { increment, incrementByAmount } from '@/services/redux/reducers/reword';

const Reword = () => {
    const dispatch = useAppDispatch();
    const points = useAppSelector(state=>state.reword.points);  
  return (
    <div>
        <h4>
            Reword Component
        </h4>
        <h3>
            Total point : {points}
        </h3>
        <button onClick={()=>dispatch(increment())}>Increment+</button>
        <button onClick={()=>dispatch(incrementByAmount(6))}>incrementByAmount+</button>
    </div>
  )
}

export default Reword