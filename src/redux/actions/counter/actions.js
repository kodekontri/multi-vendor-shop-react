import { INCREMENT, DECREMENT } from "./types";

export const increaseCounter = (value = 1)=>({
    type:INCREMENT,
    payload: value
})

export const decreaseCounter = (value = 1)=>({
    type:DECREMENT,
    payload: value
})