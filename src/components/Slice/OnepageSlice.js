import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Isrc : [
        '질문을 입력해주세요',
        '질문을 입력해주세요',
    ],
    Oblist : ['내용', '내용'],
    count: 2,
    contentcount:1,

    data :[
        {
            id: 0,
            type : '객관식',
            title:'' ,
            content:[{
                id: 0,
                con:''
            }]

        },
        {
            id: 1,
            type : '객관식',
            title:'' ,
            content:[{
                id: 100,
                con:''
            }]
        }
    ]
}

export const OnepageSlice = createSlice({
    name: 'Onepage',
    initialState,
    reducers:{
        increament: (state) =>{
            state.data.push({id: state.count , type:'객관식'});
            state.count+=1;
        },
        changeval: (state, action ) =>{
            state.Isrc[0]=action.payload
        },

        conincreament: (state) =>{
            state.Oblist.push('내용');
            console.log(state.Oblist)
        },

        changetype:(state, action) =>{
            state.data[action.payload.id].type=action.payload.item;
            // console.log(action.payload.id);
        },

        changetitle:(state, action) =>{
            state.data[action.payload.id].title=action.payload.item;
            // console.log(action.payload.id);
        },
        pluscontent:(state, action) =>{
            state.data[action.payload].content.push({id:(action.payload*100)+state.contentcount, con:''})
            state.contentcount+=1;
            // console.log(action.payload.id);
        },

        changecontent:(state, action) =>{
            state.data[action.payload.id].content[action.payload.idx].con=action.payload.item;
            // console.log(action.payload.id);
        },

        



    

    }
});

export const {increament, changeval,conincreament, changetype, changetitle, pluscontent, changecontent} = OnepageSlice.actions;
export default OnepageSlice.reducer;