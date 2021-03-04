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
    > & { user: { __typename?: 'users' } & Pick<Types.Users, 'fullName'> }
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
        magazine: { __typename?: 'magazines' } & Pick<Types.Magazines, 'label'>
        user: { __typename?: 'users' } & Pick<Types.Users, 'fullName'> & {
            faculty: { __typename?: 'facultys' } & Pick<Types.Facultys, 'label'>
          }
        userByPublicBy: { __typename?: 'users' } & Pick<Types.Users, 'fullName'>
        faculty: { __typename?: 'facultys' } & Pick<Types.Facultys, 'label'>
      }
  >
}

export type GetContributeByUserIdQueryVariables = Types.Exact<{
  idUser?: Types.Maybe<Types.Scalars['uuid']>
}>

export type GetContributeByUserIdQuery = { __typename?: 'query_root' } & {
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
        magazine: { __typename?: 'magazines' } & Pick<Types.Magazines, 'label'>
        user: { __typename?: 'users' } & {
          faculty: { __typename?: 'facultys' } & Pick<Types.Facultys, 'label'>
        }
        userByPublicBy: { __typename?: 'users' } & Pick<Types.Users, 'fullName'>
        faculty: { __typename?: 'facultys' } & Pick<Types.Facultys, 'label'>
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

export type GetUsersQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetUsersQuery = { __typename?: 'query_root' } & {
  users: Array<{ __typename?: 'users' } & Pick<Types.Users, 'id'>>
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
