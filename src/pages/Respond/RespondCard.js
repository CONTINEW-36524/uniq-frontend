import React, { useEffect, useState, useParams } from 'react';
import { useLocation } from 'react-router-dom';
import "./RespondCard.css"
import Startreturn from '../../components/Respond/Startreturn';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux/";



function RespondCard() {



  const location=useLocation();
  const [responddata,setresponddata] =useState([]);
  const [question, setquestion] = useState();
  const map=new Map();
  

  // 

//    const TestAxios=()=> {
//        axios.get("/api/respond/survey",{params:{url: location.pathname}})
//   .then((response)=> {
//     //2. Parser
//     setresponddata(response.data);
//     // setresponddata(JSON.parse(response.data[0].datalist));
//         console.log(JSON.parse(responddata[0].datalist)[0].type); 
//         console.log(responddata); 
//   }).catch( (error)=> {
//       // 오류발생시 실행
//   })
//   };
//  }

useEffect(()=>{
  console.log(location.pathname)
  axios.get("/api/create/respond",{params:{url: location.pathname}})
  .then((response)=> {
    //2. Parser
    //responddata=response.data;
    // setresponddata(JSON.parse(response.data[0].datalist));
        //console.log(JSON.parse(responddata[0].datalist)[0].type); 
        console.log(response.data)
        setresponddata(...responddata, response.data);
        console.log(responddata)

  }).catch(function (error) {
    console.log(error)
      // 오류발생시 실행
  }).then(function() {
      // 항상 실행
  });
}, [])

useEffect(()=>{console.log(responddata);},[responddata])


return( 
  <>
    <Startreturn responddata={responddata}/>
  </>
);
  
}




export default RespondCard;