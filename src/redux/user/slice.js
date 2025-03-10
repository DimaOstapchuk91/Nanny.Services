import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: {
    name: null,
    email: null,
  },
};

const slice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder;
  },
});

export const userReducer = slice.reducer;
