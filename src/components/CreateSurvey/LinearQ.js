import {useState } from "react";
import { useSelector, useDispatch } from "react-redux/";
import { changetitle, changeLinear } from "../../Slice/OnepageSlice";


function LinearQ(props) {
  
  const data = useSelector((state)=>state.onepage.survey.data);
  //console.log(data)
  const content = data.filter(item => item.did === props.id)[0].content;
  //console.log(content[0].linear2)
  const title = data.filter(item => item.did === props.id)[0].title;
  const dispatch = useDispatch();


  const passtitle = (e) =>{
    const passs={
      id: props.id,
      item : e
    }
    dispatch(changetitle(passs));
  
  };

  let input1 = (content[0].linear1con)
  let input2 = (content[0].linear2con)
  let sel1 = (content[0].linear1)
  let sel2 = (content[0].linear2)
  const passcontent = (e) =>{
 
    if (e.includes("input1"))  {
      e = e.replaceAll('input1','')
      input1 = e
    } else if (e.includes("input2")) {
      e = e.replaceAll("input2","")
      input2 = e
    } else if (e.includes("22"))  {
      e = e.replaceAll('22','')
      sel2 = e
    } else if (e.includes("11"))  {
      e = e.replaceAll('11','')
      sel1 = e
    } 
    
    const passs={
      id: props.id,
      idx1: sel1,
      idx2: sel2,
      item1 : input1,
      item2 : input2,
    }
    dispatch(changeLinear(passs));
  };


  const option1 = [
    {value: '0', text: '0'},
    {value: '1', text: '1'},
    
  ];
  
  const [selected1, setSelected1] = useState(
    (content[0].linear1) === (option1[0].value)
    ? option1[0].value
    : ( content[0].linear1 === undefined
      ? option1[0].value
      : content[0].linear1
    )

  );
  

  const handleChange1 = event => {
    setSelected1(event.target.value);
    passcontent("11"+event.target.value);
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
  const [selected2, setSelected2] = useState(
    (content[0].linear2) === (option2[0].value)
    ? option2[0].value
    : ( content[0].linear2 === undefined
      ? option2[0].value
      : content[0].linear2
    )
  );
  const handleChange2 = event => {
    setSelected2(event.target.value);
    passcontent("22"+event.target.value);
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
              <p>{selected1}</p> 
              <input type="text" placeholder="입력1"
                value={content[0].linear1con}
                onChange ={(e)=>passcontent("input1"+e.target.value)}
              /><br/>
            </div>
            <div className="condition">
              <p>{selected2}</p> 
              <input type="text" placeholder="입력2"
                value={content[0].linear2con}
                onChange ={(e)=>passcontent("input2"+ e.target.value)}
              />
            </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
}

export default LinearQ;