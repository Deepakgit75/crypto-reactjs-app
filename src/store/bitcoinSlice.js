import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[],
    status:'idle'
}

const bitcoinSlice = createSlice({
    name: 'coin',
    initialState,
    reducers:{
        // fetchBitcoins(state, action){
        //     state.data = action.payload;
        // }
    },
    extraReducers:(builder) => {
        builder
        .addCase(getBitcoins.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(getBitcoins.fulfilled, (state, action) => {
            state.data = action.payload;
        })
        .addCase(getBitcoins.rejected, (state, action) => {
            state.status = 'error';
        })
    }
});

export const {fetchBitcoins} = bitcoinSlice.actions;
export default bitcoinSlice.reducer;

export const getBitcoins = createAsyncThunk('coin/get', async () => {
    const data = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum&price_change_percentage=1h%2C1y%2C24h");
    const result = await data.json();
    console.log(result);
    return result;
});


// export function getBitcoins(){
//     return async function getBitcoinThunk(dispatch, getState){
//             const data = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum&price_change_percentage=1h%2C1y%2C24h");
//             const result = await data.json();
//             console.log(result);
//             dispatch(fetchBitcoins(result));
//     }
// }

