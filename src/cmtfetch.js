import React from "react";

function CmtFetch(id){
    const fetchcmt=()=>{
        fetch('http://localhost:3000/cmtupdate',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                    id:id,
                    })
        }).then(respond=>respond.JSON()).then(data=>console.log(data))
    }
    
}