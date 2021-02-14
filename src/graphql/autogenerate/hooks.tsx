import * as Types from './operations'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export const GetMagazine0Document = gql`
  query getMagazine0 {
    magazines(where: { closureTemp: { _gt: "now()" } }) {
      label
      closureTemp
      closureFinal
      createdAt
    }
  }
`

/**
 * __useGetMagazine0Query__
 *
 * To run a query within a React component, call `useGetMagazine0Query` and pass it any options that fit your needs.
 * When your component renders, `useGetMagazine0Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMagazine0Query({
 *   variables: {
 *   },
 * });
 */
export function useGetMagazine0Query(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetMagazine0Query,
    Types.GetMagazine0QueryVariables
  >
) {
  return Apollo.useQuery<
    Types.GetMagazine0Query,
    Types.GetMagazine0QueryVariables
  >(GetMagazine0Document, baseOptions)
}
export function useGetMagazine0LazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetMagazine0Query,
    Types.GetMagazine0QueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.GetMagazine0Query,
    Types.GetMagazine0QueryVariables
  >(GetMagazine0Document, baseOptions)
}
export type GetMagazine0QueryHookResult = ReturnType<
  typeof useGetMagazine0Query
>
export type GetMagazine0LazyQueryHookResult = ReturnType<
  typeof useGetMagazine0LazyQuery
>
export type GetMagazine0QueryResult = Apollo.QueryResult<
  Types.GetMagazine0Query,
  Types.GetMagazine0QueryVariables
>
export const GetMagazine1Document = gql`
  query getMagazine1 {
    magazines(where: { closureFinal: { _gt: "now()" } }) {
      label
      closureTemp
      closureFinal
      createdAt
    }
  }
`

/**
 * __useGetMagazine1Query__
 *
 * To run a query within a React component, call `useGetMagazine1Query` and pass it any options that fit your needs.
 * When your component renders, `useGetMagazine1Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMagazine1Query({
 *   variables: {
 *   },
 * });
 */
export function useGetMagazine1Query(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetMagazine1Query,
    Types.GetMagazine1QueryVariables
  >
) {
  return Apollo.useQuery<
    Types.GetMagazine1Query,
    Types.GetMagazine1QueryVariables
  >(GetMagazine1Document, baseOptions)
}
export function useGetMagazine1LazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetMagazine1Query,
    Types.GetMagazine1QueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.GetMagazine1Query,
    Types.GetMagazine1QueryVariables
  >(GetMagazine1Document, baseOptions)
}
export type GetMagazine1QueryHookResult = ReturnType<
  typeof useGetMagazine1Query
>
export type GetMagazine1LazyQueryHookResult = ReturnType<
  typeof useGetMagazine1LazyQuery
>
export type GetMagazine1QueryResult = Apollo.QueryResult<
  Types.GetMagazine1Query,
  Types.GetMagazine1QueryVariables
>
export const GetMagazine2Document = gql`
  query getMagazine2 {
    magazines(where: { closureFinal: { _lt: "now()" } }) {
      label
      closureTemp
      closureFinal
      createdAt
    }
  }
`

/**
 * __useGetMagazine2Query__
 *
 * To run a query within a React component, call `useGetMagazine2Query` and pass it any options that fit your needs.
 * When your component renders, `useGetMagazine2Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMagazine2Query({
 *   variables: {
 *   },
 * });
 */
export function useGetMagazine2Query(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetMagazine2Query,
    Types.GetMagazine2QueryVariables
  >
) {
  return Apollo.useQuery<
    Types.GetMagazine2Query,
    Types.GetMagazine2QueryVariables
  >(GetMagazine2Document, baseOptions)
}
export function useGetMagazine2LazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetMagazine2Query,
    Types.GetMagazine2QueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.GetMagazine2Query,
    Types.GetMagazine2QueryVariables
  >(GetMagazine2Document, baseOptions)
}
export type GetMagazine2QueryHookResult = ReturnType<
  typeof useGetMagazine2Query
>
export type GetMagazine2LazyQueryHookResult = ReturnType<
  typeof useGetMagazine2LazyQuery
>
export type GetMagazine2QueryResult = Apollo.QueryResult<
  Types.GetMagazine2Query,
  Types.GetMagazine2QueryVariables
>
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
