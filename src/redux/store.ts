import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import stateSlice from './stateSlice'

export const store = configureStore({
  reducer: {
   StateReducer:stateSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()