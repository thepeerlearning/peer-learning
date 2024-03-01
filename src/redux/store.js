import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import authReducer from "./slices/auth"
import studentReducer from "./slices/student"
import messageReducer from "./slices/message"

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  student: studentReducer,
})

const makeConfiguredStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  })

export const makeStore = () => {
  const isServer = typeof window === "undefined"
  if (isServer) {
    return makeConfiguredStore()
  } else {
    // we need it only on client side
    const persistConfig = {
      key: "nextjs",
      whitelist: ["auth"],
      storage,
    }
    const persistedReducer = persistReducer(persistConfig, rootReducer)
    let store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
      devTools: process.env.NODE_ENV !== "production",
    })

    store.__persistor = persistStore(store)
    return store
  }
}

export const wrapper = createWrapper(makeStore)
