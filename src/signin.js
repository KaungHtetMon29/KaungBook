import React, { useState } from "react";
import 'animate.css'
import './siginin.css'
import usericon from "./imgs/search.png";

function Signin({setgetin,setregist,buff}){
    const [signin,setsignin]=useState({
        name:"",
        pw:""
    });
    const onEmailchange=(e)=>{
        signin.name=e.target.value;
    }
    const onPwchange=(e)=>{
        signin.pw=e.target.value;
    }
    const click=()=>{
        
        fetch('https://node-server-1ag1.onrender.com/signin',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:signin.name,
                pw:signin.pw
            })
        }).then(Response=>Response.json()).then(data=>
            {if(data.status===true){
                setgetin();setregist();buff(data.name,data.feed)
            }else{
                alert("Please check name and password ");window.location.reload(true)
            }
            }
            )
    }
    return(
        <div className="lg:mx-32 lg:text-4xl sm:mx-5 sm:text-lg bg-slate-200 lg:rounded-3xl sm:rounded-xl lg:my-96 sm:my-20 flex flex-col justify-center animate__animated animate__fadeIn " >
            <div className="lg:pb-5 lg:pt-10 lg:px-20 sm:pb-1 sm:pt-5 sm:px-5">
                <form className="flex flex-col lg:py-4 sm:py-2 form" >
                    <label className="grow lg:py-4 lg:px-4 sm:py-2 sm:px-2">Enter Email/Username</label>
                    <input onChange={onEmailchange} placeholder="Your Email address or Username" className="lg:rounded-2xl sm:rounded-xl border-2 lg:py-8 lg:px-6 sm:py-2 sm:px-2"/>
                </form>
                <form className="flex flex-col lg:py-4 sm:py-2 form">
                    <label className="grow lg:py-4 lg:px-4 sm:py-2 sm:px-2">Enter Password</label>
                    <input placeholder="Your Password " onChange={onPwchange} className="lg:rounded-2xl sm:rounded-xl border-2 lg:py-8 lg:px-6 sm:py-2 sm:px-2"/>
                </form>
            </div>
            <div className="flex justify-center text-white">
                <button className="lg:px-10 lg:py-5 bg-blue-400 lg:m-2 lg:rounded-2xl sm:px-6 sm:py-2 sm:m-1 sm:rounded-lg ">Cancel</button>
                <button className="lg:px-10 lg:py-5 bg-blue-400 lg:m-2 lg:rounded-2xl sm:px-6 sm:py-2 sm:m-1 sm:rounded-lg " onClick={click}>Submit</button>
            </div>
            <div className="flex justify-center lg:text-3xl sm:text-md">
                <button className="lg:px-12 lg:py-5 bg-white lg:m-2 lg:rounded-2xl sm:px-5 sm:py-2 sm:my-1 lg:my-2 sm:rounded-lg flex items-center ">
                    <img src={usericon} className="lg:w-12 sm:w-6 lg:pr-4 sm:pr-2"/>
                    Signin with Google
                </button>
            </div>
            <div className="flex justify-center lg:pb-16 sm:pb-8">
                <button onClick={setregist}>Register</button>
            </div>
        </div>
    );
}
export default Signin;