import React, { useState } from "react";
import home from "./imgs/home.png";
import mail from "./imgs/mail.png";
import plus from "./imgs/plus.png";
import user1 from "./imgs/user(1).png";
import bell from "./imgs/bell.png";

function Modebar({profmode,feedmode,msgmode,notimode,postmode,modechg}){
    // const [LOn,setLOn]=useState("opacity-0");
    // const lockon=()=>{
    //     setLOn("opacity-100");
    // }
return(
    <div className="fixed bottom-0 flex w-full border-t-4">
        <div className="flex grow bg-white pt-12 pb-5 w-full px-10 justify-center items-center drop-shadow-lg ...">
            <div className="pr-20" onClick={()=>modechg("home")}><img src={home} className="w-20 pb-2 hover:border-b-8 hover:border-blue-700 ..."/></div>
            <div className="px-20 ..." onClick={()=>modechg("noti")}><img src={bell} className="w-20 pb-2 hover:border-b-8 hover:border-blue-700  ..." /></div>
            <div className="px-10 ..." onClick={()=>modechg("post")} ><img src={plus} className="w-40 p-10 rounded-full bg-blue-700 ..."/></div>
            <div className="px-20" onClick={()=>modechg("mail")}><img src={mail} className="w-20 pb-2 hover:border-b-8 hover:border-blue-700 ..."/></div>
            <div className="pl-20" onClick={()=>modechg("prof")}><img src={user1} className="w-20 pb-2 hover:border-b-8 hover:border-blue-700 ..."/></div>
        </div>
    </div>
);
}
{/* <div className="bg-blue-700 rounded-full text-sm">.</div> */}
export default Modebar;