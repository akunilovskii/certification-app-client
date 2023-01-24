import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ITest } from '../interfaces'

export interface ITestValuesState {
  testValues: ITest
}

const initialState: ITestValuesState = {
  testValues: {
    _id: '',
    discipline: '',
    level: '',
    subject: '',
    title: '',
    difficulty: '',
    duration: 0,
    questions: [
      {
        question: '',
        shouldSelect: 1,
        answers: [{ id: '', text: '', correct: false }],
        selected: [],
      },
    ],
  },
}

export const testValuesSlice = createSlice({
  name: 'testValues',
  initialState,
  reducers: {
    setTestValues: (state, action: PayloadAction<ITest>) => {
      state.testValues = { ...state.testValues, ...action.payload }
    },
  },
})

export const { setTestValues } = testValuesSlice.actions

export default testValuesSlice.reducer
