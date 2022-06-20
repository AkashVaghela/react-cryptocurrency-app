import { configureStore } from '@reduxjs/toolkit';
import { cryptoAPI } from '../services/cryptoAPI';
import { cryptoNewsAPI } from '../services/cryptoNewAPI';

export default configureStore({
  reducer: {
    [cryptoAPI.reducerPath]: cryptoAPI.reducer,
    [cryptoNewsAPI.reducerPath]: cryptoNewsAPI.reducer,
  },
});
