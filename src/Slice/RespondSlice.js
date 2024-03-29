import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    survey:{
        surveyid : 0,
        responddata : []    
    },
    count: 1,
}

export const RespondSlice = createSlice({
    name: 'Respond',
    initialState,
    reducers:{
        postrespond:(state)=>{
            axios.post('/respond-write-service/api/respond/answer', state.survey
            ).then(function (response) {
                console.log(response)
            })
            .catch(function(){
                console.log('실패함')
            })
        },

        changecontent:(state, action) =>{
            console.log(action.payload.item)
            const index = state.survey.responddata.findIndex((data) => data.rid_question === action.payload.id)
            state.survey.responddata[index].answer=action.payload.item; // 답변 저장
            
            // console.log(action.payload.id);
        },

        

        savesurvey:(state, action) =>{
            console.log(state.survey.responddata);
            state.survey.surveyid=action.payload;
           
        },

        pluscon:(state, action) =>{
           
            // if(state.survey.responddata.findIndex((data) => data.id == action.payload.id)==-1)
            state.survey.responddata.push({rid_question: action.payload, answer: ''})
            console.log(state.survey.responddata.findIndex((data) => data.rid_question === action.payload.id_question))
            
        },

        saverespondanswer:(state, action) =>{

            const index = state.survey.responddata.findIndex((data) => data.rid_question === action.payload);
            console.log(action.payload);
            state.survey.responddata.push({rid_question: action.payload.id, answer: action.payload.item});
            

            console.log(action.payload.id);
        },




    }
});

export const { addcheckboxanswer, saverespondanswer, changecontent, savesurvey, pluscon, postrespond, plusrespondcardpage, minusrespondcardpage} = RespondSlice.actions;

export default RespondSlice.reducer;