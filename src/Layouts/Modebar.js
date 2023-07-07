import React, { useState } from "react";
import home from "../Assets/imgs/home.png";
import mail from "../Assets/imgs/mail.png";
import plus from "../Assets/imgs/plus.png";
import user1 from "../Assets/imgs/user(1).png";
import bell from "../Assets/imgs/bell.png";

function Modebar({ modechg }) {
  // const [LOn,setLOn]=useState("opacity-0");
  // const lockon=()=>{
  //     setLOn("opacity-100");
  // }
  return (
    <div className="fixed lg:left-0 flex lg:w-auto lg:h-full lg:text-xl 2xl:left-0 2xl:w-auto 2xl:h-full 2xl:text-2xl xl:left-0 xl:w-auto 2xl:min-h-full xl:h-full sm:w-full sm:bottom-0 xl:text-xl ">
      <div className="flex grow bg-white 2xl:pl-96 xl:pl-72 lg:pl-64 2xl:pr-10 xl:pr-5 lg:pr-10 sm:py-3 lg:w-full 2xl:w-auto 2xl:h-full 2xl:flex-col lg:flex-col xl:flex-col sm:px-10 sm:justify-center sm:items-center 2xl:items-end lg:items-end xl:items-end drop-shadow-lg text-blue-700 ...">
        <div
          className="flex lg:items-center lg:px-0 lg:pt-10 lg:pb-10 sm:pr-5 2xl:items-center xl:items-center xl:px-0 2xl:px-0 xl:pb-10 xl:pt-28 2xl:pb-14 2xl:pt-30"
          onClick={() => modechg("home")}
        >
          <p className="pr-5 lg:flex 2xl:flex items-right xl:flex sm:hidden">
            Feeds
          </p>
          <img
            src={home}
            className="lg:w-10 2xl:w-10 xl:w-12 sm:w-10 pb-2 sm:pb-2 hover:border-b-8 hover:border-blue-700 sm:hover:border-b-3 ..."
          />
        </div>
        <div
          className="flex lg:items-center lg:px-0 lg:py-12 sm:px-5 2xl:items-center xl:items-center xl:px-0 2xl:px-0 xl:py-12 2xl:py-14 ..."
          onClick={() => modechg("noti")}
        >
          <p className="pr-5 lg:flex 2xl:flex items-right xl:flex sm:hidden">
            Notification
          </p>
          <img
            src={bell}
            className="lg:w-10 2xl:w-10 xl:w-12 sm:w-10 lg:pb-2 sm:pb-2 hover:border-b-8 hover:border-blue-700 sm:hover:border-b-3 ..."
          />
        </div>
        <div
          className="flex lg:px-0 lg:py-12 lg:items-center sm:px-2 2xl:items-center xl:items-center xl:px-0 2xl:px-0 xl:py-12 2xl:py-14 ..."
          onClick={() => modechg("post")}
        >
          <p className="pr-5 lg:flex 2xl:flex xl:flex sm:hidden">Post</p>
          <img
            src={plus}
            className="lg:w-20 2xl:w-20 sm:w-20 sm:p-3 lg:p-5 2xl:p-5  xl:w-20 xl:p-5 rounded-full bg-blue-700 bg-gradient-to-tr from-cyan-400 ..."
          />
        </div>
        <div
          className="flex lg:px-0 lg:items-center lg:py-12 sm:px-5 2xl:items-center xl:items-center xl:px-0 2xl:px-0 xl:py-12 2xl:py-14"
          onClick={() => modechg("mail")}
        >
          <p className="pr-5 lg:flex 2xl:flex xl:flex sm:hidden">Message</p>
          <img
            src={mail}
            className="lg:w-10 2xl:w-10 sm:w-10 xl:w-12 lg:pb-2 sm:pb-2 hover:border-b-8 hover:border-blue-700 sm:hover:border-b-3 ..."
          />
        </div>
        <div
          className="flex lg:px-0 lg:py-12 lg:items-center sm:pl-5 2xl:items-center xl:items-center xl:px-0 2xl:px-0 xl:py-12 2xl:py-14"
          onClick={() => modechg("prof")}
        >
          <p className="pr-5 lg:flex 2xl:flex xl:flex sm:hidden">Profile</p>
          <img
            src={user1}
            className="lg:w-10 2xl:w-10 sm:w-10 xl:w-12 lg:pb-2 sm:pb-2 hover:border-b-8 hover:border-blue-700 sm:hover:border-b-3 ..."
          />
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="bg-blue-700 rounded-full text-sm">.</div> */
}
export default Modebar;
