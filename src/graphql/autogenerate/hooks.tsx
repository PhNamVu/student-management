import * as Types from './operations'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export const GetUsersDocument = gql`
  query getUsers {
    users(limit: 10) {
      id
    }
  }
`

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetUsersQuery,
    Types.GetUsersQueryVariables
  >
) {
  return Apollo.useQuery<Types.GetUsersQuery, Types.GetUsersQueryVariables>(
    GetUsersDocument,
    baseOptions
  )
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetUsersQuery,
    Types.GetUsersQueryVariables
  >
) {
  return Apollo.useLazyQuery<Types.GetUsersQuery, Types.GetUsersQueryVariables>(
    GetUsersDocument,
    baseOptions
  )
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>
export type GetUsersQueryResult = Apollo.QueryResult<
  Types.GetUsersQuery,
  Types.GetUsersQueryVariables
>
