import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/filter.selectors';

export const selectItems = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilterContacts = createSelector(
    [selectItems, selectFilter],
    (items, filter) => {
        const normalizedFilter = filter.toLowerCase();
        return items?.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter)
        );
    }
);
