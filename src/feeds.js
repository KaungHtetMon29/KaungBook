import React from "react";
import Feedcard from "./Feedcard";


function Feeds({uname,feed,profile}){
    const arr=[feed,feed,feed,feed,feed,feed,feed]
    console.log(uname);
    return(
        <div className="mb-72 ">
            <div className="">
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