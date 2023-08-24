import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api, { timeout } from "../../../common/axios";
import { setMessage } from "../message";
import { HYDRATE } from "next-redux-wrapper";

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ inputData }, thunkAPI) => {
    try {
      const response = await api.post("/onboarding/register", inputData);
      if (response) {
        let { data } = response.data;
        localStorage.setItem("token", data.token);
        localStorage.setItem("step", data.user.registration_step);
        localStorage.setItem("children_id", data.user.children.data[0].id);
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
        localStorage.setItem("courseId", data.course_id);
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

export const initiatePayment = createAsyncThunk(
  "auth/initiatePayment",
  async ({ course_id }, thunkAPI) => {
    try {
      const response = await api.post(
        `/courses/${course_id}/billings/initiate-payment`,
        {}
      );
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
export const validatePayment = createAsyncThunk(
  "auth/validatePayment",
  async ({ token }, thunkAPI) => {
    try {
      const response = await api.get(
        `billings/payment-intents/${token}/verify-payment`
      );
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
        localStorage.setItem("children_id", data.user.children.data[0].id);
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

const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoggedIn = true;
      state.user = payload.data?.user;
    });
    builder.addCase(validateForgotPasswordEmail.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(refreshpage.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload;
    });
  },
});

const { reducer, actions } = authSlice;
export const { logout } = actions;
export default reducer;
