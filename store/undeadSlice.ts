import { createSlice } from "@reduxjs/toolkit";

interface undeadBetAmountState {
    undeadBetAmount: number;
    undeadAvailablePoints: number;
}

const initialState: undeadBetAmountState = {
    undeadBetAmount: 0,
    undeadAvailablePoints: 0,
};

const undeadBetAmountSlice = createSlice({
    name: 'undeadBetAmount',
    initialState,
    reducers: {
        plusFifty: (state) => {
            if(state.undeadBetAmount + 50 <= state.undeadAvailablePoints) state.undeadBetAmount += 50;
            else state.undeadBetAmount = state.undeadBetAmount;
        },
        customAmountConfirm: (state, action) => {
            if(action.payload <= state.undeadAvailablePoints) state.undeadBetAmount = action.payload;
            else state.undeadBetAmount = state.undeadBetAmount;
        },
        undeadStartingPointsOk: (state, action) => {
            state.undeadAvailablePoints = action.payload;
        },
        undeadGoesToConfirm: (state) => {
            state.undeadAvailablePoints = state.undeadAvailablePoints - state.undeadBetAmount;
        },
        undeadBetNull: (state) => {
            state.undeadBetAmount = 0;
        }
    },
});

export const {plusFifty, customAmountConfirm, undeadStartingPointsOk, undeadGoesToConfirm, undeadBetNull} = undeadBetAmountSlice.actions;
export default undeadBetAmountSlice.reducer;