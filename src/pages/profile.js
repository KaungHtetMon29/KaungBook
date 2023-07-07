import React from "react";
import usericon from "../Assets/imgs/user.png";
import Feeds from "../Layouts/feeds";

function Profile({ name, feed }) {
  return (
    <div className="">
      <div className=" 2xl:ml-98 lg:ml-101 lg:mr-64 xl:ml-97 xl:mr-72 2xl:mr-96 flex 2xl:justify-center lg:justify-center xl:justify-center bg-white pb-20 rounded-2xl">
        <div className="flex absolute lg:w-full sm:w-full sm:justify-center sm:pt-32 xs:w-full xs:justify-center xs:pt-32 2xl:w-auto lg:justify-center lg:pt-40 2xl:pt-48 xl:pt-40 ...">
          <div className="">
            <div className="flex lg:justify-center sm:justify-center xs:justify-center">
              <img
                src={usericon}
                className="lg:w-44 xl:w-44 2xl:w-60 sm:border-4 xs:border-4 2xl:border-8 lg:border-4 xl:border-4 sm:w-28 xs:w-28 rounded-full border-white "
              />
            </div>
            <p className="text-black text-center lg:pt-5 2xl:pt-5  lg:text-5xl 2xl:text-5xl xl:text-4xl sm:text-xl xs:text-xl xs:font-bold sm:font-bold ...">
              {name}
            </p>
          </div>
        </div>
        <div className="">
          <div className="w-full 2xl:h-80 xl:h-64 lg:h-64 sm:h-48 xs:h-48 bg-black"></div>
          <div className="w-full lg:text-3xl 2xl:text-3xl xl:text-xl lg:mt-48 2xl:mt-52 xl:mt-48 sm:mt-24 xs:mt-24">
            <div className="flex justify-center text-center  ">
              <div className="lg:pr-10 2xl:pr-10 xl:pr-10 border-r-4 sm:border-r-2 sm:pr-5 xs:border-r-2 xs:pr-5 border-black">
                <div>Follower</div>
                <div className="lg:text-3xl 2xl:text-4xl xl:text-3xl font-bold">
                  1K
                </div>
              </div>
              <div className="lg:pl-10 2xl:pl-10 xl:pl-10 border-l-4 sm:border-l-2 xs:border-l-2 sm:pl-5 xs:pl-5 border-black">
                <div>Following</div>
                <div className="lg:text-3xl 2xl:text-4xl xl:text-3xl font-bold">
                  200
                </div>
              </div>
            </div>
          </div>
          <div className="lg:text-xl 2xl:text-3xl xl:text-2xl sm:text-lg xs:text-lg text-white text-center lg:py-10 xl:py-10 2xl:py-10 sm:py-5 xs:py-5">
            <button className="bg-blue-700 lg:py-3 xl:py-5 xl:px-10 2xl:py-5 lg:px-10 2xl:px-14 sm:px-5 sm:py-2 xs:py-2 xs:px-5 rounded-full">
              Message
            </button>
          </div>
          <div className="lg:text-2xl 2xl:text-3xl xl:text-2xl px-10 sm:px-5 xs:px-5 font-bold bg-slate-200 mx-10 sm:mx-8 xs:mx-8 rounded-3xl drop-shadow-xl ...">
            <div className="lg:py-5 2xl:py-8 xl:py-5 sm:py-2 xs:py-2 sm:pt-5 xs:pt-2 border-b-8 border-white sm:border-b-4 xs:border-b-4">
              <p>Friends</p>
            </div>
            <div className="flex flex-col lg:py-5 2xl:py-8 xl:py-5 sm:py-2 xs:py-2 ...">
              <div className="flex flex-row lg:pb-5 2xl:pb-8 xl:pb-5 sm:pb-2  xs:py-2 ...">
                <div className="flex justify-center bg-black lg:mx-3 2xl:mx-3 xl:mx-3 lg:py-14 2xl:py-16 xl:py-14 sm:py-10 xs:py-10 sm:mx-2 xs:mx-2 px-5 rounded-2xl">
                  <img src={usericon} className="w-80" />
                </div>
                <div className="flex justify-center bg-black lg:mx-3 2xl:mx-3 xl:mx-3 lg:py-14 2xl:py-16 xl:py-14 sm:py-10 sm:mx-2 xs:py-10 xs:mx-2 px-5 rounded-2xl">
                  <img src={usericon} className="w-80" />
                </div>
                <div className="flex justify-center bg-black lg:mx-3 2xl:mx-3 xl:mx-3 lg:py-14 2xl:py-16 xl:py-14 sm:py-10 sm:mx-2 xs:py-10 xs:mx-2 px-5 rounded-2xl">
                  <img src={usericon} className="w-80" />
                </div>
              </div>
              <div className="flex flex-row sm:pb-2 ...">
                <div className="flex justify-center bg-black lg:mx-3 2xl:mx-3 xl:mx-3 lg:py-14 2xl:py-16 xl:py-14 sm:py-10 px-5 sm:mx-2  xs:py-10 xs:mx-2 rounded-2xl">
                  <img src={usericon} className="w-80" />
                </div>
                <div className="flex justify-center bg-black lg:mx-3 2xl:mx-3 xl:mx-3 lg:py-14 2xl:py-16  xl:py-14 sm:py-10 sm:mx-2 xs:py-10 xs:mx-2 px-5 rounded-2xl">
                  <img src={usericon} className="w-80" />
                </div>
                <div className="flex justify-center bg-black lg:mx-3 2xl:mx-3 xl:mx-3 lg:py-14 2xl:py-16 xl:py-14 sm:py-10 sm:mx-2 xs:py-10 xs:mx-2 px-5 rounded-2xl">
                  <img src={usericon} className="w-80" />
                </div>
              </div>
            </div>
            <div className="lg:py-5 2xl:py-5 border-t-8 sm:py-3 sm:border-t-4 xs:py-3 xs:border-t-4 border-white">
              <p className="text-center">see more friends</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 ">
        <Feeds uname={name} feed={feed} />
      </div>
    </div>
  );
}

export default Profile;
