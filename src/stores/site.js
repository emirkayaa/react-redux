import { createSlice } from '@reduxjs/toolkit'


export const theme = createSlice({
    name : 'theme',
    initialState : {
        dark: false,
        language: 'tr'
    },
    reducers :{
       changeTheme: state =>{
           state.dark = !state.dark;
       },
         changeLanguage: (state, action) =>{
              state.language = action.payload;
         }
    }

})

export const {changeLanguage, changeTheme} = theme.actions;
export default theme.reducer;
