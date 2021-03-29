import * as Types from './schemas'

export type PostCommentMutationVariables = Types.Exact<{
  object: Types.Comments_Insert_Input
}>

export type PostCommentMutation = { __typename?: 'mutation_root' } & {
  insert_comments_one?: Types.Maybe<
    { __typename?: 'comments' } & Pick<Types.Comments, 'id'>
  >
}

export type GetCommentQueryVariables = Types.Exact<{
  contributionId?: Types.Maybe<Types.Scalars['uuid']>
}>

export type GetCommentQuery = { __typename?: 'query_root' } & {
  comments: Array<
    { __typename?: 'comments' } & Pick<
      Types.Comments,
      'id' | 'content' | 'createAt'
    > & {
        user?: Types.Maybe<
          { __typename?: 'users' } & Pick<Types.Users, 'fullName'>
        >
      }
  >
}

export type GetContributeByConditionsQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.Contributions_Bool_Exp>
}>

export type GetContributeByConditionsQuery = { __typename?: 'query_root' } & {
  contributions: Array<
    { __typename?: 'contributions' } & Pick<
      Types.Contributions,
      'title' | 'id' | 'isSelected' | 'artical' | 'image' | 'updatedAt'
    > & {
        magazine?: Types.Maybe<
          { __typename?: 'magazines' } & Pick<Types.Magazines, 'label'>
        >
        user?: Types.Maybe<
          { __typename?: 'users' } & {
            faculty?: Types.Maybe<
              { __typename?: 'facultys' } & Pick<Types.Facultys, 'label'>
            >
          }
        >
        userByPublicBy?: Types.Maybe<
          { __typename?: 'users' } & Pick<Types.Users, 'fullName'>
        >
        faculty?: Types.Maybe<
          { __typename?: 'facultys' } & Pick<Types.Facultys, 'label'>
        >
      }
  >
}

export type GetContributionQueryVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['uuid']>
}>

export type GetContributionQuery = { __typename?: 'query_root' } & {
  contributions: Array<
    { __typename?: 'contributions' } & Pick<
      Types.Contributions,
      'title' | 'artical' | 'image'
    > & {
        magazine?: Types.Maybe<
          { __typename?: 'magazines' } & Pick<
            Types.Magazines,
            'id' | 'closureTemp' | 'closureFinal'
          >
        >
      }
  >
}

export type AddContributionMutationVariables = Types.Exact<{
  object: Types.Contributions_Insert_Input
}>

export type AddContributionMutation = { __typename?: 'mutation_root' } & {
  insert_contributions?: Types.Maybe<
    { __typename?: 'contributions_mutation_response' } & Pick<
      Types.Contributions_Mutation_Response,
      'affected_rows'
    > & {
        returning: Array<
          { __typename?: 'contributions' } & Pick<Types.Contributions, 'id'>
        >
      }
  >
}

export type UpdateContributionMutationVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['uuid']>
  object: Types.Contributions_Set_Input
}>

export type UpdateContributionMutation = { __typename?: 'mutation_root' } & {
  update_contributions?: Types.Maybe<
    { __typename?: 'contributions_mutation_response' } & Pick<
      Types.Contributions_Mutation_Response,
      'affected_rows'
    > & {
        returning: Array<
          { __typename?: 'contributions' } & Pick<Types.Contributions, 'id'>
        >
      }
  >
}

export type GetFacultyQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetFacultyQuery = { __typename?: 'query_root' } & {
  facultys: Array<
    { __typename?: 'facultys' } & Pick<Types.Facultys, 'id' | 'label'>
  >
}

export type GetMagazineQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.Magazines_Bool_Exp>
}>

export type GetMagazineQuery = { __typename?: 'query_root' } & {
  magazines: Array<
    { __typename?: 'magazines' } & Pick<
      Types.Magazines,
      'id' | 'label' | 'closureTemp' | 'closureFinal' | 'createdAt'
    >
  >
}

export type AddMagazineMutationVariables = Types.Exact<{
  object: Types.Magazines_Insert_Input
}>

export type AddMagazineMutation = { __typename?: 'mutation_root' } & {
  insert_magazines?: Types.Maybe<
    { __typename?: 'magazines_mutation_response' } & Pick<
      Types.Magazines_Mutation_Response,
      'affected_rows'
    > & {
        returning: Array<
          { __typename?: 'magazines' } & Pick<Types.Magazines, 'id'>
        >
      }
  >
}

export type EditMagazineMutationVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['uuid']>
  object: Types.Magazines_Set_Input
}>

export type EditMagazineMutation = { __typename?: 'mutation_root' } & {
  update_magazines?: Types.Maybe<
    { __typename?: 'magazines_mutation_response' } & Pick<
      Types.Magazines_Mutation_Response,
      'affected_rows'
    > & {
        returning: Array<
          { __typename?: 'magazines' } & Pick<Types.Magazines, 'id'>
        >
      }
  >
}

