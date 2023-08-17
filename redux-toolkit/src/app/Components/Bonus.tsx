import React from 'react'
import { useAppDispatch, useAppSelector } from '@/services/redux/store';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { increment } from '../../services/redux/slices/bonusSlice';
const Bonus = () => {
    const dispatch = useAppDispatch();
    const points = useAppSelector(state=>state.bonus.points);  
  return (
    <div>
        <h4>
            Bonus Component
        </h4>
        <h3>
            Total point : {points}
        </h3>
        <button onClick={()=>dispatch(increment())}>Increment+</button>
    </div>
  )
}

export default Bonus