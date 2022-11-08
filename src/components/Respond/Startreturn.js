import Form from 'react-bootstrap/Form';
import WithHeaderAndQuoteExample from './WithHeaderAndQuoteExample';

function Startreturn(props){
    if(props.responddata.length>0){
      return (
      <>
          {/* <div class='respondContainer'>
              <WithHeaderAndQuoteExample/>
          </div> */}
  
          <div className="container">
            <div className="containerHeader">
              <Form class="form">
                <Form.Group className="mb-3" controlId="formGrouptitle">
                  <h3 class='respondHeadTitle'> {props.responddata[0].maintitle} </h3>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupexplain">
                  <h5 class='respondHeadOverview'> {props.responddata[0].subtitle} </h5>
                </Form.Group>
              </Form>
              
            </div>
  
            <div className="respondContainerContent">
              {/* { datas.map((item,index)=>( 
                <div className="fadein">
                  <DropDown id={item.id}/> 
                </div>
              ))} */}
  
              { <WithHeaderAndQuoteExample responddata={props.responddata} /> }
              
              <div className="respondContainerFooter">
                <button className="w-btn-outline2 w-btn-yellow-outline2" type="button" > 제출하기</button>
              </div>
            </div>
          </div>
      </> 
   );
            }
          }

export default Startreturn;