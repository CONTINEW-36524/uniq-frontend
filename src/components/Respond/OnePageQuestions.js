import Card from 'react-bootstrap/Card';
import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from "react-redux/";
import LinearQuestion from './LinearQuestion';
import {pluscon} from "../../Slice/RespondSlice";
import RadioQuestion from './RadioQuestion';
import CheckBoxQuestion from './CheckBoxQuestion';
import ShortQuestion from './ShortQuestion';
import { data } from 'jquery';


function OnePageQuestions(props) {
    const dispatch = useDispatch();

    console.log(props.responddata)

    
      function SelectCom(e){
        console.log(e.data[1][0].type)


        dispatch(pluscon(e.data[1][0].id_question))

        const selectComponent={

          객관식: <RadioQuestion data={e.data[1]} />,
          체크박스: <CheckBoxQuestion data={e.data[1]} />,
          주관식: <ShortQuestion data={e.data[1]} />,
          선형배율: <LinearQuestion data={e.data[1]} />,
        };
        return (selectComponent[e.data[1][0].type])
      }

      //useEffect(()=>{props.responddata.map(function(element){findnum(element)})},[])
    

      
      return(
      <>
        {props.responddata.map((item,idx) => {
          console.log(item)
            return(
              <SelectCom data={item}/>
              // <Card className="text-center w-100" >
              //   <div>
              //     <Card.Header>Question Number {idx+1}</Card.Header>
              //     <Card.Body>
              //       <blockquote className="blockquote mb-0">
              //         <p>
              //         {' '}
              //         <SelectCom data={item}/>
              //         {/* <LinearQuestion/> */}
              //         {' '}
              //         </p>
              //         {/* <footer className="blockquote-footer">
              //           (질문 타입에 따라 답 적는칸 다르게 구현해야함)
              //         </footer> */}
              //       </blockquote>
              //     </Card.Body>
              //   </div>
              // </Card>
            )
            
          })
        }
      </>
    )
        
        
}
              
      
        

export default OnePageQuestions;