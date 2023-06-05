import React from "react";
import usericon from "./imgs/user.png";

function Noti(){
    return(
        <div className="flex bg-white px-10 py-10 m-5 rounded-2xl drop-shadow-xl ... ">
            <div className="flex items-center">
                <div><img src={usericon} className="w-20"/></div>
                <div className="pl-5">
                    <div className="text-4xl">
                        <p><span className="font-bold">Name</span> reacted your post</p>
                    </div>
                    <div className="text-3xl">
                        <p>2 hours ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Noti;