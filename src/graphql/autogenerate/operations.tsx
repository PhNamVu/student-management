import * as Types from './schemas'

export type GetUsersQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetUsersQuery = { __typename?: 'query_root' } & {
  users: Array<{ __typename?: 'users' } & Pick<Types.Users, 'id'>>
}
