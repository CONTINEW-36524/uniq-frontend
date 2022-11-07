import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid" 
import data from "../../pages/Respond/respondData";
import axios from 'axios';

const initialState = {
    survey:{
        surveyid : 0,
        responddata : []
            
    }
    ,
    count: 1,
    }

export const RespondSlice = createSlice({
    name: 'Respond',
    initialState,
    reducers:{
       
        changecontent:(state, action) =>{
            const index = state.survey.responddata.findIndex((data) => data.id == action.payload.id)

            state.survey.responddata[index].answer=action.payload.item;
            // console.log(action.payload.id);
        },
        savesurvey:(state, action) =>{
            state.survey.surveyid=action.payload;
           
        },

        pluscon:(state, action) =>{
            console.log(state.survey.responddata.findIndex((data) => data.id == action.payload))
            // if(state.survey.responddata.findIndex((data) => data.id == action.payload.id)==-1)
             state.survey.responddata.push({id: action.payload, answer: ''})
            
        },

        postrespond:(state)=>{
            // console.log(state.survey.surveyid);
            axios.post('/api/respond/answer',state.survey
            ).then(function (response) {
                console.log(response)
              })
          .catch(function(){
            console.log('실패함')
          })
        }
       



    }
});

export const { changecontent, savesurvey,pluscon,postrespond} = RespondSlice.actions;

export default RespondSlice.reducer;