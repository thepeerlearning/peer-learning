import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api, { timeout } from "../../../common/axios"
import { setMessage } from "../message"

export const getProfile = createAsyncThunk(
  "student/getProfile",
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
export const updateProfile = createAsyncThunk(
  "student/updateProfile",
  async ({ inputData }, thunkAPI) => {
    try {
      const formdata = new FormData()
      formdata.append("image", inputData.image)
      formdata.append("last_name", inputData.lastname)
      formdata.append("first_name", inputData.firstname)
      formdata.append("email", inputData.email)
      formdata.append("state_of_origin", inputData.state_of_origin)
      formdata.append("address", inputData.address)
      formdata.append("country", inputData.country)
      formdata.append("state_province_of_origin", inputData.state_of_origin)
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
      console.log("error", error, error.response)
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
export const getSubscriptions = createAsyncThunk(
  "student/getSubscriptions",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("subscription")
      return response.data
    } catch (error) {
      let message =
        error?.response?.data?.message ||
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
export const initiateSubscriptions = createAsyncThunk(
  "student/initiateSubscription",
  async ({ id }, thunkAPI) => {
    try {
      const response = await api.post("subscription", { class_id: id })
      return response.data
    } catch (error) {
      let message =
        error?.response?.data?.message ||
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
export const getPaymentMethod = createAsyncThunk(
  "student/getPaymentMethod",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("get-payment-method")
      return response.data
    } catch (error) {
      let message =
        error?.response?.data?.message ||
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
export const addPaymentMethod = createAsyncThunk(
  "student/addPaymentMethod",
  async ({ inputData }, thunkAPI) => {
    try {
      const response = await api.post("add-payment-method", inputData)
      return response.data
    } catch (error) {
      let message =
        error?.response?.data?.message ||
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
export const getCourses = createAsyncThunk(
  "student/getCourses",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("courses")
      return response.data
    } catch (error) {
      let message =
        error?.response?.data?.message ||
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
export const activeCourses = createAsyncThunk(
  "student/activeCourses",
  async ({}, thunkAPI) => {
    try {
      const response = await api.get("/users/courses-subscriptions/active")
      return response.data
    } catch (error) {
      let message =
        error?.response?.data?.message ||
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

export const classSchedules = createAsyncThunk(
  "student/classSchedules",
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await api.get(
        `admin/courses-subscriptions/course-outlines?page=${page}&limit=${limit}`
      )
      return response.data
    } catch (error) {
      let message =
        error?.response?.data?.message ||
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
export const updateClassStatus = createAsyncThunk(
  "student/updateClassStatus",
  async ({ id, inputData }, thunkAPI) => {
    try {
      const response = await api.patch(
        `users/courses-subscriptions/course-outlines/${id}/instructor/change-status`,
        inputData
      )
      return response.data
    } catch (error) {
      let message =
        error?.response?.data?.message ||
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
  subscriptions: null,
  paymentMethod: null,
  methodLoading: false,
  methodError: false,
  profile: null,
}
const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    refresh: (state) => {
      state.error = false
      state.coursesError = false
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCourses.pending, (state, action) => {
      state.loading = true
      state.data = null
      state.error = false
    })
    builder.addCase(getCourses.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload.data
      state.error = false
    })
    builder.addCase(getCourses.rejected, (state) => {
      state.loading = false
      state.data = null
      state.error = true
    })
    builder.addCase(activeCourses.pending, (state, action) => {
      state.courseLoading = true
      state.activeCourse = null
      state.error = false
    })
    builder.addCase(activeCourses.fulfilled, (state, action) => {
      state.courseLoading = false
      state.activeCourse = action.payload.data
      state.coursesError = false
    })
    builder.addCase(activeCourses.rejected, (state) => {
      state.courseLoading = false
      state.activeCourse = null
      state.coursesError = true
    })

    builder.addCase(classSchedules.pending, (state) => {
      state.scheduleLoading = true
      state.schedules = null
      state.scheduleError = false
    })
    builder.addCase(classSchedules.fulfilled, (state, { payload }) => {
      state.scheduleLoading = false
      state.schedules = payload
      state.scheduleError = false
    })
    builder.addCase(classSchedules.rejected, (state) => {
      state.scheduleLoading = false
      state.schedules = null
      state.scheduleError = true
    })
    builder.addCase(getSubscriptions.pending, (state, action) => {
      state.loading = true
      state.subscriptions = null
      state.error = false
    })
    builder.addCase(getSubscriptions.fulfilled, (state, action) => {
      state.loading = false
      state.subscriptions = action.payload.data
      state.error = false
    })
    builder.addCase(getSubscriptions.rejected, (state) => {
      state.loading = false
      state.subscriptions = null
      state.error = true
    })
    builder.addCase(getPaymentMethod.pending, (state, action) => {
      state.methodLoading = true
      state.paymentMethod = null
      state.methodError = false
    })
    builder.addCase(getPaymentMethod.fulfilled, (state, action) => {
      state.methodLoading = false
      state.paymentMethod = action.payload.data
      state.methodError = false
    })
    builder.addCase(getPaymentMethod.rejected, (state) => {
      state.methodLoading = false
      state.paymentMethod = null
      state.methodError = true
    })
    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.isLoggedIn = true
      state.profile = payload.data
    })
  },
})
const { reducer, actions } = studentSlice
export const { refresh } = actions
export default reducer
