import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: '',
    myUniq : ['init1', 'init2','init3'],
    isLogin : false, 
    src : "image/desktop_logout.png",
    cnt : 3
}

export const mainSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        reset: (state) =>{
            state.myUniq = initialState.myUniq;
            state.id = initialState.id
            state.isLogin = false
            state.src = "img/desktop_logout.png"
        },

        login:(state, action)=>{
            state.id = action.payload;
            state.myUniq = [action.payload+"1", action.payload+"2", action.payload+"3"];
            state.isLogin = true;
            state.src = "img/desktop_login.png"
        },
        increse:(state)=>{
            state.cnt +=1
        }
    }
});

export const { reset, login, increse} = mainSlice.actions;
export default mainSlice.reducer;