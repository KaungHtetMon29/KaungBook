import React, { useEffect, useState } from "react";
import usericon from "../Assets/imgs/user.png";
import avatar from "../Assets/imgs/avatar.png";
import plus from "../Assets/imgs/plus.png";

function FriendView({ name }) {
  return (
    <div className="w-1/2 relative p-2">
      <div className="flex flex-col rounded-xl">
        <div className=" bg-white rounded-full ml-2 absolute mt-32 shadow-md flex ...">
          <div className="p-1">
            <img src={usericon} className="w-6" />
          </div>

          <div className="items-center flex text-xs justify-center ...">
            <p className="p-1 text-center font-medium tracking-wide  text-black  ...">
              {name}
            </p>
          </div>
          <div className=" bg-blue-600 p-1 flex justify-center items-center rounded-full ...">
            <img src={plus} className="w-6 p-1" />
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
