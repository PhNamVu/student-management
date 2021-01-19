module.exports = {
  schema: [
    {
      'https://fun-whale-23.hasura.app/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': '98769876',
        },
      },
    },
  ],
  overwrite: true,
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  // Format files
  generates: {
    // Get schemas from server
    'src/graphql/autogenerate/schemas.tsx': {
      documents: 'src/graphql/queries/**/**.gql',
      plugins: ['typescript'],
    },
    // Create operations based on queries
    'src/graphql/autogenerate/operations.tsx': {
      documents: 'src/graphql/queries/**/**.gql',
      preset: 'import-types',
      presetConfig: {
        typesPath: './schemas',
      },
      plugins: ['typescript-operations'],
    },
    // 1. Export GraphQL documents
    // 2. React interface
    'src/graphql/autogenerate/hooks.tsx': {
      documents: 'src/graphql/queries/**/**.gql',
      preset: 'import-types',
      presetConfig: {
        typesPath: './operations',
      },
      plugins: ['typescript-react-apollo'],
      config: {
        withHOC: false,
        withComponent: false,
        withHooks: true,
      },
    },
  },
}
