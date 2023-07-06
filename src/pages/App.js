import { useEffect, useState } from "react";
import Feedcard from "../Components/Feedcard";
import NavBar from "../Layouts/Navbar";
import Signin from "./signin";
import Regist from "./Regist";
import Modebar from "../Layouts/Modebar";
import Notifeed from "../Layouts/Notifeed";
import Chathead from "../Components/Chathead";
import Chatheadfeed from "../Layouts/Chatheadfeed";
import Feeds from "../Layouts/feeds";
import Profile from "./profile";
import { useDispatch, useSelector } from "react-redux";
import {
  changefeed,
  changenoti,
  changemsg,
  changeprofile,
  changegetin,
  changeregist,
} from "../Services/action";
import Postscreen from "./Postscreen";
import { useBeforeUnload } from "react-router-dom";
import { Co2Sharp } from "@mui/icons-material";
import Friendrender from "../Layouts/friendsrender";
import io from "socket.io-client";
const socket = io.connect("https://node-server-1ag1.onrender.com");
// const socket = io.connect("http://localhost:3000");
// import './app.css';
// const mapStateToProps=(state)=>{

//   return{

//     feeds:state.feeds,
//     Noti:state.Noti
//   };
// }

function App() {
  const sendmsg = () => {
    // socket.emit();
  };

  const feeds = useSelector((state) => state.feeds);
  const notification = useSelector((state) => state.noti);
  const msg = useSelector((state) => state.msg);
  const profile = useSelector((state) => state.profile);
  const regist = useSelector((state) => state.regist);
  const getin = useSelector((state) => state.getin);
  const [post, setpost] = useState(false);
  const dispatch = useDispatch();

  const feedchange = (value) => {
    dispatch(changefeed(value));
  };
  const notichange = (value) => {
    dispatch(changenoti(value));
  };
  const msgchange = (value) => {
    dispatch(changemsg(value));
  };

  const profilechange = (value) => {
    dispatch(changeprofile(value));
  };
  const [user, setuser] = useState({
    name: "",
    feeds: [],
  });
  const [mode, setmode] = useState("");
  const [friends, setfriends] = useState([]);
  // const[feeds,setfeeds]=useState(true);
  // const[noti,setnoti]=useState(false);
  // const[msg,setmsg]=useState(false);
  // const[profile,setprofile]=useState(false);
  const modechg = (m) => {
    setmode(m);
  };
  const bufferuser = (obj, cmt) => {
    console.log(cmt);
    user.name = obj[0].name;
    if (cmt) {
      obj.map((f) => {
        user.feeds.push(f);
      });
    } else {
    }

    setmode("home");
  };
  const regitstbuff = (obj) => {
    user.name = obj.name;
    setmode("home");
  };

  const bufferfriposts = (obj) => {
    console.log(obj);
    obj.map((f) => {
      friends.push(f);
    });
  };

  // const feedmode = () => {
  //   feedchange(true);
  //   notichange(false);
  //   msgchange(false);
  //   profilechange(false);
  //   setpost(false);
  // };
  // const notimode = () => {
  //   feedchange(false);
  //   notichange(true);
  //   msgchange(false);
  //   profilechange(false);
  //   setpost(false);
  // };
  // const msgmode = () => {
  //   feedchange(false);
  //   notichange(false);
  //   msgchange(true);
  //   profilechange(false);
  //   setpost(false);
  // };
  // const profmode = () => {
  //   feedchange(false);
  //   notichange(false);
  //   msgchange(false);
  //   profilechange(true);
  //   setpost(false);
  // };

  // const postactive = () => {
  //   setpost(true);
  //   changefeed(false);
  //   notichange(false);
  //   msgchange(false);
  //   profilechange(false);
  // };

  // const[getin,setgetin]=useState(false);
  // const [regist,setregist]=useState(false);
  const gfunction = () => {
    dispatch(changegetin(!getin));
  };
  const registfunction = () => {
    dispatch(changeregist(!regist));
  };
  const chg = (obj) => {
    switch (obj) {
      case "home":
        return <Feeds feed={friends} reacter={user.name} />;
      case "noti":
        return <Notifeed />;
      case "post":
        return <Postscreen name={user.name} chg={modechg} />;
      case "mail":
        return <Chatheadfeed />;
      case "prof":
        console.log(user);
        return <Profile name={user.name} feed={user.feeds} />;

      case "friends":
        return <Friendrender />;
      default:
        return (
          <Feeds feed={friends} profile={chg("prof")} reacter={user.name} />
        );
    }
  };
  let Closed = false;

  useEffect(() => {
    const isloggedin = sessionStorage.getItem("getin");
    if (isloggedin === "true") {
      dispatch(changegetin(true));
    }
    socket.on("latestpost", (data) => {
      const updatearray = [...friends, data[0]];
      setfriends(updatearray);
      console.log(updatearray);
    });
  }, [socket]);
  return (
    <div>
      <NavBar
        getin={getin}
        setgetin={gfunction}
        regist={registfunction}
        name={user.name}
        modechg={modechg}
      />
      {getin === true ? (
        <div>
          <div>
            {
              chg(mode)
              // feeds===true?
              // <Feeds feed={friends} profile={profmode}/>:notification===true?<Notifeed/>:msg===true?<Chatheadfeed/>:profile===true?<Profile name={user.name} feed={user.feeds}/>:post===true?<Postscreen/>:<Feeds feed={friends}/>
            }
          </div>

          <Modebar modechg={modechg} />
        </div>
      ) : regist ? (
        <Regist setregist={registfunction} buff={regitstbuff} />
      ) : (
        <div>
          <Signin
            setgetin={gfunction}
            setregist={registfunction}
            buff={bufferuser}
            friposts={bufferfriposts}
          />
        </div>
      )}
    </div>
  );
}

export default App;
