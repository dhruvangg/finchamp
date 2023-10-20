import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const plannerApi = createApi({
    reducerPath: 'plannerApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (builder) => ({
        getPlanner: builder.query({
            query: () => '/planner'
        }),
    }),
})

export const { useGetPlannerQuery } = plannerApi