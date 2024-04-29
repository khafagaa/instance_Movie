import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '@config/env.dev';
import {apiKey} from '@constants/apiKey';
import {movieInfo, recievedData} from 'src/types/movie.type';

// Define a service using a base URL and expected endpoints
export const movieAPI = createApi({
  reducerPath: 'moviesAPI',
  baseQuery: fetchBaseQuery({baseUrl: `${BASE_URL}`}),
  endpoints: builder => ({
    getMovie: builder.query<movieInfo[], number>({
      query: page => ({
        url: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=${page}`,
        method: 'GET',
      }),
      transformResponse: (data: recievedData): movieInfo[] => {
        return data?.results;
      },
    }),
  }),
});

export const {useGetMovieQuery} = movieAPI;
