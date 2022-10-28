import Card from 'react-bootstrap/Card';
import FirstQuestion from './FirstQuestion';
import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from "react-redux/";
import LinearQuestion from './LinearQuestion';
import SecondQuestion from './SecondQuestion';
import {pluscon} from "../../components/Slice/RespondSlice";

function WithHeaderAndQuoteExample(props) {
    const aa=JSON.parse(props.responddata.datalist)
    const dispatch = useDispatch();

    


    

      function SelectCom(e){


        dispatch(pluscon(e.data.id))

        const selectComponent={
            객관식: <FirstQuestion data={e.data} />,
            주관식: <SecondQuestion data={e.data}/>,
            선형배율: <LinearQuestion data={e.data}/>,
          };
        return (selectComponent[e.data.type])
      }

    return (
      aa.map(((datas,idx) => (
        
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