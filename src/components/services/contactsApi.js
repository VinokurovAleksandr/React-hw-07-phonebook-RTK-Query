import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://651eea3a44a3a8aa4769320e.mockapi.io/api/v1/' }),
    tagTypes: ['Contact'],
    endpoints: (builder) => ({
        fetchContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['Contact'],
        }),
        deleteCotnact: builder.mutation({
            query: contactId => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        }),
        createContact: builder.mutation({
            query: newContact  => ({
                url: '/contacts',
                method: 'POST',
                body: newContact
            }),
            invalidatesTags: ['Contact'],
        })
    }),
});



export const { useFetchContactsQuery, useDeleteCotnactMutation, useCreateContactMutation } = contactsApi;


