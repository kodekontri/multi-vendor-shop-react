import { SETUSER } from "../actions/user/types";

const INITIAL_STATE = {
    username:'',
    email:''
}

const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case SETUSER:
            const user = action.payload
            return {...state, ...user}
        default:
            return state
    }
}

export default userReducer