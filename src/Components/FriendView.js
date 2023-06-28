import React, { useEffect, useState } from "react";
import usericon from "../Assets/imgs/user.png";
import avatar from "../Assets/imgs/avatar.png";
import plus from "../Assets/imgs/plus.png";
import "../Assets/Styles/Friendrender.css";

function FriendView({ name }) {
  return (
    <div className="w-1/2 p-1">
      <div className="flex flex-col relative rounded-xl ...">
        <div className=" bg-white rounded-full absolute bottom-0 shadow-md flex left-0 right-0 m-auto w-fit ...">
          <div className="p-1">
            <img src={usericon} className="w-5" />
          </div>

          <div className="items-center flex text-xs justify-center grow ...">
            <p className="text-center tracking-wide name text-black pr-1 ...">
              {name}
            </p>
          </div>
          <div className=" bg-blue-600 p-1 flex justify-center items-center rounded-full ...">
            <img src={plus} className="w-5 p-1" />
          </div>
        </div>

        <div className="h-full bg-red-300 w-full bg-gradient-to-t from-blue-400 to-transparent rounded-lg">
          <img src={avatar} />
        </div>
      </div>
    </div>
  );
}

export default FriendView;
