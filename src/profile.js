import React from "react";
import usericon from "./imgs/user.png";
import Feeds from "./feeds";

function Profile({feed}){
    return(
        <div className="bg-white">
            
            <div className=" w-full flex absolute justify-center pt-52 ...">
                <div>
                    <div className="flex justify-center">
                    <img src={usericon} className="w-80 border-9 rounded-full border-white   " />
                    </div>
                    <p className="text-black text-center pt-10 text-7xl ...">Kaung Htet Mon</p>
                </div>
            </div>
            <div className="">
                <div className="w-full h-96 bg-black"></div>
                <div className="w-full text-4xl mt-80">
                    <div className="flex justify-center text-center ">
                        <div className="pr-20 border-r-4 border-black">
                            <div>Follower</div>
                            <div className="text-6xl font-bold">1K</div>
                        </div>
                        <div className="pl-20 border-l-4 border-black">
                            <div>Following</div>
                            <div className="text-6xl font-bold">200</div>
                        </div>
                    </div>
                </div>
                <div className="text-5xl text-white text-center pt-20 pb-20">
                    <button className="bg-blue-700 py-10 px-20 rounded-full">Message</button>
                </div>
                <div className="text-5xl px-10 font-bold bg-slate-200 mx-10 rounded-3xl drop-shadow-xl ...">
                    <div className="pt-10 pb-10 border-b-8 border-white"><p>Friends</p></div>
                    <div className="flex flex-col pt-10 pb-10  ...">
                        <div className="flex flex-row pb-10 ...">
                            <div className="flex justify-center bg-black mx-10 py-20 px-5 rounded-2xl"><img src={usericon} className="w-80"/></div>
                            <div className="flex justify-center bg-black mx-10 py-20 px-5 rounded-2xl"><img src={usericon} className="w-80"/></div>
                            <div className="flex justify-center bg-black mx-10 py-20 px-5 rounded-2xl"><img src={usericon} className="w-80"/></div>
                        </div>
                        <div className="flex flex-row  ...">
                            <div className="flex justify-center bg-black mx-10 py-20 px-5 rounded-2xl"><img src={usericon} className="w-80"/></div>
                            <div className="flex justify-center bg-black mx-10 py-20 px-5 rounded-2xl"><img src={usericon} className="w-80"/></div>
                            <div className="flex justify-center bg-black mx-10 py-20 px-5 rounded-2xl"><img src={usericon} className="w-80"/></div>
                        </div>
                    </div>
                    <div className="py-10 border-t-8 border-white">
                        <p className="text-center">see more friends</p>
                    </div>
                </div>
                <div className="pb-5">
                <Feeds feed={feed}/>
                </div>
                
            </div>
            
        </div>
    )
}

export default Profile;