import { createAction, createReducer } from '@reduxjs/toolkit'

export interface CounterState {
  points: number
}
const initialState : CounterState = {
    points: 10,
    
}

export const increment = createAction('reword/increment')
export const incrementByAmount = createAction<number>('reword/incrementByAmount')



const rewordReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.points++
    })
    .addCase(incrementByAmount, (state, action) => {
        state.points+=action.payload
      })
})
export default rewordReducer