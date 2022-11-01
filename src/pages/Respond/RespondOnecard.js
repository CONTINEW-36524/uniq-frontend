
import React, { useEffect,useState } from 'react';
import data from './respondData';
import { useLocation, useParams } from 'react-router-dom';
import "./respondOnecard.css"
import Startreturn from '../../components/respond/Startreturn';

import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux/";
import DropDown from "../../components/createsurvey/dropdown";


function RespondOnecard() {
  let [datas] = useState(data)
  const survey = useSelector((state)=>state.onepage.survey);
  const dispatch = useDispatch();
  const count = useSelector((state)=>state.onepage.count);
  const location=useLocation();
  const [responddata,setresponddata] =useState([]);
  const [question, setquestion] = useState();
  const { respondId} = useParams();

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
  axios.get("/api/respond/survey",{params:{url: respondId}})
  .then((response)=> {
    //2. Parser
    //responddata=response.data;
    // setresponddata(JSON.parse(response.data[0].datalist));
        //console.log(JSON.parse(responddata[0].datalist)[0].type); 
        setresponddata(response.data);
  }).catch(function (error) {
    console.log(error)
      // 오류발생시 실행
  }).then(function() {
      // 항상 실행
  });
}, [])

useEffect(()=>{console.log(responddata);},[responddata])
console.log(respondId)


return( 
  <>
    <Startreturn responddata={responddata}/>
  </>
);
  
}





export default RespondOnecard;