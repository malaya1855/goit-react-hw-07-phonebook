import { createSlice } from '@reduxjs/toolkit'

const initialState = "";

export const filetrSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    newFilterName:(state, action) => (state = action.payload)

  },
})

export const { newFilterName } = filetrSlice.actions

export const filterReducer = filetrSlice.reducer