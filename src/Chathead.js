import React from "react";
import usericon from "./imgs/user.png";
import './chathead.css';

function Chathead(){
    return(
        <div className="flex px-10 py-10 bg-white m-5 rounded-2xl drop-shadow-lg items-center">
            <div className="flex">
                <img src={usericon} className="w-24"/>
            </div>
            <div className="pl-10 grow">
                <div className="font-bold text-5xl">Name</div>
                <div className=" text-4xl">Sent you a message</div>
            </div>
            <div className="flex">
                <div className="bg-blue-700 dot"></div>
            </div>
        </div>
    );
}
export default Chathead;