import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser:null,
  error:null,
  loading:false
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart:(state) =>{
        state.loading = true;
        state.error = null;
    },
    signInSccess:(state,action)=>{
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
        
        console.log(state.currentUser);
    },
    signInFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    }
  },
})
export const { signInStart, signInSccess, signInFailure } = UserSlice.actions

export default UserSlice.reducer;