import * as Types from './schemas'

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
