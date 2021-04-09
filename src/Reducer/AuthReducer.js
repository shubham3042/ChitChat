import {AUTH_USER} from '../Action/ActionTypes';
const INITIAL_STATE={
    username:null
}
const AuthReducer=(state=INITIAL_STATE,action)=>{
    let name=state.username;
    switch(action.type){    
        case AUTH_USER:
            return {...state,username:action.data}
        default:
            return state
    }
}
export default AuthReducer;