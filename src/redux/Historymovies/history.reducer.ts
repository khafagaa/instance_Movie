import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {HistoryState, movieInfo} from 'src/types/movie.type';

const initialState: HistoryState = {
  history: [],
};

const history = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistory: (state, action: PayloadAction<movieInfo>) => {
      let exist = state.history.some(val => val.id == action.payload.id);
      !exist && state.history.push(action.payload);
    },
    removeHistory: (state, action: PayloadAction<number>) => {
      state.history = state.history.filter(val => val.id !== action.payload);
    },
    removeAllHistory: state => {
      state.history = [];
    },
  },
});
export default history.reducer;
export const {addHistory, removeHistory, removeAllHistory} = history.actions;
