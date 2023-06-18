import React from "react";
import Feedcard from "./Feedcard";


function Feeds({feed,profile,reacter}){
    return(
        <div className="lg:mb-72 2xl:mb-5 xl:mb-8 ">
            {   
                
                
                feed.map((f)=>{
                    return <Feedcard obj={f} profile={profile} key={f.id} reacter={reacter}/>;
                })
            }
            {/* <div className="">
                <Feedcard name={uname} feed={feed} profile={profile} />
            </div>
            <div className="">
                <Feedcard name={uname} feed={feed} profile={profile}/>
            </div>
            <div className="">
                <Feedcard name={uname} feed={feed} profile={profile}/>
            </div>
            <div className="">
                <Feedcard name={uname} feed={feed} profile={profile}/>
            </div>
            <div className="">
                <Feedcard name={uname} feed={feed} profile={profile}/>
            </div> */}
            {/* {
                arr.map((arr)=>(
                    <Feedcard feed={arr}/>
                ))
            } */}
        </div>
    );
}
export default Feeds;