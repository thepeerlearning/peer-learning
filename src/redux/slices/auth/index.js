import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api, { timeout } from "../../../common/axios"
import { setMessage } from "../message"
import { HYDRATE } from "next-redux-wrapper"
import Cookies from "js-cookie"

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ inputData }, thunkAPI) => {
    try {
      const response = await api.post("register", inputData)
      if (response) {
        let { data } = response.data
        Cookies.set("token", data.token)
        Cookies.set("step", "account_created")
        Cookies.set("c_id", data.id)
        return response.data
      }
    } catch (error) {
      let message =
        error?.response?.data?.message ||
        error?.response?.data?.meta.message ||
        error?.response?.data?.errors ||
        error?.toString()
      if (error.message === `timeout of ${timeout}ms exceeded`) {
        message = "Response timeout, Retry"
      }
      if (error.message === "Network Error") {
        message = "Please check your network connectivity"
      }
      thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue()
    }
  }
)
export const classSchedule = createAsyncThunk(
  "auth/classSchedule",
  async ({ inputData }, thunkAPI) => {
    try {
      const response = await api.post("schedule", inputData)
      if (response) {
        let { data } = response.data
        Cookies.set("cl_id", data.id)
        Cookies.set("step", "class_schedule")

        return response.data
      }
    } catch (error) {
      let message =
        error?.response?.data?.message ||
        error?.response?.data?.meta.message ||
        error?.response?.data?.errors ||
        error?.toString()
      if (error.message === `timeout of ${timeout}ms exceeded`) {
        message = "Response timeout, Retry"
      }
      if (error.message === "Network Error") {
        message = "Please check your network connectivity"
      }
      thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue()
    }
  }
)

export const initiatePayment = createAsyncThunk(
  "auth/initiatePayment",
  async ({ course_id }, thunkAPI) => {
    try {
      const response = await api.post(`initiate`, {
        class_id: course_id,
      })
      if (response) {
        Cookies.remove("step")
        Cookies.remove("c_id")
        return response.data
      }
    } catch (error) {
      let message =
        error?.response?.data?.message ||
        error?.response?.data?.meta.message ||
        error?.response?.data?.errors ||
        error?.toString()
      if (error.message === `timeout of ${timeout}ms exceeded`) {
        message = "Response timeout, Retry"
      }
      if (error.message === "Network Error") {
        message = "Please check your network connectivity"
      }
      thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue()
    }
  }
)
export const validatePayment = createAsyncThunk(
  "auth/validatePayment",
  async ({ token }, thunkAPI) => {
    try {
      const response = await api.get(`/verify-payment/${token}`)
      if (response) {
        console.log("validated response.data", response.data)
        Cookies.remove("step")
        Cookies.remove("c_id")
        Cookies.remove("cl_id")
        return response.data
      }
    } catch (error) {
      let message =
        error?.response?.data?.message ||
        error?.response?.data?.meta.message ||
        error?.response?.data?.errors ||
        error?.toString()
      if (error.message === `timeout of ${timeout}ms exceeded`) {
        message = "Response timeout, Retry"
      }
      if (error.message === "Network Error") {
        message = "Please check your network connectivity"
      }
      thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue()
    }
  }
)
export const validateEmail = createAsyncThunk(
  "auth/validateEmail",
  async ({ inputData }, thunkAPI) => {
    try {
      const response = await api.post("verify-email", inputData)
      if (response) {
        Cookies.remove("step")
        return response.data
      }
    } catch (error) {
      let message =
        error?.response?.data?.message ||
        error?.response?.data?.meta.message ||
        error?.response?.data?.errors ||
        error?.toString()
      if (error.message === `timeout of ${timeout}ms exceeded`) {
        message = "Response timeout, Retry"
      }
      if (error.message === "Network Error") {
        message = "Please check your network connectivity"
      }
      Cookies.remove("step")
      thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue()
    }
  }
)
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await api.post("authenticate", {
        email,
        password,
      })

      if (response) {
        let { data } = response.data
        Cookies.set("token", data.jwtToken)
        return response.data
      }
    } catch (error) {
      let message =
        error?.response?.data?.message ||
        error?.response?.data?.meta.message ||
        error?.response?.data?.errors ||
        error?.message ||
        error?.toString()
      if (error.message === `timeout of ${timeout}ms exceeded`) {
        message = "Response timeout, Retry"
      }
      if (error.message === "Network Error") {
        message = "Please check your network connectivity"
      }
      thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue()
    }
  }
)
export const forgotpassword = createAsyncThunk(
  "auth/forgotpassword",
  async ({ email }, thunkAPI) => {
    try {
      const response = await api.post("forgot-password", { email })
      return response.data
    } catch (error) {
      let message =
        error?.response?.data?.message ||
        error?.response?.data?.meta.message ||
        error?.response?.data?.errors ||
        error?.toString()

      if (error.message === `timeout of ${timeout}ms exceeded`) {
        message = "Response timeout, Retry"
      }
      if (error.message === "Network Error") {
        message = "Please check your network connectivity"
      }
      thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue()
    }
  }
)
export const validateForgotPasswordEmail = createAsyncThunk(
  "auth/validateForgotPasswordEmail",
  async ({ token }, thunkAPI) => {
    try {
      const response = awaitapi.post("email/validate", token)
      return response.data
    } catch (error) {
      let message =
        error?.response?.data?.message ||
        error?.response?.data?.meta.message ||
        error?.response?.data?.errors ||
        error?.toString()
      if (error.message === `timeout of ${timeout}ms exceeded`) {
        message = "Response timeout, Retry"
      }
      if (error.message === "Network Error") {
        message = "Please check your network connectivity"
      }
      thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue()
    }
  }
)
export const resetpassword = createAsyncThunk(
  "auth/resetpassword",
  async ({ inputData }, thunkAPI) => {
    try {
      const response = await api.post("reset-password", inputData)
      return response.data
    } catch (error) {
      let message =
        error?.response?.data?.message ||
        error?.response?.data?.meta.message ||
        error?.response?.data?.errors ||
        error?.toString()
      if (error.message === `timeout of ${timeout}ms exceeded`) {
        message = "Response timeout, Retry"
      }
      if (error.message === "Network Error") {
        message = "Please check your network connectivity"
      }
      thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue()
    }
  }
)

