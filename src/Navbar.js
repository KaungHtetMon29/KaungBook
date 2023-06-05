import React, { useState } from "react";
import usericon from "./imgs/user.png";
import logo from "./imgs/kaung.png";
import { useDispatch,useSelector} from "react-redux";
import { navbarchange } from "./action";

function Navbar({getin,setgetin,regist,name}){
    // const [enable,setenable]=useState(false);
    const enable=useSelector(state=>state.navenable);
    const dispatch=useDispatch();
    const changenav=(value=>{
        dispatch(navbarchange(value))
    })
    
    // const [feed,setfeed]=useState(false);
    // const [fname,setfname]=useState("Kaung Book");
    const ef=()=>{
        changenav(!enable);
        setgetin();regist();
    }
    // const Feedctrl=()=>{
    //     setfeed(!feed);
    //     if(feed){
    //         setfname("Feeds");
    //     }else{
    //         setfname("Kaung Book");
    //     }
    // }
    return(
        <div className="2xl:text-10xl lg:text-5xl sm:text-xl sticky top-0 z-10 ...">
            <div className="flex text-white ... ">
                <nav className='2xl:py-20 lg:py-10 sm:py-4 bg-blue-700 grow ...'>
                    <div className="flex">
                        <div className="2xl:px-20 lg:px-10 sm:px-5 flex justify-start items-center grow ...">
                            
                            <div><img src={logo} className="w-20 ..."/></div>
                            <div className="lg:pr-10 sm:pl-5 ..."><p>Feeds</p></div>
                            {/* <ul className="list-none m-0 ...">
                                <li className="inline  lg:pr-10 sm:pr-5 ..."><img src={logo} className="w-20 ..."/></li>
                                <li className="inline">Feeds</li>
                            </ul> */}
                        </div>
                        {
                        getin===true?
                        <div className="lg:px-10 sm:px-5 flex justify-end items-center ..." onClick={()=>changenav(!enable)}>
                            <div className="lg:pr-10 sm:pr-5 ..."><p>{name}</p></div>
                            <div><img src={usericon} className="w-20 ..."/></div>
                            {/* <ul className="list-none m-0 ...">
                                <li className="inline lg:pr-10 sm:pr-5 ...">{name}</li>
                                <li className="inline"><img src={usericon} className="w-10 ..."/></li>
                            </ul> */}
                        </div>:
                        <div></div>
                        }
                        
                    </div>
                </nav>
            </div>
            {
                enable &&(
                    <div className="flex drop-shadow-lg grow ...">
                        <div className="flex justify-end grow  ...">
                            <ul className="bg-slate-400 absolute ...">
                                <li className="pt-14 pl-24 pr-10 pb-14 hover:bg-sky-700 ...">setting</li>
                                <li className="pl-24 pr-10 pb-12 hover:bg-sky-700 ..." onClick={ef}>Logout</li>
                            </ul>
                        </div>
                    </div>
                )
            }
            
        </div>
        
    );
}
export default Navbar;
