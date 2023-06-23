import React, { useState } from "react";

function Regist({ setregist, buff }) {
  const URL = process.env.REACT_APP_PUBLIC_URL;
  const [register, setregister] = useState({
    email: "",
    name: "",
    pw: "",
  });
  const onEmailchange = (e) => {
    register.email = e.target.value;
  };
  const onUsernamechange = (e) => {
    register.name = e.target.value;
  };
  const onPwchange = (e) => {
    register.pw = e.target.value;
  };
  const click = () => {
    buff(register);
    fetch(`${URL}register`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: register.email,
        name: register.name,
        pw: register.pw,
      }),
    }).then((res) => {
      alert("successfully registered");
      setregist();
    });
  };

  return (
    <div className="shadow-md lg:m-auto lg:w-1/2 lg:my-96 2xl:m-auto 2xl:w-3/12 2xl:mt-20 xl:m-auto sm:m-auto sm:w-3/4 sm:mt-10 xl:w-4/12 xl:mt-10 lg:text-4xl sm:text-base xl:text-xl 2xl:text-lg bg-slate-200 rounded-3xl sm:rounded-lg flex flex-col justify-center">
      <div className="lg:pb-5 lg:pt-10 xl:pt-3 xl:pb-5 xl:px-10 2xl:pt-3  2xl:pb-5 lg:px-20 2xl:px-10 sm:pb-1 sm:pt-5 sm:px-5">
        <form className="flex flex-col lg:py-4 2xl:py-3 xl:py-1 sm:py-2 form">
          <label className="grow lg:py-4 2xl:py-2 2xl:px-2 lg:px-4 sm:py-2 sm:px-2">
            Enter Email
          </label>
          <input
            onChange={onEmailchange}
            placeholder="Your Email address"
            className="lg:rounded-2xl sm:rounded-xl border-2 lg:py-8 2xl:py-4 lg:px-6 2xl:px-4 sm:py-2 sm:px-2 xl:py-5"
          />
        </form>
        <form className="flex flex-col lg:py-4 2xl:py-3 sm:py-2 xl:py-1 form">
          <label className="grow lg:py-4 2xl:py-2 2xl:px-2 lg:px-4 sm:py-2 sm:px-2">
            Enter Username
          </label>
          <input
            onChange={onUsernamechange}
            placeholder="Your Username "
            className="lg:rounded-2xl sm:rounded-xl border-2 lg:py-8 2xl:py-4 lg:px-6 2xl:px-4 sm:py-2 sm:px-2 xl:py-5"
          />
        </form>
        <form className="flex flex-col lg:py-4 2xl:py-3 sm:py-2 xl:py-1 form">
          <label className="grow lg:py-4 2xl:py-2 2xl:px-2 lg:px-4 sm:py-2 sm:px-2">
            Enter Password
          </label>
          <input
            onChange={onPwchange}
            placeholder="Your Password "
            className="lg:rounded-2xl sm:rounded-xl border-2 lg:py-8 2xl:py-4 lg:px-6 2xl:px-4 sm:py-2 sm:px-2 xl:py-5"
          />
        </form>
      </div>
      <div className="flex justify-center pb-10 text-white">
        <button
          className="lg:px-10 2xl:px-10 xl:px-10 xl:py-3 xl:rounded-lg 2xl:py-2 2xl:rounded-lg lg:py-5 bg-blue-400 lg:m-2 lg:rounded-2xl sm:px-6 sm:py-2 sm:m-1 sm:rounded-lg"
          onClick={setregist}
        >
          Cancel
        </button>
        <button
          className="lg:px-10 2xl:px-10 xl:px-10 xl:py-3 xl:rounded-lg 2xl:py-2 2xl:rounded-lg lg:py-5 bg-blue-400 lg:m-2 lg:rounded-2xl sm:px-6 sm:py-2 sm:m-1 sm:rounded-lg"
          onClick={click}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Regist;
