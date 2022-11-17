import { configureStore, createReducer } from "@reduxjs/toolkit";
import loginReducer from "../Slice/LoginSlice";
import myUniqReducer from "../Slice/HomeSlice"
import OnepageReducer from "../Slice/OnepageSlice"
import createSurveyReducer from "../Slice/CreateSurveySlice.js";
import RespondReducer from "../Slice/RespondSlice";


export const Store = configureStore({
    reducer:{
        loginReducer:loginReducer,
        myUniq:myUniqReducer,
        onepage: OnepageReducer,
        createSurvey : createSurveyReducer,
        respond : RespondReducer
    }
});

