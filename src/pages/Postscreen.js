import React, { useState } from "react";
import plus from "../Assets/imgs/plus.png";
import usericon from "../Assets/imgs/user.png";
import locationicon from "../Assets/imgs/location.png";
import feelingicon from "../Assets/imgs/happy-face.png";
import "../Assets/Styles/post.css";
import { postData } from "../Middleware/api";

function Postscreen({ name, chg }) {
  const URL = process.env.REACT_APP_PUBLIC_URL;
  const [userpost, setuserpost] = useState({
    name: "",
    status: "",
  });
  const post = (e) => {
    setuserpost({
      name: name,
      status: e.target.value,
    });
    console.log(e.target.value);
  };
  const upload = () => {
    postData(`${URL}feedupload`, userpost)
      // fetch(`${URL}feedupload`, {
      //   method: "post",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     name: name,
      //     post: status,
      //   }),
      // })
      //   .then((res) => res.json())
      .then((data) => {
        if (data !== "Type something in your mind") {
          document.getElementById("textform").value = "";
        } else {
          alert(data);
        }
      });
  };
  // const postform= document.getElementById("form");
  // postform.addEventListener("change",(e)=>{

  // })
  return (
    <div className="b-10 2xl:mx-96 xl:mx-72 2xl:ml-98 xl:ml-97 lg:mr-64 lg:ml-101 sm:ml-0 xs:ml-0">
      <div className="flex items-center lg:text-xl 2xl:text-2xl xl:text-xl sm:text-base xs:text-base bg-white font-bold lg:py-3 2xl:py-3 xl:py-3 sm:py-3 xs:py-3">
        <div>
          <img
            src={usericon}
            className="lg:w-20 2xl:w-20 xl:w-20 sm:w-16 xs:w-16 lg:px-5 2xl:px-5 xl:px-5 sm:pl-5 sm:pr-2 xs:pl-5 xs:pr-2"
          />
        </div>
        <div className="grow">
          <p>{name}</p>
        </div>
        <div>
          <button
            onClick={upload}
            className="lg:border-l-2 2xl:border-l-4 xl:border-l-2 border-black sm:border-l-2 xs:border-l-2 lg:py-2 xl:py-3 xl:pl-5 2xl:py-2 lg:pl-10 2xl:pl-5 pr-10 sm:pr-5 xs:pr-5 sm:pl-5 xs:pl-5 w-full text-black font-bold"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:py-5 lg:px-5 2xl:py-5 2xl:px-5 xl:py-5 xl:px-5 sm:py-2 xs:py-2 sm:px-5 xs:px-5  text-white lg:text-xl 2xl:text-2xl xl:text-xl ">
        <div className="flex grow justify-center">
          <div className="lg:pr-5 2xl:pr-5 xl:pr-5 sm:pr-2 xs:pr-2 w-max">
            <img
              src={plus}
              className="lg:w-36 2xl:w-36 xl:w-36 bg-blue-700 lg:p-3 2xl:p-3 xl:p-3 sm:w-10 xs:w-10 sm:p-2 xs:p-2 rounded-full "
            />
          </div>
          <div className="w-screen flex text-black textform lg:h-60 2xl:h-60 sm:h-36 xs:h-36 xl:h-48">
            <textarea
              className="w-full rounded-xl bg-white p-5 sm:py-2 xs:py-2 xs:px-2 sm:px-2 ..."
              id="textform"
              placeholder="text here"
              onChange={post}
            ></textarea>
            {/* <span   role="textbox" contentEditable="true" id="form"/> */}
          </div>
        </div>
        <div className="lg:mt-5 sm:mt-5 xs:mt-5 2xl:mt-5 xl:mt-5 lg:mb-5 2xl:mb-5 xl:mb-5 lg:py-5 sm:py-3 xs:py-3 xl:py-5 2xl:py-5 rounded-xl bg-white text-black font-bold shadow-xl flex items-center">
          <div>
            <img
              src={locationicon}
              className="lg:w-16 2xl:w-16 xl:w-14 sm:w-12 xs:w-12 pl-5"
            />
          </div>
          <div>
            <p className="lg:px-5 2xl:px-5 xl:px-5 lg:text-3xl 2xl:text-3xl xl:text-3xl">
              Location
            </p>
          </div>
        </div>
        <div className="lg:py-5 lg:mb-5 sm:mt-2 xs:mt-2 2xl:py-5 2xl:mb-5 sm:py-3 xs:py-3 rounded-xl bg-white text-black font-bold shadow-xl flex items-center">
          <div>
            <img
              src={feelingicon}
              className="lg:w-16 2xl:w-16 xl:w-14 sm:w-12 xs:w-12 pl-5"
            />
          </div>
          <div>
            <p className="lg:px-5 2xl:px-5 xl:px-5 lg:text-3xl 2xl:text-3xl xl:text-3xl">
              Feeling
            </p>
          </div>
        </div>
        {/* <div className="w-1/4 pl-10 h-20 ">
                        <button className="bg-blue-700 py-5 pl-10 pr-10 rounded-xl  w-full ">Submit</button>
                </div> */}
      </div>
    </div>
  );
}

export default Postscreen;
