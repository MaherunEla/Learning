import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit/dist/createAction'
import axios from 'axios'
export interface CounterState {
    amount: number
}

const initialState : CounterState = {
    amount: 10,
    
}

export const getUserAccount = createAsyncThunk(
    'account/getUser',
    async (userId: number, thunkAPI) => {
      const {data} = await axios.get(`htttp://localhost:8080/account/${userId}`)
      return data.amount
    }
  )

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers:{  
        increment:(state) =>{
            state.amount +=1
        },
        decrement: (state) => {
            state.amount -= 1
          },
          incrementByAmount: (state, action: PayloadAction<number>) => {
            state.amount += action.payload
          },

    },
    extraReducers:(builder)=>{
        builder.addCase(getUserAccount.fulfilled,(state,action)=>{
            state.amount = action.payload;
            

        }
        );
    }

})

export const {increment, decrement, incrementByAmount} =  accountSlice.actions

export default accountSlice.reducer
