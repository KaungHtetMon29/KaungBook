import React, { useState } from "react";

function Regist({setgetin,setregist,buff}){
    const [register,setregister]=useState({
        email:"",
        name:"",
        pw:""
    });
    const onEmailchange=(e)=>{
        register.email=e.target.value;
    }
    const onUsernamechange=(e)=>{
        register.name=e.target.value;
    }
    const onPwchange=(e)=>{
        register.pw=e.target.value;
    }
    const click=()=>{
        buff(register.name);
        setgetin();
        fetch('http://localhost:3000/register',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:register.email,
                name:register.name,
                pw:register.pw
            })
        })
    }


    return(
        <div className="mx-32 text-4xl bg-slate-200 rounded-3xl my-96 flex flex-col justify-center">
            <div className="pb-5 pt-10 px-20 ">
                <form className="flex flex-col py-4">
                    <label className="grow py-4 px-4">Enter Email</label>
                    <input onChange={onEmailchange} placeholder="Your Email address" className="rounded-2xl border-2 py-8 px-6"/>
                </form>
                <form className="flex flex-col py-4">
                    <label className="grow py-4 px-4">Enter Username</label>
                    <input onChange={onUsernamechange} placeholder="Your Username " className="border-2 py-8 px-6 rounded-2xl"/>
                </form>
                <form className="flex flex-col py-4">
                    <label className="grow py-4 px-4">Enter Password</label>
                    <input onChange={onPwchange} placeholder="Your Password " className="border-2 py-8 px-6 rounded-2xl"/>
                </form>
            </div>
            <div className="flex justify-center pb-10 text-white">
                <button className="px-10 py-5 bg-blue-400 m-2 rounded-2xl" onClick={setregist}>Cancel</button>
                <button className="px-10 py-5 bg-blue-400 m-2 rounded-2xl" onClick={click}>Submit</button>
            </div>
        </div>
    );
}

export default Regist;