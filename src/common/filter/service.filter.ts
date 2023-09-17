import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

import { ArgumentsHost, Catch, ExceptionFilter, Inject } from '@nestjs/common';

import { ServiceError } from '../types/error.type';
import { getServiceErrorHandler } from './service/factory';

@Catch(ServiceError)
export class ServiceErrorFilter implements ExceptionFilter {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  catch(exception: ServiceError, host: ArgumentsHost) {
    const contextType = host.getType();

    const handler = getServiceErrorHandler(contextType);
    return handler?.(exception, host, this.logger);
  }
}
