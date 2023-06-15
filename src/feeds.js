import React from "react";
import Feedcard from "./Feedcard";


function Feeds({feed,profile,reacter}){
    return(
        <div className="mb-72 ">
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