import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[],
    status:'idle'
}

const trendcoinSlice = createSlice({
    name: 'trendcoin',
    initialState,
    reducers:{
        // fetchTrendcoins(state, action){
        //     state.data = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getTrendcoins.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(getTrendcoins.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'idle';
        })
        .addCase(getTrendcoins.rejected, (state, action) => {
            state.status = 'error';
        })
    }
});

export const {fetchTrendcoins} = trendcoinSlice.actions;
export default trendcoinSlice.reducer;

export const getTrendcoins = createAsyncThunk('trendcoin/get', async () => {
        const data = await fetch("https://api.coingecko.com/api/v3/search/trending");
        const result = await data.json();
        console.log(result);
        return result;
});
