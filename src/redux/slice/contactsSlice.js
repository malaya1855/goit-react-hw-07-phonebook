import { createSlice } from '@reduxjs/toolkit'
import { fetchContacts, addContact, deleteContact } from 'redux/operations';


const initialState = {
  items: [],
  isLoading: false,
  error: null,
  };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
 
  extraReducers: builder => {
    builder
    .addCase(
      fetchContacts.fulfilled,(state, action) => {state.isLoading = false;
        state.error = null;
        state.items = action.payload})
    .addCase(
      addContact.fulfilled,(state, action) =>{state.isLoading = false;
        state.error = null;
        state.items.push(action.payload)},
    )
    .addCase(
      deleteContact.fulfilled,(state, action) =>{state.isLoading = false;
        state.error = null;
        state.items.filter(el => el.id !== action.payload)},
    )
    .addMatcher(
      action => action.type.endsWith('/rejected'),
      (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }
    )
    .addMatcher(
      action => action.type.endsWith('/pending'),
      state => {
        state.isLoading = true;
      }
    );
    
  },
})

export const contactsReducer = contactsSlice.reducer