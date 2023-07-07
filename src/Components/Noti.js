import React from "react";
import usericon from "../Assets/imgs/user.png";

function Noti() {
  return (
    <div className="flex bg-white lg:my-2 sm:mx-4 xs:mx-4 sm:px-5 xs:px-5 sm:my-2 xs:my-1 lg:py-2 xl:py-4 lg:mr-64 xl:my-2 lg:m-5 2xl:mr-96 lg:ml-101 xl:mr-72 2xl:ml-98 xl:ml-97 2xl:px-10 2xl:py-2 2xl:my-2 rounded-2xl drop-shadow-xl sm:rounded-md xs:rounded-md ... ">
      <div className="flex items-center">
        <div>
          <img
            src={usericon}
            className="lg:w-10 2xl:w-10 xl:w-10 sm:w-8 xs:w-8"
          />
        </div>
        <div className="pl-5">
          <div className="lg:text-xl 2xl:text-xl xl:text-xl sm:text-sm xs:text-sm">
            <p>
              <span className="font-bold">Name</span> reacted your post
            </p>
          </div>
          <div className="lg:text-lg 2xl:text-lg xl:text-lg sm:text-sm xs:text-sm">
            <p>2 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Noti;
