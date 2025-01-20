import { createSlice } from "@reduxjs/toolkit";

interface taurenBetAmountState {
    taurenBetAmount: number;
    taurenAvailablePoints: number;
}

const initialState: taurenBetAmountState = {
    taurenBetAmount: 0,
    taurenAvailablePoints: 0,
};

const taurenBetAmountSlice = createSlice({
    name: 'taurenBetAmount',
    initialState,
    reducers: {
        plusFifty: (state) => {
            if(state.taurenBetAmount + 50 <= state.taurenAvailablePoints) state.taurenBetAmount += 50;
            else state.taurenBetAmount = state.taurenBetAmount;
        },
        customAmountConfirm: (state, action) => {
            if(action.payload <= state.taurenAvailablePoints) state.taurenBetAmount = action.payload;
            else state.taurenBetAmount = state.taurenBetAmount;
        },
        taurenStartingPointsOk: (state, action) => {
            state.taurenAvailablePoints = action.payload;
        },
        taurenGoesToConfirm: (state) => {
            state.taurenAvailablePoints = state.taurenAvailablePoints - state.taurenBetAmount;
        },
        taurenBetNull: (state) => {
            state.taurenBetAmount = 0;
        }
    },
});

export const {plusFifty, customAmountConfirm, taurenStartingPointsOk, taurenGoesToConfirm, taurenBetNull} = taurenBetAmountSlice.actions;
export default taurenBetAmountSlice.reducer;