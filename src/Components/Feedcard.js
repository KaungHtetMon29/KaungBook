import React, { useEffect, useRef, useState } from "react";
import usericon from "../Assets/imgs/user.png";
import like from "../Assets/imgs/like.png";
import haha from "../Assets/imgs/laughter.png";
import love from "../Assets/imgs/thumbs-up.png";
import heart from "../Assets/imgs/heart.png";
import plus from "../Assets/imgs/plus.png";
import "../Assets/Styles/feedcardanimation.css";
import { postData } from "../Middleware/api";

function Feedcard({ obj, profile, reacter }) {
  const URL = process.env.REACT_APP_PUBLIC_URL;
  const [enable, setenable] = useState(false);
  const [cmt, setcmt] = useState(false);
  const [height, setheight] = useState(0);
  const [comment, setcomment] = useState("");
  const [cmts, setcmts] = useState([]);
  const [btmbdr, setbtmbdr] = useState("");
  const dh = useRef();
  var test = 0;
  const cmtliveupdate = (e) => {
    setcomment(e.target.value);
    console.log(comment);
    console.log(reacter);
  };
  const dbupdate = (input) => {
    postData(`${URL}reaction`, { id: obj.id, react: input })
      // fetch(`${URL}reaction`, {
      //   method: "post",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     id: obj.id,
      //     react: input,
      //   }),
      // })
      //   .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const cmtdbupdate = () => {
    console.log(reacter);
    postData(`${URL}cmt`, { id: obj.id, cmter: reacter, cmt: comment })
      // fetch(`${URL}cmt`, {
      //   method: "post",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     id: obj.id,
      //     cmter: reacter,
      //     cmt: comment,
      //   }),
      // })
      //   .then((response) => response.json())
      .then((data) => console.log(data));
  };
  const reactionupdate = () => {
    setenable(!enable);
  };
  const cmtupdate = () => {
    setcmt(!cmt);
    if (btmbdr === "") {
      setbtmbdr("border-b-2");
    } else {
      setbtmbdr("");
    }
  };
  useEffect(() => {
    postData(`${URL}cmtupdate`, obj)
      // fetch(`${URL}cmtupdate`, {
      //   method: "post",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     id: obj.id,
      //   }),
      // })
      //   .then((respond) => respond.json())
      .then((data) => {
        data.map((f) => {
          cmts.push(f);
        });
        console.log(cmts);
      });
    if (!dh?.current?.clientHeight) {
      return;
    }

    setheight(dh?.current?.clientHeight);
  }, []);

  const reaclocation = () => {
    test = height * 0.55;
  };
  return (
    <div
      className="lg:ml-101 lg:pr-64 lg:px-0 lg:py-2 sm:px-5 xs:px-5 sm:py-2 xs:py-2 drop-shadow-md 2xl:px-96 2xl:ml-64 2xl:py-2 xl:px-72 xl:ml-56 xl:py-2 ... parent "
      id="test"
    >
      {reaclocation()}
      {console.log(reacter)}

      <div className=" bg-white h-auto lg:rounded-xl lg:pt-2 2xl:pt-2 sm:rounded-xl xs:rounded-xl sm:pt-2 xs:pt-2 2xl:rounded-xl xl:rounded-xl xl:pt-2 ... parent ">
        <div ref={dh} className="parent">
          <div
            onClick={profile}
            className=" 2xl:py-2 xl:py-1 lg:py-1 xl:px-5 lg: border-gray-300 xl:border-b-2 2xl:border-b-2 xs:border-b-2 sm:border-b-2 sm:pt-1 xs:pt-1 sm:pb-1 xs:pb-1 sm:px-2 xs:px-2 flex items-center lg:text-xl sm:text-base xs:text-base 2xl:text-lg xl:text-xl ..."
          >
            <div>
              <img
                src={usericon}
                className="xl:w-14 lg:w-14 lg:pr-4 sm:pr-2 xs:pr-2 2xl:w-14 2xl:pr-4 sm:w-8 xs:w-8 ..."
              />
            </div>
            <div className="lg:pr-6 sm:pr-2 xs:pr-2 xl:pr-6 ...">
              <p>{obj.name}</p>
            </div>
            {/* <ul className="list-none m-0 lg:text-4xl sm:text-xl ...">
                            <li className="inline lg:pr-6 sm:pr-2 ... ">Img</li>
                            <li className="inline lg:pr-6 sm:pr-2 ...">Name</li>
                        </ul> */}
          </div>
          {enable === true ? (
            <div
              className="lg:pl-2 2xl:pl-2 sm:pl-2 xs:pl-2 flex absolute bg-white drop-shadow-2xl animation rounded-r-full ..."
              id="reactionbar"
              style={{ top: test }}
            >
              <div className="lg:py-3 2xl:py-4 pr-5 sm:py-2 xs:py-2 flex">
                <img
                  src={heart}
                  className="lg:w-12 lg:pr-5 2xl:w-14 2xl:pr-5 sm:w-8 xs:w-8 sm:pr-2 xs:pr-2 ..."
                  onClick={() => {
                    reactionupdate();
                    dbupdate("love");
                  }}
                />
                <img
                  src={like}
                  className="lg:w-12 lg:pr-5 2xl:w-14 2xl:pr-5 xs:w-8 sm:w-8 xs:pr-2 sm:pr-2 ..."
                  onClick={() => {
                    reactionupdate();
                    dbupdate("lke");
                  }}
                />
                <img
                  src={haha}
                  className="lg:w-12 lg:pr-5 2xl:w-14 2xl:pr-5 sm:w-8 xs:w-8 sm:pr-2 xs:pr-2 ..."
                  onClick={() => {
                    reactionupdate();
                    dbupdate("haha");
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="test"></div>
          )}
          <div className="lg:py-4 2xl:py-2 xl:py-4 sm:py-2 xs:py-2 sm:px-2 xs:px-2 lg:text-lg sm:text-sm xs:text-sm  2xl:text-sm xl:text-lg ...">
            {/* <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aspernatur quo sunt, tempora voluptatum numquam iste quam natus velit corporis voluptatibus est obcaecati voluptates amet recusandae minima rem porro aliquid?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aspernatur quo sunt, tempora voluptatum numquam iste quam natus velit corporis voluptatibus est obcaecati voluptates amet recusandae minima rem porro aliquid?
                        </p> */}
            <p className="leading-10 ...">{obj.status}</p>
          </div>
          <div className="lg:px-2 xl:px-5 sm:px-2 xs:px-2 xl:pb-2 lg:pb-2 sm:pb-2 xs:pb-2 2xl:pb-1 lg:text-xs xl:text-sm 2xl:text-sm sm:text-sm xs:text-sm flex">
            <div className="flex items-center grow">
              <div>
                <img
                  src={like}
                  className="lg:w-5 2xl:w-5 xl:w-5 sm:w-4 xs:w-4 ..."
                />
              </div>
              <div>
                <img
                  src={haha}
                  className="lg:w-5 2xl:w-5 xl:w-5 sm:w-4 xs:w-4 ..."
                />
              </div>
              <p className="pl-4 lg:pl-4 sm:pl-2 xs:pl-2">
                {obj.lke + obj.love + obj.haha} reacted
              </p>
            </div>
            <div className="flex items-center sm:px-2 xs:px-2  lg:px-2 ">
              <p className="pr-4 sm:pr-2 xs:pr-2 ">0 comment</p>
              <p>0 share</p>
            </div>
          </div>

          <div
            className={
              "flex w-100 lg:text-base sm:text-base xl:text-base 2xl:text-sm 2xl:border-t-1 xl:border-t-1 xl:border-t-1 sm:border-t-2 xs:border-t-2 lg:border-t-2 lg:border-b-2 border-gray-300 ... " +
              btmbdr
            }
          >
            <div
              className="text-center lg:py-2 2xl:py-2 xl:py-2 lg:border-r-2 2xl:border-r-1 sm:border-r-2 xs:border-r-2 border-gray-300 sm:px-5 xs:px-5 sm:py-1 xs:py-1 w-1/3 hover:bg-blue-500 lg:rounded-bl-xl 2xl:rounded-bl-xl sm:rounded-bl-xl ..."
              onClick={() => {
                reactionupdate();
              }}
            >
              react
            </div>
            <div
              className="text-center lg:py-2 2xl:py-2 xl:py-2 lg:border-r-2 2xl:border-r-1 sm:border-r-2 xs:border-r-2 border-gray-300 sm:px-5 xs:px-5 sm:py-1 xs:py-1 w-1/3 hover:bg-blue-500 ..."
              onClick={() => {
                cmtupdate();
              }}
            >
              cmt
            </div>
            <div className="text-center lg:py-2 2xl:py-2 xl:py-2 sm:px-5 xs:px-5 sm:py-1 xs:py-1 w-1/3 hover:bg-blue-500 lg:rounded-br-xl 2xl:rounded-br-xl sm:rounded-br-xl xs:rounded-br-xl ...">
              share
            </div>
          </div>
        </div>

        {cmt === true ? (
          <div className="lg:text-lg 2xl:text-lg xl:text-lg xs:text-sm ...">
            {cmts.map((f) => {
              return (
                <div
                  className="flex lg:px-5 lg:py-2 xl:py-2 2xl:py-4 bg-slate-200 ml-5 mr-10 my-5 rounded-full items-center sm:py-2 sm:px-5 sm:mx-2 xs:py-2 xs:px-5 xs:mx-2"
                  key={f.cmtid}
                >
                  <div className="flex">
                    <img
                      src={usericon}
                      className="lg:w-10 2xl:w-10 xl:w-10 sm:w-5 xs:w-5 ..."
                    />
                  </div>
                  <div className="flex  lg:pl-5 2xl:pl-5 xl:pl-2 sm:pl-2 xs:pl-2 ...">
                    <p className="font-bold">{f.cmter}</p>
                  </div>
                  <div className="flex  lg:pl-5 2xl:pl-5 xl:pl-2 sm:pl-2 xs:pl-2 ...">
                    <p className="break-all ..."> {f.cmt}</p>
                  </div>
                </div>
              );
            })}

            {/* <div className="flex px-10 py-5 bg-slate-200 ml-10 mr-60 my-10 rounded-full items-center w-auto">
                            <div className="flex"><img src={usericon} className="w-10"/></div>
                            <div className="flex  pl-5"><p className="font-bold">Name</p></div>
                            <div className="flex  pl-5"><p> bonjour</p></div>
                            
                        </div> */}
            <div className="flex bg-slate-200 py-5 px-5 xl:py-2 sm:py-2 xs:py-2 lg:py-2 text-white">
              <div className="flex grow justify-center items-center">
                <div className="pr-5 ">
                  <img
                    src={plus}
                    className="lg:w-11 xl:w-11 sm:w-11 xs:w-11 2xl:w-16 bg-blue-700 xl:p-2 lg:p-2 sm:p-2 xs:p-2 2xl:p-4 rounded-full"
                  />
                </div>
                <div className="w-3/4 flex text-black">
                  <input
                    onChange={cmtliveupdate}
                    type="text"
                    placeholder="comment..."
                    className="py-5 px-5 xl:py-2 sm:py-1 xs:py-1 w-full rounded-l-full"
                  />
                </div>
                <div className="w-1/4 pl-0 flex">
                  <button
                    className="bg-blue-700 py-5 xl:py-2 sm:py-1 xs:py-1 sm:pl-4 xs:pl-2 pl-10 pr-10 rounded-r-full w-full"
                    onClick={cmtdbupdate}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Feedcard;
