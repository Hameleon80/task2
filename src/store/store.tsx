import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import reducers from './reducers/reducers';

export const store = configureStore({
    reducer: reducers
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()