import {combineReducers } from "redux";
import { CHANGENAV,CHANGEFEED,CHANGENOTI,CHANGEMSG, CHANGEPROFILE,CHANGEGETIN,CHANGEREGIST } from "./constant";

const initialState={
    getin:false,
    regist:false,
    feeds:true,
    noti:false,
    msg:false,
    profile:false,
    navenable:false
}

const rootReducer=(state=initialState,action)=>{
    switch(action.type){
        case CHANGEFEED:
            
            return{...state,
            feeds:action.payload
        };
        case CHANGENOTI:return{
            ...state,noti:action.payload
        };
        case CHANGEMSG:return{
            ...state,msg:action.payload
        };
        case CHANGEPROFILE:return{
            ...state, profile:action.payload
        };
        case CHANGEGETIN:return{
            ...state, getin:action.payload
        };
        case CHANGEREGIST:return{
            ...state, regist:action.payload
        };
        case CHANGENAV:return{
            ...state, navenable:action.payload
        };
        default:return{state}
    }
}
// const Noti =(state=initialState,action={})=>{
    
//     switch (action.type){
        
//         default:return{state}
//     }
// }


export default rootReducer;