import { combineReducers } from "@reduxjs/toolkit";
import { usersSlice } from "../slices/users";

export const rootReducer = combineReducers({
    [usersSlice.name]: usersSlice.reducer,
  });