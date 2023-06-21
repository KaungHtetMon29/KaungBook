import React, { useEffect, useState } from "react";
import 'animate.css'
import '../Assets/Styles/siginin.css'
import usericon from "../Assets/imgs/search.png";

function Signin({setgetin,setregist,buff,friposts}){
    const [signin,setsignin]=useState({
        name:"",
        pw:""
    });

    const [dbbuff,setdbbuff]=useState({
        name:""
    })
    const onEmailchange=(e)=>{
        signin.name=e.target.value;
    }
    const onPwchange=(e)=>{
        signin.pw=e.target.value;
    }
    const f={
        name:"kaung",
        status:"testing"
    }

    

    const click=()=>{
        //node-server-1ag1.onrender.com
        fetch('http://localhost:3000/signin',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:signin.name,
                pw:signin.pw
            })
        }).then(Response=>Response.json()).then(data=>
            {if(data.status===true){
                setgetin();setregist();dbbuff.name=data.name;
                console.log(dbbuff)

                localStorage.setItem('getin','true');
                localStorage.setItem('username',dbbuff.name)
                localStorage.setItem('signinname',signin.name);
                fetch('http://localhost:3000/profile',{
                    method:'post',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({
                        name:data.name,
                    })
                }).then(res=>res.json()).then(pdata=>
                    fetch('http://localhost:3000/friposts',{
                        method:'post',
                        headers:{'Content-Type':'application/json'},
                        body:JSON.stringify({
                            name:signin.name,
                        })
                    }).then(res=>res.json("good")).then(
                        (fposts)=>{
                            buff(pdata.data)
                            console.log(fposts)
                            friposts(fposts)
                        }
                        
                    )
                     )
                
            }else{
                alert("Please check name and password ");window.location.reload(true)
            }
            }
            )
    }
    useEffect(()=>{
        const isloggedin=localStorage.getItem('getin');
        if(isloggedin==='true'){
            dbbuff.name=localStorage.getItem('username');
            signin.name=localStorage.getItem('signinname');
            console.log(signin);
            fetch('http://localhost:3000/profile',{
                    method:'post',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({
                        name:dbbuff.name,

                    })
                }).then(res=>res.json()).then(pdata=>
                    fetch('http://localhost:3000/friposts',{
                        method:'post',
                        headers:{'Content-Type':'application/json'},
                        body:JSON.stringify({
                            name:signin.name,
                        })
                    }).then(res=>res.json("good")).then(
                        (fposts)=>{
                            console.log(pdata)
                            buff(pdata.data)
                            friposts(fposts)
                        }
                        
                    )
                     )
        }
      },[])
    return(
        <div className="shadow-md lg:m-auto lg:w-1/2 2xl:m-auto 2xl:w-3/12 xl:w-4/12 lg:text-4xl 2xl:text-base xl:text-2xl xl:m-auto sm:m-auto sm:mt-10 sm:w-3/4 sm:text-base bg-slate-200 lg:rounded-3xl sm:rounded-xl lg:my-96 2xl:mt-10 xl:mt-10 sm:my-20 flex flex-col justify-center animate__animated animate__fadeIn " >
            <div className="lg:pb-5 lg:pt-10 2xl:pb-0 xl:px-12 lg:px-20 2xl:px-10 sm:pb-1 sm:pt-5 sm:px-5 xl:pb-2 xl:pt-5">
                <form className="flex flex-col lg:py-4 2xl:py-1 sm:py-2 xl:py-1 form" >
                    <label className="grow lg:py-4 2xl:py-2 2xl:px-2 lg:px-4 sm:py-2 sm:px-2 xl:px-2">Enter Email/Username</label>
                    <input onChange={onEmailchange} placeholder="Your Email address or Username" className="xl:px-4 lg:rounded-2xl sm:rounded-xl border-2 lg:py-8 xl:py-5 xl:text-base 2xl:py-4 lg:px-6 2xl:px-4 sm:py-2 sm:px-2"/>
                </form>
                <form className="flex flex-col lg:py-4 2xl:py-1 sm:py-2 xl:py-1 form">
                    <label className="grow lg:py-4 2xl:py-2 2xl:px-2 lg:px-4 sm:py-2 sm:px-2 xl:px-2">Enter Password</label>
                    <input placeholder="Your Password " onChange={onPwchange} className="lg:rounded-2xl sm:rounded-xl border-2 lg:py-8 xl:py-5 xl:text-base 2xl:py-4 lg:px-6 xl:px-4 2xl:px-4 sm:py-2 sm:px-2"/>
                </form>
            </div>
            <div className="flex justify-center text-white xl:text-xl">
                <button className="lg:px-10 2xl:px-8 xl:px-11 2xl:py-2 xl:py-4 2xl:rounded-lg lg:py-5 bg-blue-600 lg:m-2 lg:rounded-2xl sm:px-6 sm:py-2 sm:m-1 sm:rounded-lg ">Cancel</button>
                <button className="lg:px-10 lg:py-5 2xl:px-8 xl:px-11 xl:py-4 2xl:py-2 2xl:rounded-lg bg-blue-600 lg:m-2 lg:rounded-2xl sm:px-6 sm:py-2 sm:m-1 sm:rounded-lg " onClick={click}>Submit</button>
            </div>
            <div className="flex justify-center lg:text-3xl 2xl:text-lg sm:text-md xl:text-xl">
                <button className="lg:px-12 2xl:px-9 lg:py-5 2xl:py-3 bg-white lg:m-2 lg:rounded-2xl  2xl:rounded-lg sm:px-5 sm:py-2 sm:my-1 lg:my-2 sm:rounded-lg flex items-center ">
                    <img src={usericon} className="lg:w-12 2xl:w-11 sm:w-6 lg:pr-4 sm:pr-2"/>
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
