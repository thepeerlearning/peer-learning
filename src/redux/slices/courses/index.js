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
        error?.response?.data?.message ||
        error?.response?.data?.errors ||
        error?.message ||
        error?.toString();
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
        error?.response?.data?.message ||
        error?.response?.data?.errors ||
        error?.message ||
        error?.toString();
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

export const classSchedules = createAsyncThunk(
  "courses/classSchedules",
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await api.get(
        `admin/courses-subscriptions/course-outlines?page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      let message =
        error?.response?.data?.message ||
        error?.response?.data?.errors ||
        error?.message ||
        error?.toString();
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
export const updateClassStatus = createAsyncThunk(
  "courses/updateClassStatus",
  async ({ id, inputData }, thunkAPI) => {
    try {
      const response = await api.patch(
        `users/courses-subscriptions/course-outlines/${id}/instructor/change-status`,
        inputData
      );
      return response.data;
    } catch (error) {
      let message =
        error?.response?.data?.message ||
        error?.response?.data?.errors ||
        error?.message ||
        error?.toString();
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
  schedules: null,
  scheduleLoading: false,
  scheduleError: false,
};
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    refresh: (state) => {
      state.error = false;
      state.coursesError = false;
    },
  },
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

    builder.addCase(classSchedules.pending, (state) => {
      state.scheduleLoading = true;
      state.schedules = null;
      state.scheduleError = false;
    });
    builder.addCase(classSchedules.fulfilled, (state, { payload }) => {
      state.scheduleLoading = false;
      state.schedules = payload;
      state.scheduleError = false;
    });
    builder.addCase(classSchedules.rejected, (state) => {
      state.scheduleLoading = false;
      state.schedules = null;
      state.scheduleError = true;
    });
  },
});
const { reducer, actions } = coursesSlice;
export const { refresh } = actions;
export default reducer;
