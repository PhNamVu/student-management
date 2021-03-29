import * as Types from './operations'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export const PostCommentDocument = gql`
  mutation postComment($object: comments_insert_input!) {
    insert_comments_one(object: $object) {
      id
    }
  }
`
export type PostCommentMutationFn = Apollo.MutationFunction<
  Types.PostCommentMutation,
  Types.PostCommentMutationVariables
>

/**
 * __usePostCommentMutation__
 *
 * To run a mutation, you first call `usePostCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postCommentMutation, { data, loading, error }] = usePostCommentMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function usePostCommentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.PostCommentMutation,
    Types.PostCommentMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.PostCommentMutation,
    Types.PostCommentMutationVariables
  >(PostCommentDocument, baseOptions)
}
export type PostCommentMutationHookResult = ReturnType<
  typeof usePostCommentMutation
>
export type PostCommentMutationResult = Apollo.MutationResult<Types.PostCommentMutation>
export type PostCommentMutationOptions = Apollo.BaseMutationOptions<
  Types.PostCommentMutation,
  Types.PostCommentMutationVariables
>
export const GetCommentDocument = gql`
  query getComment($contributionId: uuid) {
    comments(
      where: { contribution: { id: { _eq: $contributionId } } }
      order_by: { createAt: asc }
    ) {
      id
      content
      createAt
      user {
        fullName
      }
    }
  }
`

/**
 * __useGetCommentQuery__
 *
 * To run a query within a React component, call `useGetCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentQuery({
 *   variables: {
 *      contributionId: // value for 'contributionId'
 *   },
 * });
 */
export function useGetCommentQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetCommentQuery,
    Types.GetCommentQueryVariables
  >
) {
  return Apollo.useQuery<Types.GetCommentQuery, Types.GetCommentQueryVariables>(
    GetCommentDocument,
    baseOptions
  )
}
export function useGetCommentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetCommentQuery,
    Types.GetCommentQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.GetCommentQuery,
    Types.GetCommentQueryVariables
  >(GetCommentDocument, baseOptions)
}
export type GetCommentQueryHookResult = ReturnType<typeof useGetCommentQuery>
export type GetCommentLazyQueryHookResult = ReturnType<
  typeof useGetCommentLazyQuery
>
export type GetCommentQueryResult = Apollo.QueryResult<
  Types.GetCommentQuery,
  Types.GetCommentQueryVariables
>
export const GetContributeByConditionsDocument = gql`
  query getContributeByConditions($where: contributions_bool_exp) {
    contributions(where: $where) {
      title
      magazine {
        label
      }
      id
      user {
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
      updatedAt
    }
  }
`

