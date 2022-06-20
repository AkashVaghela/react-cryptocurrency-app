import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewApiHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': '992f94083amsh7d86a12daa5dd6dp1b4866jsna0dddd74b2cd',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequests = (url) => ({ url, headers: cryptoNewApiHeaders });

export const cryptoNewsAPI = createApi({
  reducerPath: 'cryptoNewsAPI',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequests(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsAPI;
