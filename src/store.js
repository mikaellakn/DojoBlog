import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/counter/userSlice';
import counterReducer from "./features/counter/counterSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
  },
})