/**
 * __useGetContributeByConditionsQuery__
 *
 * To run a query within a React component, call `useGetContributeByConditionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContributeByConditionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContributeByConditionsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetContributeByConditionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetContributeByConditionsQuery,
    Types.GetContributeByConditionsQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.GetContributeByConditionsQuery,
    Types.GetContributeByConditionsQueryVariables
  >(GetContributeByConditionsDocument, baseOptions)
}
export function useGetContributeByConditionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetContributeByConditionsQuery,
    Types.GetContributeByConditionsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.GetContributeByConditionsQuery,
    Types.GetContributeByConditionsQueryVariables
  >(GetContributeByConditionsDocument, baseOptions)
}
export type GetContributeByConditionsQueryHookResult = ReturnType<
  typeof useGetContributeByConditionsQuery
>
export type GetContributeByConditionsLazyQueryHookResult = ReturnType<
  typeof useGetContributeByConditionsLazyQuery
>
export type GetContributeByConditionsQueryResult = Apollo.QueryResult<
  Types.GetContributeByConditionsQuery,
  Types.GetContributeByConditionsQueryVariables
>
export const GetContributionDocument = gql`
  query getContribution($id: uuid) {
    contributions(where: { id: { _eq: $id } }) {
      title
      artical
      image
      magazine {
        id
        closureTemp
        closureFinal
      }
    }
  }
`

/**
 * __useGetContributionQuery__
 *
 * To run a query within a React component, call `useGetContributionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContributionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContributionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetContributionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetContributionQuery,
    Types.GetContributionQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.GetContributionQuery,
    Types.GetContributionQueryVariables
  >(GetContributionDocument, baseOptions)
}
export function useGetContributionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetContributionQuery,
    Types.GetContributionQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.GetContributionQuery,
    Types.GetContributionQueryVariables
  >(GetContributionDocument, baseOptions)
}
export type GetContributionQueryHookResult = ReturnType<
  typeof useGetContributionQuery
>
export type GetContributionLazyQueryHookResult = ReturnType<
  typeof useGetContributionLazyQuery
>
export type GetContributionQueryResult = Apollo.QueryResult<
  Types.GetContributionQuery,
  Types.GetContributionQueryVariables
>
export const AddContributionDocument = gql`
  mutation addContribution($object: contributions_insert_input!) {
    insert_contributions(objects: [$object]) {
      affected_rows
      returning {
        id
      }
    }
  }
`
export type AddContributionMutationFn = Apollo.MutationFunction<
  Types.AddContributionMutation,
  Types.AddContributionMutationVariables
>

/**
 * __useAddContributionMutation__
 *
 * To run a mutation, you first call `useAddContributionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddContributionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addContributionMutation, { data, loading, error }] = useAddContributionMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useAddContributionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.AddContributionMutation,
    Types.AddContributionMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.AddContributionMutation,
    Types.AddContributionMutationVariables
  >(AddContributionDocument, baseOptions)
}
export type AddContributionMutationHookResult = ReturnType<
  typeof useAddContributionMutation
>
export type AddContributionMutationResult = Apollo.MutationResult<Types.AddContributionMutation>
export type AddContributionMutationOptions = Apollo.BaseMutationOptions<
  Types.AddContributionMutation,
  Types.AddContributionMutationVariables
>
export const UpdateContributionDocument = gql`
  mutation updateContribution($id: uuid, $object: contributions_set_input!) {
    update_contributions(where: { id: { _eq: $id } }, _set: $object) {
      affected_rows
      returning {
        id
      }
    }
  }
`
export type UpdateContributionMutationFn = Apollo.MutationFunction<
  Types.UpdateContributionMutation,
  Types.UpdateContributionMutationVariables
>

/**
 * __useUpdateContributionMutation__
 *
 * To run a mutation, you first call `useUpdateContributionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateContributionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateContributionMutation, { data, loading, error }] = useUpdateContributionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      object: // value for 'object'
 *   },
 * });
 */
export function useUpdateContributionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateContributionMutation,
    Types.UpdateContributionMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.UpdateContributionMutation,
    Types.UpdateContributionMutationVariables
  >(UpdateContributionDocument, baseOptions)
}
export type UpdateContributionMutationHookResult = ReturnType<
  typeof useUpdateContributionMutation
>
export type UpdateContributionMutationResult = Apollo.MutationResult<Types.UpdateContributionMutation>
export type UpdateContributionMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateContributionMutation,
  Types.UpdateContributionMutationVariables
>
export const GetFacultyDocument = gql`
  query getFaculty {
    facultys {
      id
      label
    }
  }
`

