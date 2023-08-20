import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api, { timeout } from "../../../common/axios";
import { setMessage } from "../message";

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ inputData }, thunkAPI) => {
    try {
      const response = await api.post("/onboarding/register", inputData);
      if (response) {
        let { data } = response.data;
        localStorage.setItem("token", data.token);
        localStorage.setItem("step", data.user.registration_step);
        return response.data;
      }
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
export const classSchedule = createAsyncThunk(
  "auth/classSchedule",
  async ({ inputData }, thunkAPI) => {
    try {
      const response = await api.post(
        "/users/class-schedule-drafts",
        inputData
      );
      if (response) {
        let { data } = response.data;
        localStorage.setItem("step", data.registration_step);
        return response.data;
      }
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
export const validateEmail = createAsyncThunk(
  "auth/validateEmail",
  async ({ token }, thunkAPI) => {
    try {
      const response = await api.post("/onboarding/verify-user", token);
      return response.data;
    } catch (error) {
      let message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
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
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await api.post("/login", {
        email,
        password,
      });
      if (response) {
        let { data } = response.data;
        localStorage.setItem("token", data.token);
        localStorage.setItem("step", data.user.registration_step);
        localStorage.setItem("user", data.user);
        return response.data;
      }
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
export const forgotpassword = createAsyncThunk(
  "auth/forgotpassword",
  async ({ email }, thunkAPI) => {
    try {
      const response = await api.post("/onboarding/forgot-password", { email });
      return response.data;
    } catch (error) {
      let message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
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
export const validateForgotPasswordEmail = createAsyncThunk(
  "auth/validateForgotPasswordEmail",
  async ({ token }, thunkAPI) => {
    try {
      const response = awaitapi.post("user/email/validate", token);
      return response.data;
    } catch (error) {
      let message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
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
export const resetpassword = createAsyncThunk(
  "auth/resetpassword",
  async ({ id, password }, thunkAPI) => {
    try {
      const response = await api.post("/onboarding/reset-password", {
        id,
        password,
      });
      return response.data;
    } catch (error) {
      let message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
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
export const refreshpage = createAsyncThunk(
  "auth/refreshpage",
  async ({}, thunkAPI) => {
    try {
      const response = await api.post("user/refresh", {});
      return response.data;
    } catch (error) {
      let message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.response.data.message ||
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
export const logout = createAsyncThunk("auth/logout", async ({}, thunkAPI) => {
  try {
    const response = await api.post("user/logout");
    return response.data;
  } catch (error) {
    let message =
      (error.response && error.response.data && error.response.data.message) ||
      error.response.data.message ||
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
});

const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    });
    builder.addCase(validateForgotPasswordEmail.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(refreshpage.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });
  },
});

const { reducer } = authSlice;
export default reducer;
