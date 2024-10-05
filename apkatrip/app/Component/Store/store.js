import  {configureStore} from "@reduxjs/toolkit"
import searchFlightslice  from "./slices/SearchFlight"
import Allairport from "./slices/Allairportslice"
import topPortsSlice from "./slices/topPortsSlice"
import blogslice from "./slices/blogslice"

export const store=configureStore({
reducer:{searchFlightslice,Allairport,topPortsSlice,blogslice},

})