/**
 * __useGetFacultyQuery__
 *
 * To run a query within a React component, call `useGetFacultyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFacultyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFacultyQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFacultyQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetFacultyQuery,
    Types.GetFacultyQueryVariables
  >
) {
  return Apollo.useQuery<Types.GetFacultyQuery, Types.GetFacultyQueryVariables>(
    GetFacultyDocument,
    baseOptions
  )
}
export function useGetFacultyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetFacultyQuery,
    Types.GetFacultyQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.GetFacultyQuery,
    Types.GetFacultyQueryVariables
  >(GetFacultyDocument, baseOptions)
}
export type GetFacultyQueryHookResult = ReturnType<typeof useGetFacultyQuery>
export type GetFacultyLazyQueryHookResult = ReturnType<
  typeof useGetFacultyLazyQuery
>
export type GetFacultyQueryResult = Apollo.QueryResult<
  Types.GetFacultyQuery,
  Types.GetFacultyQueryVariables
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
export const EditMagazineDocument = gql`
  mutation editMagazine($id: uuid, $object: magazines_set_input!) {
    update_magazines(where: { id: { _eq: $id } }, _set: $object) {
      affected_rows
      returning {
        id
      }
    }
  }
`
export type EditMagazineMutationFn = Apollo.MutationFunction<
  Types.EditMagazineMutation,
  Types.EditMagazineMutationVariables
>

/**
 * __useEditMagazineMutation__
 *
 * To run a mutation, you first call `useEditMagazineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditMagazineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editMagazineMutation, { data, loading, error }] = useEditMagazineMutation({
 *   variables: {
 *      id: // value for 'id'
 *      object: // value for 'object'
 *   },
 * });
 */
export function useEditMagazineMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.EditMagazineMutation,
    Types.EditMagazineMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.EditMagazineMutation,
    Types.EditMagazineMutationVariables
  >(EditMagazineDocument, baseOptions)
}
export type EditMagazineMutationHookResult = ReturnType<
  typeof useEditMagazineMutation
>
export type EditMagazineMutationResult = Apollo.MutationResult<Types.EditMagazineMutation>
export type EditMagazineMutationOptions = Apollo.BaseMutationOptions<
  Types.EditMagazineMutation,
  Types.EditMagazineMutationVariables
>
export const CountMessageDocument = gql`
  query countMessage($id: uuid) {
    messages_aggregate(where: { conv_id: { _eq: $id } }) {
      aggregate {
        count
      }
    }
  }
`

