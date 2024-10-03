import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define the TS type for the counter slice's state
export interface CounterState {
  userInfo?: {
    id: number;
    name: string;
  };
  token?: string;
  status: 'logged-in' | 'not-logged-in';
}

// Define the initial value for the slice state
const initialState: CounterState = {
  status: 'not-logged-in',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    saveLoginState: (
      state,
      action: PayloadAction<'logged-in' | 'not-logged-in'>,
    ) => {
      state.status = action.payload;
    },
  },
});

// Export the generated action creators for use in components
export const appActions = appSlice.actions;

// Export the slice reducer for use in the store configuration
const appReducer = appSlice.reducer;
export default appReducer;
