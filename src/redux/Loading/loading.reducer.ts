import {createSlice} from '@reduxjs/toolkit';
const loadingSlice = createSlice({
  name: 'loadingSlice',
  initialState: {
    loading: false,
    networkConnection: true,
  },
  reducers: {
    accessLoading: (state, action) => {
      state.loading = action.payload;
    },
    changeConnection: (state, action) => {
      state.networkConnection = action.payload;
    },
  },
});
export default loadingSlice.reducer;
export const {accessLoading, changeConnection} = loadingSlice.actions;
