import * as Types from './schemas'

export type GetMagazine0QueryVariables = Types.Exact<{ [key: string]: never }>

export type GetMagazine0Query = { __typename?: 'query_root' } & {
  magazines: Array<
    { __typename?: 'magazines' } & Pick<
      Types.Magazines,
      'label' | 'closureTemp' | 'closureFinal' | 'createdAt'
    >
  >
}

export type GetMagazine1QueryVariables = Types.Exact<{ [key: string]: never }>

export type GetMagazine1Query = { __typename?: 'query_root' } & {
  magazines: Array<
    { __typename?: 'magazines' } & Pick<
      Types.Magazines,
      'label' | 'closureTemp' | 'closureFinal' | 'createdAt'
    >
  >
}

export type GetMagazine2QueryVariables = Types.Exact<{ [key: string]: never }>

export type GetMagazine2Query = { __typename?: 'query_root' } & {
  magazines: Array<
    { __typename?: 'magazines' } & Pick<
      Types.Magazines,
      'label' | 'closureTemp' | 'closureFinal' | 'createdAt'
    >
  >
}

export type GetUsersQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetUsersQuery = { __typename?: 'query_root' } & {
  users: Array<{ __typename?: 'users' } & Pick<Types.Users, 'id'>>
}
