import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid" 
import data from "../../pages/Respond/respondData";

const initialState = {
    survey:{
        surveyid : 0,
        data : 
            [
                {
                   
                }
            ]
    }
    ,
    count: 1,
    }

export const RespondSlice = createSlice({
    name: 'Respond',
    initialState,
    reducers:{
       
        changecontent:(state, action) =>{
            const index = state.survey.data.findIndex((data) => data.id == action.payload.id)

            state.survey.data[index].answer=action.payload.item;
            // console.log(action.payload.id);
        },
        savesurvey:(state, action) =>{
            state.surveyid=action.payload;
        },

        pluscon:(state, action) =>{
            console.log(state.survey.data.findIndex((data) => data.id == action.payload.id))
            if(state.survey.data.findIndex((data) => data.id == action.payload.id)==0)
             state.survey.data.push({id: action.payload, answer: ''})
            
        }
       



    }
});

export const { changecontent, savesurvey,pluscon} = RespondSlice.actions;

export default RespondSlice.reducer;