export const refreshpage = createAsyncThunk(
  "auth/refreshpage",
  async ({}, thunkAPI) => {
    try {
      const response = await api.post("refresh-token", {})
      return response.data
    } catch (error) {
      let message =
        error?.response?.data?.message ||
        error?.response?.data?.meta.message ||
        error?.response?.data?.errors ||
        error?.toString()
      if (error.message === `timeout of ${timeout}ms exceeded`) {
        message = "Response timeout, Retry"
      }
      if (error.message === "Network Error") {
        message = "Please check your network connectivity"
      }
      thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue()
    }
  }
)
export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async ({ inputData }, thunkAPI) => {
    try {
      const formdata = new FormData()
      formdata.append("image", inputData.img)
      formdata.append("last_name", inputData.lastname)
      formdata.append("first_name", inputData.firstname)
      formdata.append("state_of_origin", inputData.state_of_origin)
      formdata.append("address", inputData.address)
      formdata.append("country", inputData.country)
      formdata.append("dob", inputData.dob)
      formdata.append("gender", inputData.gender)
      formdata.append("timezone", inputData.time)

      const response = await api.put(`profile`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      return response.data
    } catch (error) {
      let message =
        error?.response?.data?.message ||
        error?.response?.data?.meta.message ||
        error?.response?.data?.errors ||
        error?.toString()
      if (error.message === `timeout of ${timeout}ms exceeded`) {
        message = "Response timeout, Retry"
      }
      if (error.message === "Network Error") {
        message = "Please check your network connectivity"
      }
      thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue()
    }
  }
)
export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async ({ inputData }, thunkAPI) => {
    try {
      const response = await api.post(`change-password`, inputData)
      return response.data
    } catch (error) {
      let message =
        error?.response?.data?.message ||
        error?.response?.data?.meta.message ||
        error?.response?.data?.errors ||
        error?.toString()
      if (error.message === `timeout of ${timeout}ms exceeded`) {
        message = "Response timeout, Retry"
      }
      if (error.message === "Network Error") {
        message = "Please check your network connectivity"
      }
      thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue()
    }
  }
)
export const getProfile = createAsyncThunk(
  "auth/getProfile",
  async (_, thunkAPI) => {
    try {
      const response = await api.get(`profile`)
      return response.data
    } catch (error) {
      let message =
        error?.response?.data?.message ||
        error?.response?.data?.meta.message ||
        error?.response?.data?.errors ||
        error?.toString()
      if (error.message === `timeout of ${timeout}ms exceeded`) {
        message = "Response timeout, Retry"
      }
      if (error.message === "Network Error") {
        message = "Please check your network connectivity"
      }
      thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue()
    }
  }
)
const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
  profile: null,
}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.isLoggedIn = false
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      }
    })
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoggedIn = true
      state.user = payload.data
    })
    builder.addCase(validateForgotPasswordEmail.fulfilled, (state, action) => {
      state.user = action.payload
    })
    builder.addCase(refreshpage.fulfilled, (state, action) => {
      state.isLoggedIn = true
      state.token = action.payload
    })
    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.isLoggedIn = true
      state.profile = payload.data
    })
  },
})

const { reducer, actions } = authSlice
export const { logout } = actions
export default reducer
