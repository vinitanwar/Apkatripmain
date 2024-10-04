import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { localurl } from "../flightUrls";

export const getAllAirports=createAsyncThunk("/airports",async(info)=>{
const res=await axios.get(`${localurl}/airports?query=${info}`)

return res.data;
})


 

const Allairportslice = createSlice({
    name: "airports",
    initialState: { info: [], isLoading: false, isError: false },
    extraReducers: (builder) => {
      builder.addCase(getAllAirports.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getAllAirports.fulfilled, (state, action) => {
        state.info = action.payload;
        state.isLoading = false;
      });
      builder.addCase(getAllAirports.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
    },
  });
  
  export default Allairportslice.reducer;
  