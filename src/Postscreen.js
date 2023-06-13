import React, { useState } from "react";
import plus from "./imgs/plus.png"
import usericon from "./imgs/user.png";
import locationicon from "./imgs/location.png";
import feelingicon from "./imgs/happy-face.png";
import './post.css';

function Postscreen({name,chg}){
    const [status,setstatus]=useState();
    const post=(e)=>{
        setstatus(e.target.value)
        console.log(e.target.value)
    }
    const upload =()=>{
        fetch('http://localhost:3000/feedupload',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                name:name,
                post:status
            })
        }).then(res=>res.json()).then((data)=>
            {
                
            if(data!=="Type something in your mind"){
                chg("home");
            }else{
                alert(data)
            }
        }
        )
    }
    // const postform= document.getElementById("form");
    // postform.addEventListener("change",(e)=>{
        
    // })
    return(
        <div className="b-10">
            <div className="flex items-center text-5xl bg-white font-bold py-10">
                <div><img src={usericon} className="w-40 px-10"/></div>
                <div className="grow"><p>{name}</p></div>
                <div><button onClick={upload} className="border-l-4 border-black py-5 pl-10 pr-10  w-full text-black font-bold">Submit</button></div>
            </div>
            <div className="flex flex-col py-5 px-10  text-white text-5xl ">
                 <div className="flex grow justify-center">
                    <div className="pr-5 w-max">
                        <img src={plus} className="w-20 bg-blue-700 p-5 rounded-full "/>
                    </div>
                    <div className="w-screen flex text-black textform h-96">
                        <textarea className="w-full rounded-xl bg-white p-5 ..." placeholder="text here" onChange={post}></textarea>
                        {/* <span   role="textbox" contentEditable="true" id="form"/> */}
                    </div>
                </div>  
                <div className="mt-10 mb-5 py-8 rounded-xl bg-white text-black font-bold shadow-xl flex items-center">
                    <div>
                    <img src={locationicon} className="w-24 pl-5"/>
                    </div>
                    <div><p className="px-10 text-5xl">Location</p></div>
                </div>
                <div className="py-8 mb-5 rounded-xl bg-white text-black font-bold shadow-xl flex items-center">
                    <div>
                    <img src={feelingicon} className="w-24 pl-5"/>
                    </div>
                    <div><p className="px-10 text-5xl">Feeling</p></div>
                </div>
                {/* <div className="w-1/4 pl-10 h-20 ">
                        <button className="bg-blue-700 py-5 pl-10 pr-10 rounded-xl  w-full ">Submit</button>
                </div> */}
            </div>
        </div>
    );
}

export default Postscreen;