import { configureStore } from '@reduxjs/toolkit'
import userDataReducer from './reducers/authSlice'
import testsReducer from './reducers/testsSlice'
import resultsReducer from './reducers/resultsSlice'
import testValuesReducer from './reducers/testValuesSlice'

export const store = configureStore({
  reducer: {
    tests: testsReducer,
    results: resultsReducer,
    testValues: testValuesReducer,
    user: userDataReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
