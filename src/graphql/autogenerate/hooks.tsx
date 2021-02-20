import * as Types from './operations'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export const GetContributeDocument = gql`
  query getContribute($idMgz: uuid) {
    contributions(where: { magazine: { id: { _eq: $idMgz } } }) {
      title
      magazine {
        label
      }
      id
      user {
        fullName
        faculty {
          label
        }
      }
      userByPublicBy {
        fullName
      }
      isSelected
      faculty {
        label
      }
      artical
      image
      deleted
      createdAt
      updatedAt
    }
  }
`

/**
 * __useGetContributeQuery__
 *
 * To run a query within a React component, call `useGetContributeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContributeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContributeQuery({
 *   variables: {
 *      idMgz: // value for 'idMgz'
 *   },
 * });
 */
export function useGetContributeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetContributeQuery,
    Types.GetContributeQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.GetContributeQuery,
    Types.GetContributeQueryVariables
  >(GetContributeDocument, baseOptions)
}
export function useGetContributeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetContributeQuery,
    Types.GetContributeQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.GetContributeQuery,
    Types.GetContributeQueryVariables
  >(GetContributeDocument, baseOptions)
}
export type GetContributeQueryHookResult = ReturnType<
  typeof useGetContributeQuery
>
export type GetContributeLazyQueryHookResult = ReturnType<
  typeof useGetContributeLazyQuery
>
export type GetContributeQueryResult = Apollo.QueryResult<
  Types.GetContributeQuery,
  Types.GetContributeQueryVariables
>
export const GetMagazineDocument = gql`
  query getMagazine($where: magazines_bool_exp) {
    magazines(where: $where) {
      id
      label
      closureTemp
      closureFinal
      createdAt
    }
  }
`

/**
 * __useGetMagazineQuery__
 *
 * To run a query within a React component, call `useGetMagazineQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMagazineQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMagazineQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetMagazineQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetMagazineQuery,
    Types.GetMagazineQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.GetMagazineQuery,
    Types.GetMagazineQueryVariables
  >(GetMagazineDocument, baseOptions)
}
export function useGetMagazineLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetMagazineQuery,
    Types.GetMagazineQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.GetMagazineQuery,
    Types.GetMagazineQueryVariables
  >(GetMagazineDocument, baseOptions)
}
export type GetMagazineQueryHookResult = ReturnType<typeof useGetMagazineQuery>
export type GetMagazineLazyQueryHookResult = ReturnType<
  typeof useGetMagazineLazyQuery
>
export type GetMagazineQueryResult = Apollo.QueryResult<
  Types.GetMagazineQuery,
  Types.GetMagazineQueryVariables
>
export const AddMagazineDocument = gql`
  mutation addMagazine($object: magazines_insert_input!) {
    insert_magazines(objects: [$object]) {
      affected_rows
      returning {
        id
      }
    }
  }
`
export type AddMagazineMutationFn = Apollo.MutationFunction<
  Types.AddMagazineMutation,
  Types.AddMagazineMutationVariables
>

/**
 * __useAddMagazineMutation__
 *
 * To run a mutation, you first call `useAddMagazineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMagazineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMagazineMutation, { data, loading, error }] = useAddMagazineMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useAddMagazineMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.AddMagazineMutation,
    Types.AddMagazineMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.AddMagazineMutation,
    Types.AddMagazineMutationVariables
  >(AddMagazineDocument, baseOptions)
}
export type AddMagazineMutationHookResult = ReturnType<
  typeof useAddMagazineMutation
>
export type AddMagazineMutationResult = Apollo.MutationResult<Types.AddMagazineMutation>
export type AddMagazineMutationOptions = Apollo.BaseMutationOptions<
  Types.AddMagazineMutation,
  Types.AddMagazineMutationVariables
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
