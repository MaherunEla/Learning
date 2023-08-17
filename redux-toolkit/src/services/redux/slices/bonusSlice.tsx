import {createSlice,createAction} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit/dist/createAction'

export interface CounterState {
    points: number
}

const initialState : CounterState = {
  points: 0,
    
}
const incrementByAmount = createAction<number>('account/incrementByAmount')

export const bonusSlice = createSlice({
    name: 'bonus',
    initialState,
    reducers:{  
        increment:(state) =>{
            state.points +=1
        },
        

    },
    extraReducers:(builder)=>{
        builder.addCase(incrementByAmount,(state,action)=>{
            if(action.payload >= 100){
                state.points++;

            }
           
        })

    }

})

export const {increment} =  bonusSlice.actions

export default bonusSlice.reducer
