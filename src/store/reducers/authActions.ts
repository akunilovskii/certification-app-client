import { createAsyncThunk } from '@reduxjs/toolkit'

interface MyData {
  email: string
  password: string
}
export const PROXY = process.env.REACT_APP_PROXY
// console.log(process.env)
// console.log(PROXY)

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async (_, { getState, rejectWithValue }: any) => {
    try {
      // get user data from store
      const { user } = getState()

      // configure authorization header with user's token
      const config = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.userToken}`,
        },
      }
      const response = await fetch(`${PROXY}/user/profile`, config)
      const data = await response.json()

      return data
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }: MyData, { rejectWithValue }) => {
    try {
      const requestURL = `${PROXY}/user/login`
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      }
      const response = await fetch(requestURL, config)
      const data = await response.json()
      if (data.user) {
        // store user's token in local storage
        localStorage.setItem('userToken', data.userToken)
        return data
      }
    } catch (error: any) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const registerUser = createAsyncThunk(
  // action type string
  'user/register',
  // callback function
  async ({ email, password }: MyData, { rejectWithValue }) => {
    try {
      const requestURL = `${PROXY}/user/register`

      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      }

      const response = await fetch(requestURL, config)
      const data = await response.json()
      if (data.user) {
        // store user's token in local storage
        localStorage.setItem('userToken', data.userToken)
        return data
      }
    } catch (error: any) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
