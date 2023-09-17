const typeDefs = `

schema {
  query: Query
  mutation: Mutation
}

input CreateUserInput {
  nickname: String!
  phoneNumber: String!
}

union CreateUserOutput = CreateUserOutput_Result | Error

type CreateUserOutput_Result {
  result: CreateUserOutput_ResultPayload!
}

type CreateUserOutput_ResultPayload {
  user: User!
}

scalar Date

scalar DateTime

type Error {
  error: ErrorPayload!
}

type ErrorPayload {
  message: String!
}

type Mutation {
  createUser(input: CreateUserInput!): CreateUserOutput!
  updateUser(input: UpdateUserInput!): UpdateUserOutput!
}

interface Node {
  """
  Globally unique across all types.
  Represents both the type and the original ID of the object.
  """
  id: ID!
}

type Query {
  node(id: ID!): Node
  userByOriginalId(originalId: String!): User
}

input UpdateUserInput {
  bio: String
  nickname: String
  originalUserId: String!
  phoneNumber: String
}

union UpdateUserOutput = Error | UpdateUserOutput_Result

type UpdateUserOutput_Result {
  result: UpdateUserOutput_ResultPayload!
}

type UpdateUserOutput_ResultPayload {
  user: User!
}

type User implements Node {
  bio: String
  createdAt: DateTime!
  id: ID!
  nickname: String!
  originalId: String!
  phoneNumber: String!
}
`

export default typeDefs
