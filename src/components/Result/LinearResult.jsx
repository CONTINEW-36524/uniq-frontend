import "./result.css"

function CountChange(props) {
        
    props.count++
}

function LinearResult() {

    const LinearAnswer = {
        information:{
            range1: 1, range2: 5, 
            range1Content: '전혀 그렇지 않다.', range2Content: '매우 그렇다.'
        },
        // 응답 예시
        responds: [
            {id: 1, content: 2},
            {id: 2, content: 4},
            {id: 3, content: 4},
            {id: 4, content: 5},
        ]
    }

    // 어레이 만들기
    const array = [
        {content: 1, count: 0},
        {content: 2, count: 0},
        {content: 3, count: 0},
        {content: 4, count: 0},
        {content: 5, count: 0},
        {content: 6, count: 0},
        {content: 7, count: 0},
        {content: 8, count: 0},
    ];


    for (let j=0; j<LinearAnswer.responds.length; j++) {
        
        if (LinearAnswer.responds[j].content === 1) {
            CountChange(array[0])
            
        } else if (LinearAnswer.responds[j].content === 2){
            CountChange(array[1])
            
        } else if (LinearAnswer.responds[j].content === 3){
            CountChange(array[2])
            
        } else if (LinearAnswer.responds[j].content === 4){
            CountChange(array[3])
            
        } else if (LinearAnswer.responds[j].content === 5){
            CountChange(array[4])
            
        } else if (LinearAnswer.responds[j].content === 6){
            CountChange(array[5])
            
        } else if (LinearAnswer.responds[j].content === 7){
            CountChange(array[6])
            
        } else if (LinearAnswer.responds[j].content === 8){
            CountChange(array[7])
            
        } else {
            console.log('else')
        }
    }

    let data = [1, 2, 3, 4, 5];

    return(
        <div className="LinearContainer">
            
            <p className='leftTextResult'> {LinearAnswer.information.range1Content} </p>
            <div className="LinearBtnResult">
                
                <div className="LinearBtn1Result">
                    {data.map((item, idx) => {
                        return (
                            <button
                                value={idx}
                            >
                                {item}
                            </button>
                        );
                    })}
                </div>

                <div className="LinearBtn2Result">
                    
                    {array.map((item, idx) => {
                        if(idx < LinearAnswer.responds.length+1) {
                            return (
                                <button
                                    className="countContent"
                                >
                                    {array[idx].count}
                                </button>  
                            );
                        }
                        
                    })}
                </div>
            </div>

            <p className='rightTextResult'>{LinearAnswer.information.range2Content}</p>
           
        </div>
    );
}




export default LinearResult;