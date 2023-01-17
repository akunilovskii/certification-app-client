//https://blog.logrocket.com/handling-user-authentication-redux-toolkit/#organizing-redux-slices-actions

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { registerUser, loginUser, logoutUser, checkAuth } from './authActions'
// interface IUser {
//   isLoggedIn: boolean
//   role: string
// }

export interface IAuthState {
  // user: IUser
  loading: boolean
  userInfo: { email: string; isLoggedIn: boolean; roles: [string]; id: string } // for user object
  userToken: string // for storing the JWT
  authError: boolean
  error: unknown
  success: boolean // for monitoring the registration process.
}

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : ''
console.log(userToken)

const initialState: IAuthState = {
  loading: false,
  userInfo: { email: '', isLoggedIn: false, roles: [''], id: '' }, // for user object
  userToken: userToken!, // for storing the JWT
  authError: false,
  error: null,
  success: false, // for monitoring the registration process.
}

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthError: (state: IAuthState, { payload }) => {
      state.authError = payload
    },
  },
  extraReducers: (builder) => {
    // login user
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      console.log('login payload', payload)
      state.loading = false
      state.userInfo = payload
      state.userInfo.isLoggedIn = true
      state.userToken = payload.accessToken
    })
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    })
    // logout user
    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(logoutUser.fulfilled, (state, { payload }) => {
      state.loading = false
      state.userInfo = { email: '', isLoggedIn: false, roles: [''], id: '' }
      state.userToken = ''
      state.error = null
    })
    builder.addCase(logoutUser.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    })
    // register user
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true
      state.error = {}
    })
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      console.log({ payload })
      state.loading = false
      state.success = true // registration successful
      state.userInfo = payload
      state.userInfo.isLoggedIn = true
      state.userToken = payload.accessToken
    })
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    })
    builder.addCase(checkAuth.pending, (state) => {
      state.loading = true
    })
    builder.addCase(checkAuth.fulfilled, (state, { payload }) => {
      state.loading = false
      state.userInfo = { ...state.userInfo, ...payload }
      state.userInfo.isLoggedIn = true
    })
    builder.addCase(checkAuth.rejected, (state, { payload }) => {
      state.loading = false
    })
  },
})

export const { setAuthError } = authSlice.actions

export default authSlice.reducer
