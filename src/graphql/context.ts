import { ExecutionContext } from 'graphql-helix';
import { ApplicationServices } from '~/service/services';

export interface GraphqlContext {
  services: ApplicationServices;
  authToken: string | undefined;
}

export function createContextFactory({
  services,
}: {
  services: GraphqlContext['services'];
}): (executionContext: ExecutionContext) => Promise<GraphqlContext> {
  return async (executionContext) => {
    const headers = executionContext.request.headers as Record<
      string,
      string | null
    >;

    const authorization = headers['authorization'];
    const [authType, authToken] = (authorization || '').split(' ');
    if (authType !== 'Bearer') {
      // throw new ServiceError('INVALID_ACCESS_TOKEN');
    }

    const ctx: GraphqlContext = {
      services,
      authToken,
    };

    return ctx;
  };
}
