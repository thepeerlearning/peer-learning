import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import coursesReducer from "./slices/courses";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    message: messageReducer,
    courses: coursesReducer,
  },
});
