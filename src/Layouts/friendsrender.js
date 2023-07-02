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
    <div className="flex flex-wrap px-3 mb-24 mt-2">
      {friends.map((e, i) => {
        return <FriendView name={e.name} key={i} />;
      })}
      {/* <FriendView name={"kaung htet mon"} /> */}
    </div>
  );
}

export default Friendrender;
