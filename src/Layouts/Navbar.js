import React, { useState } from "react";
import usericon from "../Assets/imgs/user.png";
import logo from "../Assets/imgs/kaung.png";
import { useDispatch, useSelector } from "react-redux";
import { navbarchange } from "../Services/action";

function Navbar({ getin, setgetin, regist, name, modechg }) {
  // const [enable,setenable]=useState(false);
  const enable = useSelector((state) => state.navenable);
  const dispatch = useDispatch();
  const changenav = (value) => {
    dispatch(navbarchange(value));
  };

  // const [feed,setfeed]=useState(false);
  // const [fname,setfname]=useState("Kaung Book");
  const ef = () => {
    changenav(!enable);
    setgetin();
    regist();
    sessionStorage.clear();
    window.location.reload();
  };
  // const Feedctrl=()=>{
  //     setfeed(!feed);
  //     if(feed){
  //         setfname("Feeds");
  //     }else{
  //         setfname("Kaung Book");
  //     }
  // }
  return (
    <div className="2xl:text-xl xl:text-xl lg:text-xl xs:text-lg sm:text-base sticky top-0 z-10 ...">
      <div className="flex text-white ... ">
        <nav className="2xl:py-2 xl:py-2 sm:py-2 lg:py-2 xs:py-2 bg-gradient-to-r from-cyan-400  bg-blue-700 grow ...">
          <div className="flex">
            <div className="2xl:pl-96 xl:pl-72 lg:px-64 sm:px-5 xs:px-5 flex justify-start items-center grow ...">
              <div>
                <img
                  src={logo}
                  className="lg:w-10 2xl:w-10 xl:w-12 sm:w-8 xs:w-6 ..."
                />
              </div>
              <div className="lg:pr-10 sm:pl-2 xs:pl-2 ...">
                <p>Feeds</p>
              </div>
              {/* <ul className="list-none m-0 ...">
                                <li className="inline  lg:pr-10 sm:pr-5 ..."><img src={logo} className="w-20 ..."/></li>
                                <li className="inline">Feeds</li>
                            </ul> */}
            </div>
            {getin === true ? (
              <div
                className="lg:pr-64 sm:px-5 xs:px-5 2xl:pr-96 xl:pr-72 flex justify-end items-center ..."
                onClick={() => changenav(!enable)}
              >
                <div className="lg:pr-5 sm:pr-2 2xl:pr-5 xs:pr-2 ...">
                  <p>{name}</p>
                </div>
                <div>
                  <img
                    src={usericon}
                    className="lg:w-10 2xl:w-10 xl:w-12 sm:w-8 xs:w-6 ..."
                  />
                </div>
                {/* <ul className="list-none m-0 ...">
                                <li className="inline lg:pr-10 sm:pr-5 ...">{name}</li>
                                <li className="inline"><img src={usericon} className="w-10 ..."/></li>
                            </ul> */}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </nav>
      </div>
      {enable && (
        <div className="flex drop-shadow-lg grow 2xl:text-xl lg:text-xl xl:text-xl sm:text-base xs:text-base ...">
          <div className="flex justify-end grow text-blue-700 font-medium ...">
            <ul className="bg-white absolute 2xl:mr-96 xl:mr-72 lg:mr-64 2xl:rounded-b-xl lg:rounded-b-xl sm:mr-5 xs:mr-5 sm:rounded-b-lg  xs:rounded-b-lg ...">
              <li
                className="lg:pt-5 lg:pl-10 lg:pr-10 lg:pb-5 hover:bg-blue-700 sm:pt-5 xs:pt-4 hover:text-white sm:pl-10 xs:pl-10 sm:pb-2 xs:pb-2 sm:pr-4 xs:pr-4  2xl:pt-5 2xl:pl-24 2xl:pr-10 2xl:pb-5 xl:pt-5 xl:pl-24 xl:pr-10 xl:pb-5 text-right ..."
                onClick={() => modechg("friends")}
              >
                Find Friends
              </li>
              <li className="lg:pt-5  lg:pr-10 lg:pb-5 hover:bg-blue-700 hover:text-white  sm:pt-2 xs:pt-2 sm:pl-10 xs:pl-10 sm:pb-4 xs:pb-4 sm:pr-4 xs:pr-4  2xl:pt-5 2xl:pl-24 2xl:pr-10 2xl:pb-5 xl:pt-5 xl:pl-24 xl:pr-10 xl:pb-5 text-right ...">
                setting
              </li>
              <li
                className="lg:pt-5 lg:pr-10 lg:pb-5 hover:bg-blue-700 hover:text-white sm:pl-10 xs:pl-10 sm:pb-4 xs:pb-4 sm:pr-4 xs:pr-4 2xl:pt-5 2xl:pl-24 2xl:pr-10 2xl:pb-5 xl:pl-24 xl:pt-5 xl:pr-10 xl:pb-5 text-right ..."
                onClick={ef}
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default Navbar;
