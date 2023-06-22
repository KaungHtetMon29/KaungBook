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
import { useDispatch,useSelector} from "react-redux";
import { changefeed,changenoti,changemsg,changeprofile, changegetin, changeregist } from "../Services/action";
import Postscreen from "./Postscreen";
import { Co2Sharp } from "@mui/icons-material";


// import './app.css';
// const mapStateToProps=(state)=>{
  
//   return{
    
//     feeds:state.feeds,
//     Noti:state.Noti
//   };
// }

function App() {
  const feeds= useSelector(state=>state.feeds);
  const notification=useSelector(state=>state.noti);
  const msg=useSelector(state=>state.msg);
  const profile=useSelector(state=>state.profile);
  const regist=useSelector(state=>state.regist)
  const getin=useSelector(state=>state.getin);
  const [post,setpost]=useState(false);
  const dispatch=useDispatch();
  
  const feedchange=(value=>{
    dispatch(changefeed(value));
  })
  const notichange=(value=>{
    dispatch(changenoti(value));
  })
  const msgchange=(value=>{
    
    dispatch(changemsg(value))
  })

  const profilechange=(value=>{
    dispatch(changeprofile(value));
  })
  const [user,setuser]=useState({
    name:"",
    feeds:[]
  });
  const [mode,setmode]=useState("");
  const [friends,setfriends]=useState([]);
  const logout=()=>{
    user.name=""
    user.feeds=[]
  }
  // const[feeds,setfeeds]=useState(true);
  // const[noti,setnoti]=useState(false);
  // const[msg,setmsg]=useState(false);
  // const[profile,setprofile]=useState(false);
  const modechg=(m)=>{
    setmode(m);
  }
  const bufferuser=(obj)=>{
    console.log(obj.type);
//regist or siginin check
    if(Object.keys(obj).length!==0){
    user.name=obj[0].name;
    obj.map((f)=>{user.feeds.push(f)})
    setmode("home");
    }else{
      user.name=obj.name;
    }
    
    console.log(user)
  }
  const regitstbuff=(obj)=>{
    user.name=obj.name;
    setmode("home");
  }

  const bufferfriposts=(obj)=>{
    obj.map(f=>{
      friends.push(f)
    })
    
    console.log(friends);
  }
  
  const feedmode=()=>{
    feedchange(true);
    notichange(false);
    msgchange(false);
    profilechange(false);
    setpost(false);
  }
  const notimode=()=>{
    feedchange(false);
    notichange(true);
    msgchange(false);
    profilechange(false);
    setpost(false);
  }
  const msgmode=()=>{
    feedchange(false);
    notichange(false);
    msgchange(true);
    profilechange(false);
    setpost(false);
  }
  const profmode=()=>{
    feedchange(false);
    notichange(false);
    msgchange(false);
    profilechange(true);
    setpost(false);
    
  }

  const postactive=()=>{
    setpost(true);
    changefeed(false);
    notichange(false);
    msgchange(false);
    profilechange(false);
   }
  

  
  // const[getin,setgetin]=useState(false);
  // const [regist,setregist]=useState(false);
  const gfunction=()=>{
    dispatch(changegetin(!getin));
  }
  const registfunction=()=>{
    dispatch(changeregist(!regist));
    console.log(regist,getin);
  }
  const chg=(obj)=>{
    switch (obj){
      case "home":return <Feeds feed={friends} profile={profmode} reacter={user.name}/> ;
      case "noti":return <Notifeed/>;
      case "post":return <Postscreen name={user.name} chg={modechg}/>;
      case "mail":return <Chatheadfeed/>;
      case "prof":return <Profile name={user.name} feed={user.feeds}/>;
      default:return <Feeds feed={friends} profile={profmode} reacter={user.name}/>;
    }
    
  }
  useEffect(()=>{
    const isloggedin=localStorage.getItem('getin');
    if(isloggedin==='true'){
      dispatch(changegetin(true));
    }
  },[])
  return (
    <div>
      <NavBar getin={getin} setgetin={gfunction} regist={registfunction} name={user.name} logout={logout}/>
      { 
        getin===true?

        <div>
          
          <div >
            
          {
            chg(mode)
            // feeds===true?
            // <Feeds feed={friends} profile={profmode}/>:notification===true?<Notifeed/>:msg===true?<Chatheadfeed/>:profile===true?<Profile name={user.name} feed={user.feeds}/>:post===true?<Postscreen/>:<Feeds feed={friends}/>
            
          }
          </div>
          
          <Modebar profmode={profmode} feedmode={feedmode} msgmode={msgmode} notimode={notimode} postmode={postactive} modechg={modechg}/>
        </div>
          
        // <div>
        //   <div>
        //     {/* <Feedcard feed={user.feeds}/>
        //     <Feedcard feed={user.feeds}/>
        //     <Feedcard feed={user.feeds}/>
        //     <Feedcard feed={user.feeds}/>
        //     <Feedcard feed={user.feeds}/>
        //     <Feedcard feed={user.feeds}/>
        //     <Feedcard feed={user.feeds}/>
        //     <Feedcard feed={user.feeds}/>
        //     <Feedcard feed={user.feeds}/>
        //     <Feedcard feed={user.feeds}/> */}
        //     <Notifeed/>
        //     {/* <Chatheadfeed/> */}
        //   </div>
        //     <Modebar/>
        // </div>
        :
        regist?
        <Regist setgetin={gfunction} setregist={registfunction} buff={regitstbuff}/>:
        <div>
        <Signin setgetin={gfunction} setregist={registfunction} buff={bufferuser} friposts={bufferfriposts}/>
        </div>
        
      }
      
    </div>
  );
}

export default (App);
