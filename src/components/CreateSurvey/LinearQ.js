import {useRef, useState} from "react";
import { useSelector, useDispatch } from "react-redux/";
import { changetitle,changecontent} from "../../Slice/OnepageSlice";
import styles from "../Dropdown/Dropdown.module.css";

function LinearQ(props) {

  const data = useSelector((state)=>state.onepage.survey.data);
  const temp= data.filter((data)=>data.id===props.id);
  const title = data.filter(item => item.did === props.id)[0].title;
  const content = data.filter(item => item.did === props.id)[0].content;
  const dispatch = useDispatch();
  const [switchOn, switchChange] = useState(false);
  const [btnclick, setbtnclick] = useState();
  const [question, setquestion] = useState();
  const btnvalue=[1,2,3,4,5]

  const passtitle = (e) =>{
    const passs={
      id: props.id,
      item : e
    }
    dispatch(changetitle(passs));
  
  };

  const toggleActive = (e) => {
    setbtnclick(e)
  };


  const passcontent = (e) =>{
    const passs={
      id: props.id,
      idx:0,
      item : e
    }
    dispatch(changecontent(passs));
      
    
  };

  const option1 = [
    {value: '0', text: '0'},
    {value: '1', text: '1'},
    
  ];
  const [selected1, setSelected1] = useState(option1[0].value);
  const handleChange1 = event => {
    console.log(event.target.value);
    setSelected1(event.target.value);
  };

  const option2 = [
    {value: '1', text: '1'},
    {value: '2', text: '2'},
    {value: '3', text: '3'},
    {value: '4', text: '4'},
    {value: '5', text: '5'},
    {value: '6', text: '6'},
    {value: '7', text: '7'},
    {value: '8', text: '8'},
  ];
  const [selected2, setSelected2] = useState(option2[0].value);
  const handleChange2 = event => {
    console.log(event.target.value);
    setSelected2(event.target.value);
  };


  return (
    <>
      <div className="third">
        <input className="thirdtitle" 
          type = "text"
          value={title}
          placeholder="질문을 입력해주세요."
          onChange ={(e)=>passtitle(e.target.value)} 
        />

        <div className="thirdCon">

          <div className="optionSelect">
            <select value={selected1} onChange={handleChange1}>
              {option1.map(option => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
            <p> ~ </p>
            <select value={selected2} onChange={handleChange2}>
              {option2.map(option => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
          
          
          <div className="conditions">
            <div className="condition">
              <p>{selected1}</p> <input type="text" placeholder="입력1"/><br/>
            </div>
            <div className="condition">
              <p>{selected2}</p> <input type="text" placeholder="입력2"/>
            </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
}

export default LinearQ;