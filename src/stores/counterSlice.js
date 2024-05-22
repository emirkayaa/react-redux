import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
    name : 'counter',
    initialState : {
        value: 1
    },
    reducers :{
        incremenet: state =>{
            state.value += 1;
        },
        decrement: state =>{
            state.value -= 1;
        },
        incrementByAmount: (state, action) =>{
            state.value += action.payload;
        }
    }

})

export const {incremenet, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;
