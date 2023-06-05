import React from "react";
import plus from "./imgs/plus.png"
import usericon from "./imgs/user.png";

function Postscreen(){
    return(
        <div>
            <div className="flex items-center text-4xl font-bold py-10">
                <div><img src={usericon} className="w-40 px-10"/></div>
                <div><p>name</p></div>
            </div>
            <div className="flex bg-slate-200 py-5 px-10  text-white text-3xl h-full items-end">
                <div className="flex grow justify-center">
                    <div className="pr-5 w-max">
                        <img src={plus} className="w-20 bg-blue-700 p-5 rounded-full"/>
                    </div>
                    <div className="w-full flex text-black">
                        <textarea className="w-full h-96 rounded-xl ..." placeholder="text here"></textarea>
                    </div>
                </div>  
                <div className="w-1/4 pl-10 h-20 ">
                        <button className="bg-blue-700 py-5 pl-10 pr-10 rounded-xl  w-full ">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Postscreen;