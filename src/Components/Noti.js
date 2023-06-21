import React from "react";
import usericon from "../Assets/imgs/user.png";

function Noti(){
    return(
        <div className="flex bg-white lg:px-10 sm:mx-4 sm:px-5 sm:my-2 lg:py-10 xl:py-4 xl:my-2 lg:m-5 2xl:mr-96 xl:mr-72 2xl:ml-98 xl:ml-97 2xl:px-10 2xl:py-2 2xl:my-2 rounded-2xl drop-shadow-xl sm:rounded-md ... ">
            <div className="flex items-center">
                <div><img src={usericon} className="lg:w-20 2xl:w-10 xl:w-10 sm:w-8"/></div>
                <div className="pl-5">
                    <div className="lg:text-4xl 2xl:text-xl xl:text-xl sm:text-base">
                        <p><span className="font-bold">Name</span> reacted your post</p>
                    </div>
                    <div className="lg:text-3xl 2xl:text-lg xl:text-lg sm:text-base">
                        <p>2 hours ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Noti;