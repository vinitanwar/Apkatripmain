import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { localurl } from "../flightUrls";
import { apilink } from "../../common";

export const searchFlightApi = createAsyncThunk(
  "/searchFlight",
  async ({
    EndUserIp,
    AdultCount,
    ChildCount,
    InfantCount,
    DirectFlight,
    OneStopFlight,
    JourneyType,
    PreferredAirlines,
    Origin,
    Destination,
    FlightCabinClass,
    PreferredDepartureTime,
    PreferredArrivalTime,
  }) => {


    console.log('fwrfrfreferfe1',InfantCount)
    console.log('fwrfrfreferfe2',EndUserIp)
    console.log('fwrfrfreferfe3',DirectFlight)
    console.log('fwrfrfreferfe4',OneStopFlight)
    console.log('fwrfrfreferfe5',Origin)
    console.log('fwrfrfreferfe6',Destination)
    console.log('fwrfrfreferfe7',FlightCabinClass)
    console.log('fwrfrfreferfe8',PreferredDepartureTime)
    console.log('fwrfrfreferfe9',PreferredArrivalTime)








  
    const data = await axios.post(`${apilink}/search-flights`,{EndUserIp,AdultCount,ChildCount,InfantCount,DirectFlight,OneStopFlight
     ,JourneyType ,PreferredAirlines,Origin,Destination,FlightCabinClass,PreferredDepartureTime,PreferredArrivalTime
    });

console.log('efrwfrwfewfewdataaadadfea',data);

    return data.data;

  }
);

const searchSlice = createSlice({
  name: "searchFlight",
  initialState: { data: [], isLoading: false, isError: false },
  extraReducers: (builder) => {
    builder.addCase(searchFlightApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchFlightApi.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(searchFlightApi.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default searchSlice.reducer;
