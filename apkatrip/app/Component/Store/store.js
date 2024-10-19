import { configureStore } from "@reduxjs/toolkit";

import searchFlightslice from "./slices/SearchFlight";
import Allairport from "./slices/Allairportslice";
import topPortsSlice from "./slices/topPortsSlice";
import blogslice from "./slices/blogslice";
import ipslice from "./slices/ipslice";
import searchreturn from "./slices/searchreturnFlight"
import advanceSearchFlight from "./slices/advance_search_slice"
import citysearch from "./slices/citysearchSlice"
import hotelsSlice from "./slices/hotelsSlices"
import sightseeingslice from "./slices/sightseeingSlice"
import sightseeingGetslice from "./slices/sightseeingGetSlice"


export const store = configureStore({
  reducer: { searchFlightslice, Allairport, topPortsSlice, blogslice, ipslice, searchreturn,advanceSearchFlight,citysearch,hotelsSlice,
    sightseeingslice,sightseeingGetslice
  },
});
