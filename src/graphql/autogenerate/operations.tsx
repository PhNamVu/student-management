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

export type GetContributeQueryVariables = Types.Exact<{
  idMgz?: Types.Maybe<Types.Scalars['uuid']>
}>

export type GetContributeQuery = { __typename?: 'query_root' } & {
  contributions: Array<
    { __typename?: 'contributions' } & Pick<
      Types.Contributions,
      | 'title'
      | 'id'
      | 'isSelected'
      | 'artical'
      | 'image'
      | 'deleted'
      | 'createdAt'
      | 'updatedAt'
    > & {
        magazine?: Types.Maybe<
          { __typename?: 'magazines' } & Pick<Types.Magazines, 'label'>
        >
        user?: Types.Maybe<
          { __typename?: 'users' } & Pick<Types.Users, 'fullName'> & {
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

export type GetUsersQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetUsersQuery = { __typename?: 'query_root' } & {
  users: Array<{ __typename?: 'users' } & Pick<Types.Users, 'id'>>
}
