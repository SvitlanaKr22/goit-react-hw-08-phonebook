import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, refreshUser, logOut } from './operations';

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  // reducers: {
  //   resetError(state) {
  //     state.error = null;
  //   },
  // },

  extraReducers: builder => {
    builder
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(register.rejected, logIn.rejected),
        (state, action) => {
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(register.fulfilled, logIn.fulfilled),
        (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
          state.error = null;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
