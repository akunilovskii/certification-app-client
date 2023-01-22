import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IResult } from '../interfaces'

export interface IResultsState {
  resultsList: IResult[]
}

const initialState: IResultsState = {
  resultsList: [],
}

export const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    replaceResults: (state, action: PayloadAction<[]>) => {
      state.resultsList = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { replaceResults } = resultsSlice.actions

export default resultsSlice.reducer
