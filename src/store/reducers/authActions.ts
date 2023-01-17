import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface MyData {
  email: string
  password: string
}
export const PROXY = process.env.REACT_APP_PROXY
console.log(process.env)
console.log(PROXY)

// export const getUserDetails = createAsyncThunk(
//   'user/getUserDetails',
//   async (_, { getState, rejectWithValue }: any) => {
//     try {
//       // get user data from store
//       const { user } = getState()

//       // configure authorization header with user's token
//       const config = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${user.userToken}`,
//         },
//       }
//       const response = await fetch(`${PROXY}/user/profile`, config)
//       const data = await response.json()
//       if (data) {
//         return data
//       }
//     } catch (error: any) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message)
//       } else {
//         return rejectWithValue(error.message)
//       }
//     }
//   }
// )

export const checkAuth = createAsyncThunk(
  'user/refresh',
  async (_, { getState, rejectWithValue }: any) => {
    try {
      const response = await axios.get(`${PROXY}/user/refresh`, {
        withCredentials: true,
      })

      if (response.data) {
        localStorage.setItem('userToken', response.data.accessToken)
        console.log('Check auth from response: ', response.data)
        return response.data
      }
    } catch (err: any) {
      console.log(err.response.data.message)
      return rejectWithValue(err.response.data.message)
    }
  }
)

export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }: MyData, { rejectWithValue }) => {
    try {
      const requestURL = `${PROXY}/user/login`
      const response = await fetch(requestURL, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()
      if (data.id) {
        console.log('loginData: ', data)
        // store user's token in local storage
        localStorage.setItem('userToken', data.accessToken)
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

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const requestURL = `${PROXY}/user/logout`
      const response = await fetch(requestURL, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      if (data) {
        // remove user's token from local storage
        localStorage.removeItem('userToken')
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
      const response = await fetch(requestURL, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()
      if (data.id) {
        console.log('registerData: ', data)
        // store user's token in local storage
        localStorage.setItem('userToken', data.accessToken)
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
