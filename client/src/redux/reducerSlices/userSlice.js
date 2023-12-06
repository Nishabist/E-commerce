import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
 userDetails: {},
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
      
    },
    
  }
});

export const {  setLoginDetails,handleLogout  } = userSlice.actions;
export default userSlice.reducer;
