// store.js
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contact/contactsSlice';
// import { filterReducer } from './contact/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // filter: filterReducer,
  },
});

export default store;
