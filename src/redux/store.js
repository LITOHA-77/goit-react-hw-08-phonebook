import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsSlice from './Phonebook/phonebook-slice';

import authReducer from './auth/auth-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const authPersistReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    auth: authPersistReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat(),
});

export const persistor = persistStore(store);