export type CountMessageQueryVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['uuid']>
}>

export type CountMessageQuery = { __typename?: 'query_root' } & {
  messages_aggregate: { __typename?: 'messages_aggregate' } & {
    aggregate?: Types.Maybe<
      { __typename?: 'messages_aggregate_fields' } & Pick<
        Types.Messages_Aggregate_Fields,
        'count'
      >
    >
  }
}

export type MessagesByConversationQueryVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['uuid']>
  offset?: Types.Maybe<Types.Scalars['Int']>
  limit?: Types.Maybe<Types.Scalars['Int']>
  cursorMsgByCreatedAt?: Types.Maybe<Types.Scalars['timestamptz']>
  orderBy?: Types.Maybe<
    Array<Types.Messages_Order_By> | Types.Messages_Order_By
  >
}>

export type MessagesByConversationQuery = { __typename?: 'query_root' } & {
  messages: Array<
    { __typename?: 'messages' } & Pick<
      Types.Messages,
      'id' | 'text' | 'createdAt' | 'type' | 'attachments' | 'isSent'
    > & {
        sender?: Types.Maybe<
          { __typename?: 'users' } & Pick<Types.Users, 'id' | 'fullName'>
        >
      }
  >
}

export type AddMessageMutationVariables = Types.Exact<{
  object: Types.Messages_Insert_Input
}>

export type AddMessageMutation = { __typename?: 'mutation_root' } & {
  insert_messages?: Types.Maybe<
    { __typename?: 'messages_mutation_response' } & Pick<
      Types.Messages_Mutation_Response,
      'affected_rows'
    > & {
        returning: Array<
          { __typename?: 'messages' } & Pick<
            Types.Messages,
            'id' | 'text' | 'createdAt' | 'type' | 'attachments' | 'isSent'
          > & {
              sender?: Types.Maybe<
                { __typename?: 'users' } & Pick<Types.Users, 'id' | 'fullName'>
              >
            }
        >
      }
  >
}

export type LastMessageSubscriptionVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['uuid']>
}>

export type LastMessageSubscription = { __typename?: 'subscription_root' } & {
  messages: Array<
    { __typename?: 'messages' } & Pick<
      Types.Messages,
      'id' | 'text' | 'createdAt' | 'type' | 'attachments' | 'isSent'
    > & {
        sender?: Types.Maybe<
          { __typename?: 'users' } & Pick<Types.Users, 'id' | 'fullName'>
        >
      }
  >
}

export type NewOrGetIdConversationMutationVariables = Types.Exact<{
  object: Types.Conversations_Insert_Input
}>

export type NewOrGetIdConversationMutation = {
  __typename?: 'mutation_root'
} & {
  insert_conversations?: Types.Maybe<
    { __typename?: 'conversations_mutation_response' } & Pick<
      Types.Conversations_Mutation_Response,
      'affected_rows'
    > & {
        returning: Array<
          { __typename?: 'conversations' } & Pick<Types.Conversations, 'id'>
        >
      }
  >
}

export type GetUsersQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetUsersQuery = { __typename?: 'query_root' } & {
  users: Array<
    { __typename?: 'users' } & Pick<
      Types.Users,
      'id' | 'email' | 'fullName' | 'roles'
    > & {
        faculty?: Types.Maybe<
          { __typename?: 'facultys' } & Pick<Types.Facultys, 'id' | 'label'>
        >
      }
  >
}

export type AddUserMutationVariables = Types.Exact<{
  object: Types.Users_Insert_Input
}>

export type AddUserMutation = { __typename?: 'mutation_root' } & {
  insert_users?: Types.Maybe<
    { __typename?: 'users_mutation_response' } & Pick<
      Types.Users_Mutation_Response,
      'affected_rows'
    > & { returning: Array<{ __typename?: 'users' } & Pick<Types.Users, 'id'>> }
  >
}

export type MembersChatInfoByIdsQueryVariables = Types.Exact<{
  userId1: Types.Scalars['uuid']
  userId2: Types.Scalars['uuid']
}>

export type MembersChatInfoByIdsQuery = { __typename?: 'query_root' } & {
  users: Array<
    { __typename?: 'users' } & Pick<
      Types.Users,
      'email' | 'id' | 'fullName' | 'roles'
    >
  >
}

export type ChatByFacultyQueryVariables = Types.Exact<{
  where: Types.Users_Bool_Exp
}>

export type ChatByFacultyQuery = { __typename?: 'query_root' } & {
  users: Array<
    { __typename?: 'users' } & Pick<
      Types.Users,
      'email' | 'id' | 'fullName' | 'roles'
    >
  >
}
