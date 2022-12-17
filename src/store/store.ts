import { configureStore } from '@reduxjs/toolkit'
import testsReducer from './testsSlice'
import testValuesReducer from './testValuesSlice'

export const store = configureStore({
    reducer: {
        tests: testsReducer,
        testValues: testValuesReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
