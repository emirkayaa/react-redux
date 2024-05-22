import { createSlice } from "@reduxjs/toolkit";

    export const auth = createSlice({
        name:'auth',
        initialState:{
            isAuth:false
        },
        reducers:{
            login:(state,action)=>{
                state.isAuth = action.payload;
            },
            logout:(state)=>{
                state.isAuth = false;
            }
        }
    })

    export const { login, logout } = auth.actions;
    export default auth.reducer;