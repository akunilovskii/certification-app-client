import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { NewITest } from '../tests-store'

export interface ITestsValuesState {
  testValues: NewITest
}

const initialState: ITestsValuesState = {
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
        answers: [{ id: '', text: '', correct: false }],
      },
    ],
  },
}

export const testValuesSlice = createSlice({
  name: 'testValues',
  initialState,
  reducers: {
    setTestValues: (state, action: PayloadAction<NewITest>) => {
      state.testValues = { ...state.testValues, ...action.payload }
    },
  },
})

export const { setTestValues } = testValuesSlice.actions

export default testValuesSlice.reducer
