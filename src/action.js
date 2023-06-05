import { CHANGEFEED,CHANGEGETIN,CHANGEMSG,CHANGENOTI,CHANGEPROFILE, CHANGEREGIST, CHANGENAV } from "./constant"

export const changefeed=(value)=>{
    return{
        type:CHANGEFEED,
        payload:value
    }
}

export const changenoti=(value)=>{
    return{
        type:CHANGENOTI,
        payload:value
}}
export const changemsg=(value)=>{
    return{
        type:CHANGEMSG,
        payload:value
    }
}

export const changeprofile=(value)=>{
    return{
        type:CHANGEPROFILE,
        payload:value
    }
}
export const changegetin=(value)=>{
    return{
        type:CHANGEGETIN,
        payload:value
    }
}
export const changeregist=(value)=>{
    return{
        type:CHANGEREGIST,
        payload:value
    }
}
export const navbarchange=(value)=>{
    return{
        type:CHANGENAV,
        payload:value
    }
}