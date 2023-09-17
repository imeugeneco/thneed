const CodeToErrorContext = {
  UNKNOWN_ERROR: [500, `Unknown server error.`],
  NOT_FOUND: [404, `Resource not found.`],
  ALREADY_EXISTS: [409, `Already exists.`],
  NO_PERMISSION: [403, `You do not have permission.`],
  INVALID_ACCESS_TOKEN: [401, `Invalid access token`],

  USER_NOT_FOUND: [404, 'User not found'],
} as const;

export type ErrorCode = keyof typeof CodeToErrorContext;

export const getMessageFromCode = (code: ErrorCode): string => {
  return CodeToErrorContext[code]?.[1] || `Unknown error code`;
};

export const getStatusFromCode = (code: ErrorCode): number => {
  return CodeToErrorContext[code]?.[0] || 500;
};

export type ServiceErrorJson = {
  code: string;
  status: number;
  message: string;
};

declare var Error: ErrorConstructor;

interface Error {
  title: string;
  message: string;
}

export class ServiceError extends Error {
  code: ErrorCode;
  status: number;
  originalError: any;
  constructor(code: ErrorCode, detail?: string | object, originalError?: any) {
    const status = getStatusFromCode(code);
    const message = getMessageFromCode(code);

    const errorMessage = `${code}: ${message}`;
    super(errorMessage);
    this.status = status;
    this.code = code;
    this.originalError = originalError || null;
  }

  toJson(): ServiceErrorJson {
    return {
      code: this.code,
      status: this.status,
      message: this.message,
    };
  }
}
