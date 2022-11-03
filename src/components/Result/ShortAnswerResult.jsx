import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import "./result.css"

const ShortAnswerResult = (props) => {
    
    const state = {
        responds: [
            {id: 1, content:'주관식 답변1'},
            {id: 2, content:'주관식 답변2'},
            {id: 3, content:'주관식 답변3'},
        ]
    }

    return (
        <div>
        { 
            state.responds.map((item) => { 
                return (
                    <Form className="shortAnswer">
                        <Form.Group className="mb-3" controlId="formGroupexplain">
                            <Form.Control type="explain" multiline rows={2} value={item.content} />
                        </Form.Group>
                    </Form>
                )
            })
        }

        </div>
    );
}

export default ShortAnswerResult;