/**
 * __useCountMessageQuery__
 *
 * To run a query within a React component, call `useCountMessageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountMessageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountMessageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCountMessageQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.CountMessageQuery,
    Types.CountMessageQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.CountMessageQuery,
    Types.CountMessageQueryVariables
  >(CountMessageDocument, baseOptions)
}
export function useCountMessageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.CountMessageQuery,
    Types.CountMessageQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.CountMessageQuery,
    Types.CountMessageQueryVariables
  >(CountMessageDocument, baseOptions)
}
export type CountMessageQueryHookResult = ReturnType<
  typeof useCountMessageQuery
>
export type CountMessageLazyQueryHookResult = ReturnType<
  typeof useCountMessageLazyQuery
>
export type CountMessageQueryResult = Apollo.QueryResult<
  Types.CountMessageQuery,
  Types.CountMessageQueryVariables
>
export const MessagesByConversationDocument = gql`
  query messagesByConversation(
    $id: uuid
    $offset: Int
    $limit: Int
    $cursorMsgByCreatedAt: timestamptz
    $orderBy: [messages_order_by!]
  ) {
    messages(
      where: {
        conv_id: { _eq: $id }
        createdAt: { _lt: $cursorMsgByCreatedAt }
      }
      limit: $limit
      offset: $offset
      order_by: $orderBy
    ) {
      id
      text
      createdAt
      type
      attachments
      sender {
        id
        fullName
      }
      isSent
    }
  }
`

/**
 * __useMessagesByConversationQuery__
 *
 * To run a query within a React component, call `useMessagesByConversationQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessagesByConversationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesByConversationQuery({
 *   variables: {
 *      id: // value for 'id'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      cursorMsgByCreatedAt: // value for 'cursorMsgByCreatedAt'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useMessagesByConversationQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.MessagesByConversationQuery,
    Types.MessagesByConversationQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.MessagesByConversationQuery,
    Types.MessagesByConversationQueryVariables
  >(MessagesByConversationDocument, baseOptions)
}
export function useMessagesByConversationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.MessagesByConversationQuery,
    Types.MessagesByConversationQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.MessagesByConversationQuery,
    Types.MessagesByConversationQueryVariables
  >(MessagesByConversationDocument, baseOptions)
}
export type MessagesByConversationQueryHookResult = ReturnType<
  typeof useMessagesByConversationQuery
>
export type MessagesByConversationLazyQueryHookResult = ReturnType<
  typeof useMessagesByConversationLazyQuery
>
export type MessagesByConversationQueryResult = Apollo.QueryResult<
  Types.MessagesByConversationQuery,
  Types.MessagesByConversationQueryVariables
>
export const AddMessageDocument = gql`
  mutation addMessage($object: messages_insert_input!) {
    insert_messages(objects: [$object]) {
      affected_rows
      returning {
        id
        text
        createdAt
        type
        attachments
        sender {
          id
          fullName
        }
        isSent
      }
    }
  }
`
export type AddMessageMutationFn = Apollo.MutationFunction<
  Types.AddMessageMutation,
  Types.AddMessageMutationVariables
>

/**
 * __useAddMessageMutation__
 *
 * To run a mutation, you first call `useAddMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMessageMutation, { data, loading, error }] = useAddMessageMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useAddMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.AddMessageMutation,
    Types.AddMessageMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.AddMessageMutation,
    Types.AddMessageMutationVariables
  >(AddMessageDocument, baseOptions)
}
export type AddMessageMutationHookResult = ReturnType<
  typeof useAddMessageMutation
>
export type AddMessageMutationResult = Apollo.MutationResult<Types.AddMessageMutation>
export type AddMessageMutationOptions = Apollo.BaseMutationOptions<
  Types.AddMessageMutation,
  Types.AddMessageMutationVariables
>
export const LastMessageDocument = gql`
  subscription lastMessage($id: uuid) {
    messages(
      where: { conv_id: { _eq: $id } }
      limit: 1
      order_by: { createdAt: desc }
    ) {
      id
      text
      createdAt
      type
      attachments
      sender {
        id
        fullName
      }
      isSent
    }
  }
`

/**
 * __useLastMessageSubscription__
 *
 * To run a query within a React component, call `useLastMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLastMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLastMessageSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLastMessageSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    Types.LastMessageSubscription,
    Types.LastMessageSubscriptionVariables
  >
) {
  return Apollo.useSubscription<
    Types.LastMessageSubscription,
    Types.LastMessageSubscriptionVariables
  >(LastMessageDocument, baseOptions)
}
export type LastMessageSubscriptionHookResult = ReturnType<
  typeof useLastMessageSubscription
>
export type LastMessageSubscriptionResult = Apollo.SubscriptionResult<Types.LastMessageSubscription>
export const NewOrGetIdConversationDocument = gql`
  mutation newOrGetIdConversation($object: conversations_insert_input!) {
    insert_conversations(
      objects: [$object]
      on_conflict: {
        constraint: conversations_participants_key
        update_columns: [updatedAt]
      }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`
export type NewOrGetIdConversationMutationFn = Apollo.MutationFunction<
  Types.NewOrGetIdConversationMutation,
  Types.NewOrGetIdConversationMutationVariables
>

/**
 * __useNewOrGetIdConversationMutation__
 *
 * To run a mutation, you first call `useNewOrGetIdConversationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewOrGetIdConversationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newOrGetIdConversationMutation, { data, loading, error }] = useNewOrGetIdConversationMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useNewOrGetIdConversationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.NewOrGetIdConversationMutation,
    Types.NewOrGetIdConversationMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.NewOrGetIdConversationMutation,
    Types.NewOrGetIdConversationMutationVariables
  >(NewOrGetIdConversationDocument, baseOptions)
}
export type NewOrGetIdConversationMutationHookResult = ReturnType<
  typeof useNewOrGetIdConversationMutation
>
export type NewOrGetIdConversationMutationResult = Apollo.MutationResult<Types.NewOrGetIdConversationMutation>
export type NewOrGetIdConversationMutationOptions = Apollo.BaseMutationOptions<
  Types.NewOrGetIdConversationMutation,
  Types.NewOrGetIdConversationMutationVariables
>
export const GetUsersDocument = gql`
  query getUsers {
    users(where: { is_delete: { _is_null: false } }) {
      id
      email
      fullName
      roles
      faculty {
        id
        label
      }
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
export const AddUserDocument = gql`
  mutation addUser($object: users_insert_input!) {
    insert_users(objects: [$object]) {
      affected_rows
      returning {
        id
      }
    }
  }
`
export type AddUserMutationFn = Apollo.MutationFunction<
  Types.AddUserMutation,
  Types.AddUserMutationVariables
>

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useAddUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.AddUserMutation,
    Types.AddUserMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.AddUserMutation,
    Types.AddUserMutationVariables
  >(AddUserDocument, baseOptions)
}
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>
export type AddUserMutationResult = Apollo.MutationResult<Types.AddUserMutation>
export type AddUserMutationOptions = Apollo.BaseMutationOptions<
  Types.AddUserMutation,
  Types.AddUserMutationVariables
>
export const MembersChatInfoByIdsDocument = gql`
  query membersChatInfoByIds($userId1: uuid!, $userId2: uuid!) {
    users(where: { id: { _in: [$userId1, $userId2] } }) {
      email
      id
      fullName
      roles
    }
  }
`

/**
 * __useMembersChatInfoByIdsQuery__
 *
 * To run a query within a React component, call `useMembersChatInfoByIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMembersChatInfoByIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMembersChatInfoByIdsQuery({
 *   variables: {
 *      userId1: // value for 'userId1'
 *      userId2: // value for 'userId2'
 *   },
 * });
 */
export function useMembersChatInfoByIdsQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.MembersChatInfoByIdsQuery,
    Types.MembersChatInfoByIdsQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.MembersChatInfoByIdsQuery,
    Types.MembersChatInfoByIdsQueryVariables
  >(MembersChatInfoByIdsDocument, baseOptions)
}
export function useMembersChatInfoByIdsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.MembersChatInfoByIdsQuery,
    Types.MembersChatInfoByIdsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.MembersChatInfoByIdsQuery,
    Types.MembersChatInfoByIdsQueryVariables
  >(MembersChatInfoByIdsDocument, baseOptions)
}
export type MembersChatInfoByIdsQueryHookResult = ReturnType<
  typeof useMembersChatInfoByIdsQuery
>
export type MembersChatInfoByIdsLazyQueryHookResult = ReturnType<
  typeof useMembersChatInfoByIdsLazyQuery
>
export type MembersChatInfoByIdsQueryResult = Apollo.QueryResult<
  Types.MembersChatInfoByIdsQuery,
  Types.MembersChatInfoByIdsQueryVariables
>
export const ChatByFacultyDocument = gql`
  query chatByFaculty($where: users_bool_exp!) {
    users(where: $where) {
      email
      id
      fullName
      roles
    }
  }
`

/**
 * __useChatByFacultyQuery__
 *
 * To run a query within a React component, call `useChatByFacultyQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatByFacultyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatByFacultyQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useChatByFacultyQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.ChatByFacultyQuery,
    Types.ChatByFacultyQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.ChatByFacultyQuery,
    Types.ChatByFacultyQueryVariables
  >(ChatByFacultyDocument, baseOptions)
}
export function useChatByFacultyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.ChatByFacultyQuery,
    Types.ChatByFacultyQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.ChatByFacultyQuery,
    Types.ChatByFacultyQueryVariables
  >(ChatByFacultyDocument, baseOptions)
}
export type ChatByFacultyQueryHookResult = ReturnType<
  typeof useChatByFacultyQuery
>
export type ChatByFacultyLazyQueryHookResult = ReturnType<
  typeof useChatByFacultyLazyQuery
>
export type ChatByFacultyQueryResult = Apollo.QueryResult<
  Types.ChatByFacultyQuery,
  Types.ChatByFacultyQueryVariables
>
