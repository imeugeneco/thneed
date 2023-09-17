import { DateResolver, DateTimeResolver } from 'graphql-scalars';

import { Resolvers } from '../__generated__/typings';
import { Node } from './Node/Node';
import { NodeQuery } from './Node/NodeQuery';
import { User } from './User/User';
import { UserMutation } from './User/UserMutation';
import { UserQuery } from './User/UserQuery';

export const resolvers: Resolvers = {
  Date: DateResolver,
  DateTime: DateTimeResolver,
  Query: {
    ...UserQuery,
    ...NodeQuery,
  },
  Mutation: {
    ...UserMutation,
  },
  User,
  Node,
};
