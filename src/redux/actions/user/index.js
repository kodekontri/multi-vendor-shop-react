import {SETUSER} from './types'

export const setUser = (user)=>({
    type:SETUSER,
    payload:user
})