import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Isrc : [
        '질문을 입력해주세요',
        '질문을 입력해주세요',
    ],
    Oblist : ['내용', '내용'],
    count: 2,
}

export const OnepageSlice = createSlice({
    name: 'Onepage',
    initialState,
    reducers:{
        increament: (state) =>{
            state.Isrc.push('질문을 입력하세요');
            state.count+=1;
        },
        changeval: (state, action ) =>{
            state.Isrc[0]=action.payload
        },

        conincreament: (state) =>{
            state.Oblist.push('내용');
            console.log(state.Oblist)
        },



    

    }
});

export const {increament, changeval,conincreament} = OnepageSlice.actions;
export default OnepageSlice.reducer;