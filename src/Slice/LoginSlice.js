import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: 'CONTINEW',
    pw: '*********',
    isClick: false
}


const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        inputID: (state, action) => {
            state.id = action.payload;
            console.log(state.id);
        },
        inputPW: (state, action) => {
            state.pw = action.payload;
            console.log(state.pw);
        },
        loginClick: (state) => {
            state.isClick = true;
            alert("로그인 성공\n홈페이지로 이동합니다.");
        },  
        signupClick: (state) => {
            state.isClick = true;
            alert("회원가입 페이지로 이동합니다.");
        }
    }
    
});


export const { inputID, inputPW, loginClick, signupClick } =

LoginSlice.actions;
export default LoginSlice.reducer;