import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    surveyType: "",
    id : 0,
    QType : { 
        long : 1,
        mult : 1,
        linear: 1
    },
    next : false,
}

export const CreateSurveySlice = createSlice({
    name: 'question',
    initialState,
    reducers:{
        selectOnepage : (state) =>{
            state.surveyType = "onepage"
            state.next = true
            console.log(state.next)
            console.log(state.surveyType)
        },
        selectCard : (state) =>{
            state.surveyType = "card"
            state.next = true
            console.log(state.surveyType)
        },
        shortIncreament: (state) =>{
            state.QType.short +=1
        },
        exit : (state) => {
            state.next = false
            state.surveyType = ""
            state.QType.long = 0
            state.QType.mult = 0
            state.QType.linear = 0

            // state.QType.short = 0
            // state.QType.dropbox = 0
            // state.QType.checkbox = 0
            console.log(state.next)
        },
        create : (state)=>{
            state.id +=1

        }
    }
});

export const {selectOnepage, selectCard, increament, exit} = CreateSurveySlice.actions;
export default CreateSurveySlice.reducer;