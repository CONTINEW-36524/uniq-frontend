import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    surveyType: "",
    QType : { 
        short : 1,
        long : 1,
        mult : 1,
        checkbox : 1,
        dropbox : 1,
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
            state.QType.short = 0
            state.QType.long = 0
            state.QType.mult = 0
            state.QType.dropbox = 0
            state.QType.linear = 0
            state.QType.checkbox = 0
            console.log(state.next)
        }
    }
});

export const {selectOnepage, selectCard, increament, exit} = CreateSurveySlice.actions;
export default CreateSurveySlice.reducer;