import React, { useState } from "react";
import plus from "../Assets/imgs/plus.png"
import usericon from "../Assets/imgs/user.png";
import locationicon from "../Assets/imgs/location.png";
import feelingicon from "../Assets/imgs/happy-face.png";
import '../Assets/Styles/post.css';

function Postscreen({name,chg}){
    const URL=process.env.REACT_APP_PUBLIC_URL
    const [status,setstatus]=useState();
    const post=(e)=>{
        setstatus(e.target.value)
        console.log(e.target.value)
    }
    const upload =()=>{
        fetch(`${URL}feedupload`,{
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
        <div className="b-10 2xl:mx-96 xl:mx-72 2xl:ml-98 xl:ml-97 sm:ml-0">
            <div className="flex items-center lg:text-5xl 2xl:text-2xl xl:text-xl sm:text-base bg-white font-bold lg:py-10 2xl:py-3 xl:py-3 sm:py-3">
                <div><img src={usericon} className="lg:w-40 2xl:w-20 xl:w-20 sm:w-16 lg:px-10 2xl:px-5 xl:px-5 sm:pl-5 sm:pr-2"/></div>
                <div className="grow"><p>{name}</p></div>
                <div><button onClick={upload} className="lg:border-l-4 2xl:xl:border-l-4 xl:border-l-2 border-black sm:border-l-2 lg:py-5 xl:py-3 xl:pl-5 2xl:py-2 lg:pl-10 2xl:pl-5 pr-10 sm:pr-5 sm:pl-5 w-full text-black font-bold">Submit</button></div>
            </div>
            <div className="flex flex-col lg:py-5 lg:px-10 2xl:py-5 2xl:px-5 xl:py-5 xl:px-5 sm:py-2 sm:px-5  text-white lg:text-5xl 2xl:text-2xl xl:text-xl ">
                <div className="flex grow justify-center">
                    <div className="lg:pr-5 2xl:pr-5 xl:pr-5 sm:pr-2 w-max">
                        <img src={plus} className="lg:w-20 2xl:w-36 xl:w-36 bg-blue-700 lg:p-5 2xl:p-3 xl:p-3 sm:w-10 sm:p-2 rounded-full "/>
                    </div>
                    <div className="w-screen flex text-black textform lg:h-96 2xl:h-60 sm:h-36 xl:h-48">
                        <textarea className="w-full rounded-xl bg-white p-5 sm:py-2 sm:px-2 ..." placeholder="text here" onChange={post}></textarea>
                        {/* <span   role="textbox" contentEditable="true" id="form"/> */}
                    </div>
                </div>  
                <div className="lg:mt-10 sm:mt-5 2xl:mt-5 xl:mt-5 lg:mb-5 2xl:mb-5 xl:mb-5 lg:py-8 sm:py-3 xl:py-5 2xl:py-5 rounded-xl bg-white text-black font-bold shadow-xl flex items-center">
                    <div>
                    <img src={locationicon} className="lg:w-24 2xl:w-16 xl:w-14 sm:w-12 pl-5"/>
                    </div>
                    <div><p className="lg:px-10 2xl:px-5 xl:px-5 lg:text-5xl 2xl:text-3xl xl:text-3xl">Location</p></div>
                </div>
                <div className="lg:py-8 lg:mb-5 sm:mt-2 2xl:py-5 2xl:mb-5 sm:py-3 rounded-xl bg-white text-black font-bold shadow-xl flex items-center">
                    <div>
                    <img src={feelingicon} className="lg:w-24 2xl:w-16 xl:w-14 sm:w-12 pl-5"/>
                    </div>
                    <div><p className="lg:px-10 2xl:px-5 xl:px-5 lg:text-5xl 2xl:text-3xl xl:text-3xl">Feeling</p></div>
                </div>
                {/* <div className="w-1/4 pl-10 h-20 ">
                        <button className="bg-blue-700 py-5 pl-10 pr-10 rounded-xl  w-full ">Submit</button>
                </div> */}
            </div>
        </div>
    );
}

export default Postscreen;