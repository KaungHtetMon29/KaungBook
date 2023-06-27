import React, { useEffect, useState } from "react";
import FriendView from "../Components/FriendView";

function Friendrender() {
  const [friends, setfriends] = useState([]);
  const URL = process.env.REACT_APP_PUBLIC_URL;
  const fetchdata = async () => {
    try {
      const res = await fetch(`${URL}viewfriends`);
      const data = await res.json();
      setfriends([...friends, ...data]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, [fetchdata]);
  return (
    <div className="flex flex-wrap px-5">
      {friends.map((e, i) => {
        return <FriendView name={e.name} key={i} />;
      })}
      {/* <FriendView name={"kaung htet mon"} /> */}
    </div>
  );
}

export default Friendrender;
