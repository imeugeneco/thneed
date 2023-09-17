import { Resolvers } from '~/graphql/__generated__';

export const User: Resolvers['User'] = {
  originalId: (parent) => parent.id,
  createdAt: (parent) => parent.createdAt.toISOString(),
  phoneNumber: (parent) => parent.phoneNumber,
  nickname: (parent) => parent.nickname,
  bio: (parent) => parent.bio ?? null,
};
