import { createSlice } from "@reduxjs/toolkit";

interface orcBetAmountState {
    orcBetAmount: number;
    orcAvailablePoints: number;
}

const initialState: orcBetAmountState = {
    orcBetAmount: 0,
    orcAvailablePoints: 0,
};

const orcBetAmountSlice = createSlice({
    name: 'orcBetAmount',
    initialState,
    reducers: {
        plusFifty: (state) => {
            if(state.orcBetAmount + 50 <= state.orcAvailablePoints) state.orcBetAmount += 50;
            else state.orcBetAmount = state.orcBetAmount;
        },
        customAmountConfirm: (state, action) => {
            if(action.payload <= state.orcAvailablePoints) state.orcBetAmount = action.payload;
            else state.orcBetAmount = state.orcBetAmount;
        },
        orcStartingPointsOk: (state, action) => {
            state.orcAvailablePoints = action.payload;
        },
        orcGoesToConfirm: (state) => {
            state.orcAvailablePoints = state.orcAvailablePoints - state.orcBetAmount;
        },
        orcBetNull: (state) => {
            state.orcBetAmount = 0;
        },
    },
});

export const {plusFifty, customAmountConfirm, orcStartingPointsOk, orcGoesToConfirm, orcBetNull} = orcBetAmountSlice.actions;
export default orcBetAmountSlice.reducer;