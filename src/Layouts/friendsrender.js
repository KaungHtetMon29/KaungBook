import React, { useEffect, useState } from "react";
import FriendView from "../Components/FriendView";
import { getData } from "../Middleware/api";

function Friendrender() {
  const [friends, setfriends] = useState([]);
  const URL = process.env.REACT_APP_PUBLIC_URL;
  const fetchdata = async () => {
    try {
      getData(`${URL}viewfriends`).then((data) => {
        setfriends([...friends, ...data]);
      });
      // const res = await fetch(`${URL}viewfriends`);
      // const data = await res.json();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="flex flex-wrap px-3 xl:px-0 mb-5 2xl:mb-2 xl:mb-2 lg:mb-2 mt-2 2xl:mx-96 2xl:ml-98 xl:mx-72 xl:ml-97 lg:ml-101 lg:mr-64 xs:mb-20 sm:mb-24">
      {friends.map((e, i) => {
        return <FriendView name={e.name} key={i} />;
      })}
      {/* <FriendView name={"kaung htet mon"} /> */}
    </div>
  );
}

export default Friendrender;
