import React, { useState } from "react";
import Feedcard from "../Components/Feedcard";
import "../Assets/Styles/feedview.css";

function Feeds({ feed, reacter }) {
  const [feedstate, setfeedstate] = useState(feed);
  return (
    <div className="lg:mb-5 2xl:mb-5 xl:mb-8 sm:mb-24 xs:mb-24 ">
      {feedstate.length ? (
        feedstate.map((f) => {
          return <Feedcard obj={f} key={f.id} reacter={reacter} />;
        })
      ) : (
        <div className="text-blue-700 flex justify-center items-center m-auto mt-96 flex-col ">
          <p className="text-center opacity-80 ...">
            We got nothing to show you
          </p>
          <p className="text-center font-bold opacity-80 ...">
            Get Some Friends First :D
          </p>
        </div>
      )}
      {/* <div className="">
                <Feedcard obj={f} profile={profile} />
            </div>
            <div className="">
                <Feedcard obj={f}  profile={profile}/>
            </div>
            <div className="">
                <Feedcard obj={f}  profile={profile}/>
            </div>
            <div className="">
                <Feedcard obj={f}  profile={profile}/>
            </div>
            <div className="">
                <Feedcard obj={f} profile={profile}/>
            </div> */}
      {/* {
                arr.map((arr)=>(
                    <Feedcard feed={arr}/>
                ))
            } */}
    </div>
  );
}
export default Feeds;
