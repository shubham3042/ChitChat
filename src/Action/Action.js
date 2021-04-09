import {AUTH_USER} from './ActionTypes';
export const authuser=(data)=>{
    return{
        type:AUTH_USER,
        data:data
    }
}