import React, { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux/";
import axios from 'axios';
import {savesurvey, postrespond} from "../../Slice/RespondSlice";
import RespondCard from "./RespondCard";
import RespondOnePage from "./RespondOnePage";

function Respond() {

    const location = useLocation();
    const [responddata,setresponddata] = useState([]);


    useEffect(()=>{
        console.log(location.pathname)
        axios.get("/respond-write-service/api/create/respond",{params:{url: location.pathname}})
        .then((response)=> {
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

    const dispatch = useDispatch();
    const savesurveyid =(e) => {
        // console.log(e.target.value)
        dispatch(savesurvey(Object.entries(responddata)[0][1][0].surveyid));
        dispatch(postrespond());
    }
    console.log(Object.entries(responddata).length)

    const surveyType = "onepage"

    // OnePage형인지 Card형인지 
    if(surveyType === "onepage") {
        return (
            <RespondOnePage responddata={responddata}/>
        );
    } 
    else if (surveyType === "card") {
        return (
            <RespondCard responddata={responddata}/>
        );
    }
}


export default Respond;