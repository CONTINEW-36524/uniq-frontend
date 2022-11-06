import Card from 'react-bootstrap/Card';
import RadioQuestion from './RadioQuestion';
import CheckBoxQuestion from './CheckBoxQuestion';
import ShortQuestion from './ShortQuestion';
import LinearQuestion from './LinearQuestion';

function WithHeaderAndQuoteExample(props) {
    const aa=JSON.parse(props.responddata[0].datalist)

    

      function SelectCom(e){
        const selectComponent={
            객관식: <RadioQuestion data={e.content} />,
            체크박스: <CheckBoxQuestion />,
            주관식: <ShortQuestion />,
            선형배율: <LinearQuestion />,
          };
        return (selectComponent[e.type])
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

                  <SelectCom content={datas.content} type={datas.type}/>
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