import { useEffect, useState } from "react";
import Feedcard from "./Feedcard";
import NavBar from "./Navbar";
import Signin from "./signin";
import Regist from "./Regist";
import Modebar from "./Modebar";
import Notifeed from "./Notifeed";
import Chathead from "./Chathead";
import Chatheadfeed from "./Chatheadfeed";
import Feeds from "./feeds";
import Profile from "./profile";
import { useDispatch,useSelector} from "react-redux";
import { changefeed,changenoti,changemsg,changeprofile, changegetin, changeregist } from "./action";
import Postscreen from "./Postscreen";

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
    feeds:"bruh"
  });
  // const[feeds,setfeeds]=useState(true);
  // const[noti,setnoti]=useState(false);
  // const[msg,setmsg]=useState(false);
  // const[profile,setprofile]=useState(false);
  const bufferuser=(name,feeds)=>{
    user.name=name;
    user.feeds=feeds
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
  useEffect(()=>{
    fetch('http://localhost:3000/profile',{
      method:'get',
      headers:{'content-type':'application/Json'},
    })
    .then((respond)=>respond.json())
    .then ((data)=>console.log(data))
    .catch((err)=>{
      console.log(err);
    })
  },[])

  
  // const[getin,setgetin]=useState(false);
  // const [regist,setregist]=useState(false);
  const gfunction=()=>{
    dispatch(changegetin(!getin));
  }
  const registfunction=()=>{
    dispatch(changeregist(!regist));
    console.log(regist,getin);
  }
 
  return (
    <div>
      <NavBar getin={getin} setgetin={gfunction} regist={registfunction} name={user.name}/>
      { 
        getin===true?
        
        <div>
          
          <div>
          {
            feeds===true?
            <Feeds uname={user.name} feed={user.feeds} profile={profmode}/>:notification===true?<Notifeed/>:msg===true?<Chatheadfeed/>:profile===true?<Profile feed={user.feeds}/>:post===true?<Postscreen/>:<Feeds feed={user.feeds} uname={user.name}/>
            
          }
          </div>
          
          <Modebar profmode={profmode} feedmode={feedmode} msgmode={msgmode} notimode={notimode} postmode={postactive}/>
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
        <Regist setgetin={gfunction} setregist={registfunction} buff={bufferuser}/>:
        <div>
        <Signin setgetin={gfunction} setregist={registfunction} buff={bufferuser}/>
        </div>
        
      }
      
    </div>
  );
}

export default (App);
