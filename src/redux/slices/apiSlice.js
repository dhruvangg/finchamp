import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: builder => ({
        getPlanner: builder.query({
            query: () => '/planner'
        })
    })
})

export const { useGetPlannerQuery } = apiSlice