import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dominoSlice from './dominoSlice';

const rootReducer = combineReducers({
  dominoSlice: dominoSlice
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch