import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { postCreateUser } from '../features'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api/v2'}),
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (param) => postCreateUser(param)
        }) 
    })
})

export const {
    useCreateUserMutation,
} = api