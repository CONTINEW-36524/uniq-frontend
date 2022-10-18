import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid" 

const initialState = {
    id : 0,
    survey : 
        {
            title : '',
            subtitle: ''
        }
    ,
    Oblist : ['내용', '내용'],
    count: 2,
    contentcount:1,
    pagecount:1,

    data :[
        { 
            id: uuid(), 
            type : '객관식',
            title:'' ,
            req:false,
            content:[{
                id: 0,
                con:''
            }]
        },
        { 
            id: uuid(), 
            type : '객관식',
            title:'' ,
            req:false,
            content:[{
                id: 0,
                con:''
            }]
        },

    ]
}

export const OnepageSlice = createSlice({
    name: 'Onepage',
    initialState,
    reducers:{
        increament: (state) =>{
            state.data.push({id:uuid() , type:'객관식', title:'',content: [{id: state.count*100, con:''}]});
            state.count+=1;
        },
        increament2: (state) =>{
            state.data.push({id: uuid() , type:'주관식', title:'',content: [{id: state.count*100, con:''}]});
            state.count+=1;
        },
        increament3: (state) =>{
            state.data.push({id: uuid() , type:'선형배율', title:'',content: [{id: state.count*100, con:''}]});
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
            const index = state.data.findIndex((data) => data.id == action.payload.id)
            console.log(action.payload.id)
            state.data[index].type=action.payload.item;
            console.log(index);
        },

        changetitle:(state, action) =>{
            const index = state.data.findIndex((data) => data.id == action.payload.id)
            state.data[index].title=action.payload.item;
            // console.log(action.payload.id);
        },
        pluscontent:(state, action) =>{
            const index = state.data.findIndex((data) => data.id == action.payload)

            state.data[index].content.push({id:(index+100)+state.contentcount, con:''})
            state.contentcount+=1;
            // console.log(action.payload.id);
        },
        minuscontent:(state, action) =>{
            const index = state.data.findIndex((data) => data.id == action.payload)
            state.data[index].content.pop()
            state.contentcount-=1;
            // console.log(action.payload.id);
        },

        changecontent:(state, action) =>{
            const index = state.data.findIndex((data) => data.id == action.payload.id)
            state.data[index].content[action.payload.idx].con=action.payload.item;
            // console.log(action.payload.id);
        },
        changesurtitle:(state, action) =>{
            state.survey.title=action.payload;

        },
        changesursubtitle:(state, action) =>{
            state.survey.subtitle=action.payload;
            // console.log(action.payload.id);
        },
        deletecontent:(state, action) =>{
            if(state.count>1){
                const id = action.payload;
                const temp = state.data.filter((data) => data.id != id);
                console.log(id)
                state.data = temp
                state.count-=1

                if(state.count==state.pagecount)state.pagecount-=1;
            }
        },

        pluscardpage:(state) =>{
            state.pagecount+=1;
            if(state.pagecount===state.count)
            {
                state.data.push({id: uuid() , type:'객관식', title:'',content: [{id: state.count*100, con:''}]});
                state.count+=1
            }
        },

        minuscardpage:(state) =>{
            if(state.pagecount>0){
            state.pagecount-=1;
            }

        },

        deleteinit:(state, action)=>{
            if (action.payload == 0)
            {
                state.pagecount=0
                state.count=1
                state.data.pop()
                state.data.pop()
                state.data.push({id: uuid() , type:'객관식', title:'',content: [{id: state.count*100, con:''}]});

            }
            else{
                state.pagecount=0
                state.count=1
                state.data.pop()
            }
        },
        checkReq:(state, action)=>{
            const index = state.data.findIndex((data) => data.id == action.payload.id)
            state.data[index].req = action.payload.req
            console.log(state.data[index].req)
        }
        



    

    }
});

export const {increament, changeval,conincreament, changetype, changetitle, pluscontent,minuscontent, changecontent,changesurtitle, changesursubtitle, increament2, increament3, pluscardpage,minuscardpage, deletecontent, deleteinit, checkReq} = OnepageSlice.actions;

export default OnepageSlice.reducer;