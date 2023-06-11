import React, { useEffect, useRef, useState } from "react";
import usericon from "./imgs/user.png";
import like from "./imgs/like.png";
import haha from "./imgs/laughter.png";
import love from "./imgs/thumbs-up.png";
import heart from "./imgs/heart.png"
import plus from "./imgs/plus.png"
import './feedcardanimation.css'


function Feedcard({obj,profile}){
    const [enable,setenable]=useState(false);
    const [cmt,setcmt]=useState(false);
    const [height,setheight]=useState(0);
    const dh=useRef();
    var test=0;

    const reactionupdate=()=>{
        setenable(!enable);
    }
    const cmtupdate=()=>{
        setcmt(!cmt);
    }
    useEffect(()=>{
        if(!dh?.current?.clientHeight){
            return;
        }
        
        setheight(dh?.current?.clientHeight);
    },[dh?.current?.clientHeight])

    const reaclocation=()=>{
        test=height*.55;
    }
    return(
        <div className="lg:px-10 lg:py-5 sm:px-5 sm:py-2 drop-shadow ... " id = 'test'>
            {reaclocation()}
            <div className="drop-shadow-md bg-white h-auto lg:rounded-3xl lg:pt-5 sm:rounded-xl sm:pt-2 ... parent">
                <div ref={dh}>
                    <div onClick={profile} className="lg:pt-4 lg:pb-4 lg:px-5 lg:border-b-2 border-gray-300 sm:pt-2 sm:pb-4 sm:px-2 flex items-center lg:text-4xl sm:text-xl">
                        <div ><img src={usericon} className="w-20 lg:pr-6 sm:pr-2 ..."/></div>
                        <div className="lg:pr-6 sm:pr-2 ..."><p>{obj.name}</p></div>
                        {/* <ul className="list-none m-0 lg:text-4xl sm:text-xl ...">
                            <li className="inline lg:pr-6 sm:pr-2 ... ">Img</li>
                            <li className="inline lg:pr-6 sm:pr-2 ...">Name</li>
                        </ul> */}
                    </div>
                    {enable===true ? <div className="pl-5 flex absolute bg-white drop-shadow-2xl animation rounded-r-full ..." id="reactionbar" style={{top:test}}>
                        <div className="py-5 pr-5 flex">
                        <img src={heart} className="w-20 pr-5 ..." onClick={reactionupdate}/>
                        <img src={like} className="w-20 pr-5 ..." onClick={reactionupdate}/>
                        <img src={haha} className="w-20 pr-5 ..." onClick={reactionupdate}/>
                        </div>
                        
                    </div>:<div className="test"></div>
                    }
                    <div className="lg:py-10 lg:px-5 sm:py-5 sm:px-2 lg:text-3xl sm:text-lg ...">
                        {/* <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aspernatur quo sunt, tempora voluptatum numquam iste quam natus velit corporis voluptatibus est obcaecati voluptates amet recusandae minima rem porro aliquid?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aspernatur quo sunt, tempora voluptatum numquam iste quam natus velit corporis voluptatibus est obcaecati voluptates amet recusandae minima rem porro aliquid?
                        </p> */}
                        <p className="leading-10 ...">
                            {obj.status}
                        </p>
                        
                    </div>
                    <div className="lg:px-5 sm:px-2 lg:pb-4 sm:pb-2 lg:text-2xl sm:text-lg flex">
                        <div className="flex items-center grow"><div><img src={like} className="w-8 ..."/></div>
                            <div><img src={haha} className="w-8 ..."/></div>
                            <p className="pl-4">{Number(obj.lke+obj.haha+obj.love)} reacted</p>
                        </div>
                        <div className="flex items-center sm:px-2 lg:px-5">
                            <p className="pr-4">0 comment</p>
                            <p>0 share</p>
                        </div> 
                    </div>
                    
                    <div className="flex w-100 lg:text-3xl sm:text-lg lg:border-t-2 border-b-2 border-gray-300 ...">
                        <div className="text-center lg:px-10 lg:py-5 lg:border-r-2 border-gray-300 sm:px-5 sm:py-2 w-1/3 hover:bg-sky-700 lg:rounded-bl-3xl sm:rounded-bl-xl ..." onClick={()=>{reactionupdate()}}>react</div>
                        <div className="text-center lg:px-10 lg:py-5 lg:border-r-2 border-gray-300 sm:px-5 sm:py-2 w-1/3 hover:bg-sky-700 ..." onClick={cmtupdate}>cmt</div>
                        <div className="text-center lg:px-10 lg:py-5 sm:px-5 sm:py-2 w-1/3 hover:bg-sky-700 lg:rounded-br-3xl sm:rounded-br-xl ...">share</div>
                    </div>
                </div>
                
                {
                    cmt===true?
                    <div className="text-4xl">
                        <div className="flex px-10 py-5 bg-slate-200 ml-10 mr-60 my-10 rounded-full items-center">
                            <div className="flex"><img src={usericon} className="w-20"/></div>
                            <div className="flex  pl-5"><p className="font-bold">Name</p></div>
                            <div className="flex  pl-5"><p> hi nice to meet you</p></div>
                            
                        </div>
                        <div className="flex px-10 py-5 bg-slate-200 ml-10 mr-60 my-10 rounded-full items-center">
                            <div className="flex"><img src={usericon} className="w-20"/></div>
                            <div className="flex  pl-5"><p className="font-bold">Name</p></div>
                            <div className="flex  pl-5"><p> bonjour</p></div>
                            
                        </div>
                        <div className="flex bg-slate-200 py-5 px-10  text-white">
                            <div className="flex grow justify-center items-center">
                                <div className="pr-5 ">
                                    <img src={plus} className="w-20 bg-blue-700 p-5 rounded-full"/>
                                </div>
                                <div className="w-3/4 flex text-black">
                                    <input type="text" placeholder="comment..." className="py-5 px-5 w-full rounded-l-full"/>
                                </div>
                                <div className="w-1/4 pl-0 flex">
                                    <button className="bg-blue-700 py-5 pl-10 pr-10 rounded-r-full w-full">Submit</button>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>:<div></div>
                }
                
            </div>
        </div>
    );
}

export default Feedcard;