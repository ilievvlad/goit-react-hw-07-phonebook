import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contacts.slice";
import { filterReducer } from "./filter/filter.slice";


export const store = configureStore({
	devTools: true,
	reducer: {
		contacts: contactsReducer,
		filter: filterReducer,
	},

})





