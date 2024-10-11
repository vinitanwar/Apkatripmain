import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import searchFlightslice from "./slices/SearchFlight";
import Allairport from "./slices/Allairportslice";
import topPortsSlice from "./slices/topPortsSlice";
import blogslice from "./slices/blogslice";
import ipslice from "./slices/ipslice";

export const store = configureStore({
  reducer: { searchFlightslice, Allairport, topPortsSlice, blogslice, ipslice },
});
