import  {configureStore} from "@reduxjs/toolkit"
import searchFlightslice  from "./slices/SearchFlight"


export const store=configureStore({
reducer:{searchFlightslice,},

})