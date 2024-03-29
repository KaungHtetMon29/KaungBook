import React from "react";
import usericon from "./imgs/user.png";
import "./chathead.css";

function Chathead() {
  return (
    <div className="flex px-10 sm:px-5 lg:py-10 2xl:py-3 xl:py-3 bg-white lg:m-5 2xl:mx-96 xl:mx-72 sm:mx-5 xl:ml-97 2xl:ml-98 2xl:my-2 xl:my-2 sm:py-1 sm:my-2 rounded-2xl sm:rounded-lg drop-shadow-lg items-center">
      <div className="flex">
        <img src={usericon} className="lg:w-24 2xl:w-14 xl:w-12 sm:w-8" />
      </div>
      <div className="lg:pl-10 2xl:pl-5 xl:pl-5 sm:pl-2 grow">
        <div className="font-bold lg:text-5xl 2xl:text-2xl xl:text-2xl sm:text-lg ...">
          Name
        </div>
        <div className=" lg:text-4xl 2xl:text-xl xl:text-xl sm:text-sm ...">
          Sent you a message
        </div>
      </div>
      <div className="flex">
        <div className="bg-blue-700 dot"></div>
      </div>
    </div>
  );
}
export default Chathead;
