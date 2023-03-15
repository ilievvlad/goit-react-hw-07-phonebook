import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsThunk, addContactThunk, deleteContactThunk } from './contacts.thunk';

const contactsInitState = {
    items: [],
    isLoading: false,
    error: null,
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitState,
    extraReducers: builder => {
        builder
            .addCase(fetchContactsThunk.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.items = payload
            })
            .addCase(fetchContactsThunk.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload
            })
            .addCase(addContactThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(payload);
            })
            .addCase(addContactThunk.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.items = state.items.filter(({ id }) => id !== payload)
            })
            .addCase(deleteContactThunk.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    }
},
);


export const contactsReducer = contactsSlice.reducer;
