import React from "react";
import Feedcard from "./Feedcard";


function Feeds({feed,profile,reacter}){
    const f={
        name:"kaung",
        status:"testing"
    }
    return(
        <div className="lg:mb-72 2xl:mb-5 xl:mb-8 ">
<<<<<<< HEAD
            {/* {   
                
                
                feed.map((f)=>{
                    return <Feedcard obj={f} profile={profile} key={f.id} reacter={reacter}/>;
                })
            } */}
            <div className="">
                <Feedcard obj={f} profile={profile} />
            </div>
            <div className="">
                <Feedcard obj={f}  profile={profile}/>
            </div>
            <div className="">
                <Feedcard obj={f}  profile={profile}/>
            </div>
            <div className="">
                <Feedcard obj={f}  profile={profile}/>
            </div>
            <div className="">
                <Feedcard obj={f} profile={profile}/>
=======
//             {   
                
                
//                 feed.map((f)=>{
//                     return <Feedcard obj={f} profile={profile} key={f.id} reacter={reacter}/>;
//                 })
//             }
            <div className="">
                <Feedcard obj={
                    name:"kaung",
                    status:"testing"
                }profile={profile} />
            </div>
            <div className="">
                <Feedcard obj={
                    name:"kaung",
                    status:"testing"
                }profile={profile} />
            </div>
            <div className="">
                <Feedcard obj={
                    name:"kaung",
                    status:"testing"
                }profile={profile} />
            </div>
            <div className="">
                <Feedcard obj={
                    name:"kaung",
                    status:"testing"
                }profile={profile} />
            </div>
            <div className="">
                <Feedcard obj={
                    name:"kaung",
                    status:"testing"
                }profile={profile} />
>>>>>>> 269c43f8377ff5fa97c431e2ab2434b3551f13e5
            </div>
            {/* {
                arr.map((arr)=>(
                    <Feedcard feed={arr}/>
                ))
            } */}
        </div>
    );
}
export default Feeds;
