enum apiStatus {
  internalError = 'Something went wrong',
  invalidCredential = 1001,
  validation = 1002,
  tokenInvalid = 1003,
  tokenExpired = 1004,
  timeoutError = 'Get get timeout error',
  internetError = 'May be you have no internet. Please check your internet !',
  unauthorized = 401,
  appUnauthorized = 4001,
}

enum messages {
  noToken = '',
  timeout = '',
  internet = '',
  internalError = 'Internal Server Error',
}

export {apiStatus, messages};
