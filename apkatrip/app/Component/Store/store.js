import  {configureStore} from "@reduxjs/toolkit"
import searchFlightslice  from "./slices/SearchFlight"
import Allairport from "./slices/Allairportslice"


export const store=configureStore({
reducer:{searchFlightslice,Allairport},

})