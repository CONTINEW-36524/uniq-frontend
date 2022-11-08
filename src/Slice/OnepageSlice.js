import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid" 

const initialState = {
    id : uuid(),
    survey : 
        {
            maintitle : '',
            subtitle: '',
            data :[
                { 
                    type : '객관식',
                    title:'' ,
                    content:[{
                        id: uuid(),
                        con:''
                    }]
                },
                {
                    type : '객관식',
                    title:'' ,
                    content:[{
                        id: uuid(),
                        con:''
                    }]
                },
   
            ]
        }
    ,
    count: 2,
    contentcount:1,
    pagecount:1,
    }

export const OnepageSlice = createSlice({
    name: 'Onepage',
    initialState,
    reducers:{
       
        increament: (state) =>{
            state.survey.data.push({id:uuid() , type:'객관식', title:'',content: [{id: uuid(), con:''}]});
            state.count+=1;
        },
        increament2: (state) =>{
            state.survey.data.push({id: uuid() , type:'주관식', title:'',content: [{id: uuid(), con:''}]});
            state.count+=1;
        },
        increament3: (state) =>{
            state.survey.data.push({id: uuid() , type:'선형배율', title:'',content: [{id: uuid(), con:''}]});
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
            const index = state.survey.data.findIndex((data) => data.id == action.payload.id)
            console.log(action.payload.id)
            state.survey.data[index].type=action.payload.item;
            console.log(index);
        },

        changetitle:(state, action) =>{
            const index = state.survey.data.findIndex((data) => data.id == action.payload.id)
            state.survey.data[index].title=action.payload.item;
            // console.log(action.payload.id);
        },
        pluscontent:(state, action) =>{
            const index = state.survey.data.findIndex((data) => data.id == action.payload)

            state.survey.data[index].content.push({id:uuid(), con:''})
 
            // console.log(action.payload.id);
        },
        minuscontent:(state, action) =>{
            const index = state.survey.data.findIndex((data) => data.id == action.payload)
            state.survey.data[index].content.pop()
         
            // console.log(action.payload.id);
        },

        changecontent:(state, action) =>{
            const index = state.survey.data.findIndex((data) => data.id == action.payload.id)
            state.survey.data[index].content[action.payload.idx].con=action.payload.item;
            // console.log(action.payload.id);
        },
        changesurtitle:(state, action) =>{
            state.survey.maintitle=action.payload;

        },
        changesursubtitle:(state, action) =>{
            state.survey.subtitle=action.payload;
            // console.log(action.payload.id);
        },
        deletecontent:(state, action) =>{
            if(state.count>1){
                const id = action.payload;
                const temp = state.survey.data.filter((data) => data.id != id);
                console.log(id)
                state.survey.data = temp
                state.count-=1

                if(state.count==state.pagecount)state.pagecount-=1;
            }
        },

        pluscardpage:(state) =>{
            state.pagecount+=1;
            if(state.pagecount===state.count)
            {
                state.survey.data.push({id: uuid() , type:'객관식', title:'',content: [{id: uuid(), con:''}]});
                state.count+=1
            }
        },

        minuscardpage:(state) =>{
            if(state.pagecount>0){
            state.pagecount-=1;
            }

        },

        pluscardresultpage:(state) =>{
            state.nowQNum+=1;
            if(state.nowQNum===state.count)
            {
                state.nowQNum+=1
            }
        },

        minuscardresultpage:(state) =>{
            if(state.nowQNum>0){
            state.nowQNum-=1;
            }

        },




        deleteinit:(state, action)=>{
            if (action.payload == 0)
            {
                state.pagecount=0
                state.count=1
                state.survey.data.pop()
                state.survey.data.pop()
                state.survey.data.push({id: uuid() , type:'객관식', title:'',content: [{id: uuid(), con:''}]});

            }
            else{
                state.pagecount=0
                state.count=1
                state.survey.data.pop()
            }
        },
        checkReq:(state, action)=>{
            const index = state.data.findIndex((data) => data.id == action.payload.id)
            state.data[index].req = action.payload.req
            console.log(state.data[index].req)
        }
        



    

    }
});

export const {pluscardresultpage, minuscardresultpage, increament, changeval,conincreament, changetype, changetitle, pluscontent,minuscontent, changecontent,changesurtitle, changesursubtitle, increament2, increament3, pluscardpage,minuscardpage, deletecontent, deleteinit, checkReq} = OnepageSlice.actions;

export default OnepageSlice.reducer;