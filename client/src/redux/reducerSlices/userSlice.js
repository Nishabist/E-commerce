import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
 userDetail: {},
 age:50,
  isLoggedIn:false
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginDetails: (state, actions) => {
     return{
      ...state,
      userDetail:actions.payload,
      isLoggedIn:true
     }
    },
   handleLogout: (state) => {
      state.userDetail={}
      state.isLoggedIn=false
    },
    
  }
});

export const {  setLoginDetails,handleLogout  } = userSlice.actions;
export default userSlice.reducer;
