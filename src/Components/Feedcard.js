import React, { useEffect, useRef, useState } from "react";
import usericon from "../Assets/imgs/user.png";
import like from "../Assets/imgs/like.png";
import haha from "../Assets/imgs/laughter.png";
import love from "../Assets/imgs/thumbs-up.png";
import heart from "../Assets/imgs/heart.png"
import plus from "../Assets/imgs/plus.png"
import '../Assets/Styles/feedcardanimation.css'


function Feedcard({obj,profile,reacter}){
    const [enable,setenable]=useState(false);
    const [cmt,setcmt]=useState(false);
    const [height,setheight]=useState(0);
    const [comment,setcomment]=useState("");
    const [cmts,setcmts]=useState([]);
    const dh=useRef();
    var test=0;
    const cmtliveupdate=(e)=>{
        setcomment(e.target.value);
        console.log(comment);
        console.log(reacter)
    }
    const dbupdate =(input) =>{
        fetch('http://localhost:3000/reaction',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                    id:obj.id,
                    react:input 
                    })
        }).then(response=>response.json()).then(data=>console.log(data))
    }

    const cmtdbupdate =()=>{
        console.log(reacter)
        fetch('http://localhost:3000/cmt',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                id:obj.id,
                cmter:reacter,
                cmt:comment
                })
        }).then(response=>response.json()).then(data=>console.log(data))
    }
    const fetchcmt=()=>{
        
    }
    const reactionupdate=()=>{
        setenable(!enable);
        
    }
    const cmtupdate=()=>{
        setcmt(!cmt);
    }
    useEffect(()=>{
        fetch('http://localhost:3000/cmtupdate',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                    id:obj.id,
                    })
        }).then(respond=>respond.json()).then(data=>{data.map(f=>{
            cmts.push(f)
        });console.log(cmts)})
        if(!dh?.current?.clientHeight){
            return;
        }
        
        setheight(dh?.current?.clientHeight);
    },[])

    const reaclocation=()=>{
        test=height*.55;
    }
    return(
        <div className="lg:px-10 lg:py-5 sm:px-5 sm:py-2 drop-shadow 2xl:px-96 2xl:ml-64 2xl:py-2 xl:px-72 xl:ml-56 xl:py-2 ... " id = 'test'>
            {reaclocation()}
            {console.log(reacter)}
            
            <div className="drop-shadow-md bg-white h-auto lg:rounded-3xl lg:pt-5 2xl:pt-2 sm:rounded-xl sm:pt-2 2xl:rounded-xl xl:rounded-xl xl:pt-2 ... parent">
                <div ref={dh}>
                    <div onClick={profile} className="lg:pt-4 2xl:py-2 xl:py-1 lg:pb-4 lg:px-5 xl:px-5 lg:border-b-2 border-gray-300 xl:border-b-2 2xl:border-b-2 sm:border-b-2 sm:pt-1 sm:pb-1 sm:px-2 flex items-center lg:text-4xl sm:text-base 2xl:text-lg xl:text-xl ...">
                        <div ><img src={usericon} className="xl:w-14 lg:w-20 lg:pr-6 sm:pr-2 2xl:w-14 2xl:pr-4 sm:w-8 ..."/></div>
                        <div className="lg:pr-6 sm:pr-2 xl:pr-6 ..."><p>{obj.name}</p></div>
                        {/* <ul className="list-none m-0 lg:text-4xl sm:text-xl ...">
                            <li className="inline lg:pr-6 sm:pr-2 ... ">Img</li>
                            <li className="inline lg:pr-6 sm:pr-2 ...">Name</li>
                        </ul> */}
                    </div>
                    {enable===true ? <div className="lg:pl-5 2xl:pl-2 sm:pl-2 flex absolute bg-white drop-shadow-2xl animation rounded-r-full ..." id="reactionbar" style={{top:test}}>
                        <div className="lg:py-5 2xl:py-4 pr-5 sm:py-2 flex">
                        <img src={heart} className="lg:w-20 lg:pr-5 2xl:w-14 2xl:pr-5 sm:w-8 sm:pr-2 ..." onClick={()=>{reactionupdate();dbupdate("love")}}/>
                        <img src={like} className="lg:w-20 lg:pr-5 2xl:w-14 2xl:pr-5 sm:w-8 sm:pr-2 ..." onClick={()=>{reactionupdate();dbupdate("lke")}}/>
                        <img src={haha} className="lg:w-20 lg:pr-5 2xl:w-14 2xl:pr-5 sm:w-8 sm:pr-2 ..." onClick={()=>{reactionupdate();dbupdate("haha")}}/>
                        </div>
                        
                    </div>:<div className="test"></div>
                    }
                    <div className="lg:py-10 2xl:py-2 xl:py-4 lg:px-5 sm:py-2 sm:px-2 lg:text-3xl sm:text-sm  2xl:text-sm xl:text-lg ...">
                        {/* <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aspernatur quo sunt, tempora voluptatum numquam iste quam natus velit corporis voluptatibus est obcaecati voluptates amet recusandae minima rem porro aliquid?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aspernatur quo sunt, tempora voluptatum numquam iste quam natus velit corporis voluptatibus est obcaecati voluptates amet recusandae minima rem porro aliquid?
                        </p> */}
                        <p className="leading-10 ...">
                            {obj.status}
                        </p>
                        
                    </div>
                    <div className="lg:px-5 xl:px-5 sm:px-2 xl:pb-2 lg:pb-4 sm:pb-2 2xl:pb-1 lg:text-2xl sm:text-lg xl:text-sm 2xl:text-sm sm:text-sm flex">
                        <div className="flex items-center grow">
                            <div><img src={like} className="lg:w-8 2xl:w-5 xl:w-5 sm:w-4 ..."/></div>
                            <div><img src={haha} className="lg:w-8 2xl:w-5 xl:w-5 sm:w-4 ..."/></div>
                            <p className="pl-4 sm:pl-2">{obj.lke+obj.love+obj.haha} reacted</p>
                        </div>
                        <div className="flex items-center sm:px-2 lg:px-5 ">
                            <p className="pr-4 sm:pr-2">0 comment</p>
                            <p>0 share</p>
                        </div> 
                    </div>
                    
                    <div className="flex w-100 2xl:text-xl lg:text-3xl sm:text-base xl:text-base 2xl:text-sm 2xl:border-t-1 xl:border-t-1 2xl:border-b-1 xl:border-t-1 sm:border-t-2 sm:border-b-2 lg:border-t-2 lg:border-b-2 border-gray-300 ...">
                        <div className="text-center lg:px-10 lg:py-5 2xl:py-2 xl:py-2 lg:border-r-2 2xl:border-r-1 sm:border-r-2 border-gray-300 sm:px-5 sm:py-1 w-1/3 hover:bg-sky-700 lg:rounded-bl-3xl 2xl:rounded-bl-xl sm:rounded-bl-xl ..." onClick={()=>{reactionupdate()}}>react</div>
                        <div className="text-center lg:px-10 lg:py-5 2xl:py-2 xl:py-2 lg:border-r-2 2xl:border-r-1 sm:border-r-2 border-gray-300 sm:px-5 sm:py-1 w-1/3 hover:bg-sky-700 ..." onClick={()=>{cmtupdate();fetchcmt()}}>cmt</div>
                        <div className="text-center lg:px-10 lg:py-5 2xl:py-2 xl:py-2 sm:px-5 sm:py-1 w-1/3 hover:bg-sky-700 lg:rounded-br-3xl 2xl:rounded-br-xl sm:rounded-br-xl ...">share</div>
                    </div>
                </div>
                
                {
                    cmt===true?
                    <div className="lg:text-4xl 2xl:text-lg xl:text-lg ...">
                        {
                            cmts.map((f)=>{
                                return(
                                <div className="flex lg:px-10 lg:py-5 xl:py-2 2xl:py-4 bg-slate-200 ml-5 mr-10 my-5 rounded-full items-center sm:py-2 sm:px-5 sm:mx-2" key={f.cmtid}>
                                    <div className="flex"><img src={usericon} className="lg:w-20 2xl:w-10 xl:w-10 sm:w-5 ..."/></div>
                                    <div className="flex  lg:pl-5 2xl:pl-5 xl:pl-2 sm:pl-2 ..."><p className="font-bold">{f.cmter}</p></div>
                                    <div className="flex  lg:pl-5 2xl:pl-5 xl:pl-2 sm:pl-2 ..."><p className="break-all ..."> {f.cmt}</p></div>
                            
                                </div>
                                );
                            })
                        }
                        
                        {/* <div className="flex px-10 py-5 bg-slate-200 ml-10 mr-60 my-10 rounded-full items-center w-auto">
                            <div className="flex"><img src={usericon} className="w-10"/></div>
                            <div className="flex  pl-5"><p className="font-bold">Name</p></div>
                            <div className="flex  pl-5"><p> bonjour</p></div>
                            
                        </div> */}
                        <div className="flex bg-slate-200 py-5 px-5 xl:py-2 sm:py-2 text-white">
                            <div className="flex grow justify-center items-center">
                                <div className="pr-5 ">
                                    <img src={plus} className="lg:w-20 xl:w-11 sm:w-11 2xl:w-16 bg-blue-700 lg:p-5 xl:p-2 sm:p-2 2xl:p-4 rounded-full"/>
                                </div>
                                <div className="w-3/4 flex text-black">
                                    <input onChange={cmtliveupdate} type="text" placeholder="comment..." className="py-5 px-5 xl:py-2 sm:py-1 w-full rounded-l-full"/>
                                </div>
                                <div className="w-1/4 pl-0 flex">
                                    <button className="bg-blue-700 py-5 xl:py-2 sm:py-1 sm:pl-4 pl-10 pr-10 rounded-r-full w-full" onClick={cmtdbupdate}>Submit</button>
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