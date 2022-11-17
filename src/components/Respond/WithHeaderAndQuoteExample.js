import Card from 'react-bootstrap/Card';
import FirstQuestion from './FirstQuestion';
import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from "react-redux/";
import LinearQuestion from './LinearQuestion';
import SecondQuestion from './SecondQuestion';
import {pluscon} from "../../Slice/RespondSlice";
import FirstContents from './FirstContents';
import RadioQuestion from './RadioQuestion';
import CheckBoxQuestion from './CheckBoxQuestion';
import ShortQuestion from './ShortQuestion';


function WithHeaderAndQuoteExample(props) {
    const dispatch = useDispatch();

    console.log(props.responddata)
    const quest=[];

    
      function SelectCom(e){


        dispatch(pluscon(e.data.id))

        const selectComponent={

            객관식: <RadioQuestion data={e.content} />,
            체크박스: <CheckBoxQuestion />,
            주관식: <ShortQuestion />,
            선형배율: <LinearQuestion />,
          };
        return (selectComponent[e.data.type])
      }

    return (
      props.responddata.map(((datas,idx) => (
        
        <Card className="text-center w-100" >
          <div>
            <Card.Header>Question Number {idx+1}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {' '}
                  
                  <SelectCom data={datas} index={idx}/>
                  {/* <LinearQuestion/> */}
                  
                  {' '}
                </p>

                {/* <footer className="blockquote-footer">
                  
                  (질문 타입에 따라 답 적는칸 다르게 구현해야함)
                </footer> */}
              </blockquote>
            </Card.Body>
          </div>
        </Card>
      )))
        
    );
}

export default WithHeaderAndQuoteExample;