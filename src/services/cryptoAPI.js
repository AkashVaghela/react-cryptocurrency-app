import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '992f94083amsh7d86a12daa5dd6dp1b4866jsna0dddd74b2cd',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequests = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoAPI = createApi({
  reducerPath: 'createApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequests(`/coins?limit=${count}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoAPI;
