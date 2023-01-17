import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ITest } from '../interfaces'

export interface ITestsState {
  testsList: ITest[]
}

const initialState: ITestsState = {
  testsList: [],
}

export const testsSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {
    replaceTests: (state, action: PayloadAction<[]>) => {
      state.testsList = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { replaceTests } = testsSlice.actions

export default testsSlice.reducer
