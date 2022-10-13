import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Slice/LoginSlice";
import myUniqReducer from "./Slice/HomeSlice"
import OnepageReducer from "./Slice/OnepageSlice"

export const Store = configureStore({
    reducer:{
        loginReducer:loginReducer,
        myUniq:myUniqReducer,
        onepage: OnepageReducer,
    }
});

