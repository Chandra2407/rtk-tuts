import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color:'black',
    bgColor:'white'
}

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        changeTheme:(state)=>{
            if(state.color==='black'){
                state.color = 'white'
                state.bgColor = 'black'
            }
            else{
                state.color = 'black'
                state.bgColor = 'white'
            }
        }
    }
})

export default themeSlice.reducer
export const {changeTheme} = themeSlice.actions