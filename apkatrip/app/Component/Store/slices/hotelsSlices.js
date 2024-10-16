import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { apilink } from "../../common";

export const getAllhotelsapi=createAsyncThunk("/hotels",async(CityCode)=>{
const res=await axios.post(`${apilink}/hotels`,({CityCode}))

return res.data;
})


 

const hotelsSlice = createSlice({
    name: "hotels",
    initialState: { info: [], isLoading: false, isError: false },
    extraReducers: (builder) => {
      builder.addCase(getAllhotelsapi.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getAllhotelsapi.fulfilled, (state, action) => {
        state.info = action.payload;
        state.isLoading = false;
      });
      builder.addCase(getAllhotelsapi.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
    },
  });
  
  export default hotelsSlice.reducer;
  