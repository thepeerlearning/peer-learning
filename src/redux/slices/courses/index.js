import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api, { timeout } from "../../../common/axios";
import { setMessage } from "../message";

export const getCourses = createAsyncThunk(
  "courses/getCourses",
  async ({}, thunkAPI) => {
    try {
      const response = await api.get("/courses");
      return response.data;
    } catch (error) {
      let message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.response.data.errors ||
        error.message ||
        error.toString();
      if (error.message === `timeout of ${timeout}ms exceeded`) {
        message = "Response timeout, Retry";
      }
      if (error.message === "Network Error") {
        message = "Please check your network connectivity";
      }
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);
export const activeCourses = createAsyncThunk(
  "courses/activeCourses",
  async ({}, thunkAPI) => {
    try {
      const response = await api.get("/users/courses-subscriptions/active");
      return response.data;
    } catch (error) {
      let message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.response.data.errors ||
        error.message ||
        error.toString();
      if (error.message === `timeout of ${timeout}ms exceeded`) {
        message = "Response timeout, Retry";
      }
      if (error.message === "Network Error") {
        message = "Please check your network connectivity";
      }
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);
const initialState = {
  loading: false,
  data: null,
  error: false,
  activeCourse: null,
  courseLoading: false,
  coursesError: false,
};
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCourses.pending, (state, action) => {
      state.loading = true;
      state.data = null;
      state.error = false;
    });
    builder.addCase(getCourses.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = false;
    });
    builder.addCase(getCourses.rejected, (state) => {
      state.loading = false;
      state.data = null;
      state.error = true;
    });
    builder.addCase(activeCourses.pending, (state, action) => {
      state.courseLoading = true;
      state.activeCourse = null;
      state.error = false;
    });
    builder.addCase(activeCourses.fulfilled, (state, action) => {
      state.courseLoading = false;
      state.activeCourse = action.payload.data;
      state.coursesError = false;
    });
    builder.addCase(activeCourses.rejected, (state) => {
      state.courseLoading = false;
      state.activeCourse = null;
      state.coursesError = true;
    });
  },
});

const { reducer } = coursesSlice;
export default reducer;
