import { createSlice } from "@reduxjs/toolkit";

interface trollBetAmountState {
    trollBetAmount: number;
    trollAvailablePoints: number;
}

const initialState: trollBetAmountState = {
    trollBetAmount: 0,
    trollAvailablePoints: 0,
};

const trollBetAmountSlice = createSlice({
    name: 'trollBetAmount',
    initialState,
    reducers: {
        plusFifty: (state) => {
            if(state.trollBetAmount + 50 <= state.trollAvailablePoints) state.trollBetAmount += 50;
            else state.trollBetAmount = state.trollBetAmount;
        },
        customAmountConfirm: (state, action) => {
            if(action.payload <= state.trollAvailablePoints) state.trollBetAmount = action.payload;
            else state.trollBetAmount = state.trollBetAmount;
        },
        trollStartingPointsOk: (state, action) => {
            state.trollAvailablePoints = action.payload;
        },
        trollGoesToConfirm: (state) => {
            state.trollAvailablePoints = state.trollAvailablePoints - state.trollBetAmount;
        },
        trollBetNull: (state) => {
            state.trollBetAmount = 0;
        }
    },
});

export const {plusFifty, customAmountConfirm, trollStartingPointsOk, trollGoesToConfirm, trollBetNull} = trollBetAmountSlice.actions;
export default trollBetAmountSlice.reducer;