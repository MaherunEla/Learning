import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import axios from 'axios'
//action name constants
const init = 'init';
const inc = 'increment';
const dec = 'decrement';
const incByAmt = 'incrementByAmount';
//store
const store = createStore(reducer,applyMiddleware(logger.default,thunk.default));

const history = [];


//reducer

 function reducer(state={amount:1},action) {


    switch(action.type){
        case init:
            return {amount: action.payload};
        case inc:
            return {amount: state.amount+1};
        case dec:
            return {amount: state.amount-1};
        case incByAmt:
            return {amount: state.amount + action.payload};
        default:
            return state;

    
    

    }
//     if(action.type === inc){
//        //immutability
//         return {amount: state.amount+1}
//     }
//     if(action.type === dec){
//         //immutability
//          return {amount: state.amount - 1}
//      }
//      if(action.type === incByAmt){
//         //immutability
//          return {amount: state.amount + action.payload}
//      }
//     return state
 }

//global state

// store.subscribe(()=>{
//     history.push(store.getState())
//     console.log(history)
// })

//async api call
// async function getUser(){
//     const {data} = await axios.get('http://localhost:3000/account/1')
//     console.log(data)
// }

//getUser()

//Action creators
async function initUser(dispatch,getState){
    const {data} = await axios.get('http://localhost:3000/account/1')
    dispatch ({type:init, payload: data.amount})
}
function increment(){
    return {type:inc}
}
function decrement(){
    return {type:dec}
}
function incrementByAmount(value){
    return {type:incByAmt,payload:value}
}
setInterval(()=>{
    store.dispatch(initUser);

},2000);
