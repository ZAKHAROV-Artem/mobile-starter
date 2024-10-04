import { combineReducers } from "@reduxjs/toolkit";

import themeSlice from "../slices/theme-slice";

const rootReducer = combineReducers({
  theme: themeSlice,
});

export default rootReducer;
