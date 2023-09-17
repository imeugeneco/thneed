import { ServiceError } from '~/common/types/error.type';
import { Resolvers } from '~/graphql/__generated__';
import { getServices } from '~/service/services';

export const UserQuery: Resolvers['Query'] = {
  userByOriginalId: async (parent, args, context) => {
    const user = await getServices().user.getUserById(args.originalId);
    if (!user) {
      throw new ServiceError('USER_NOT_FOUND');
    }
    return user;
  },
};
