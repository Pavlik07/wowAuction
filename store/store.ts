import { configureStore } from "@reduxjs/toolkit";
import orcBetAmountReducer from './orcSlice';
import trollBetAmountReducer from './trollSlice';
import taurenBetAmountReducer from './taurenSlice';
import undeadBetAmountReducer from './undeadSlice';

export const store = configureStore({
    reducer: {
        orcBetAmount: orcBetAmountReducer,
        trollBetAmount: trollBetAmountReducer,
        taurenBetAmount: taurenBetAmountReducer,
        undeadBetAmount: undeadBetAmountReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;