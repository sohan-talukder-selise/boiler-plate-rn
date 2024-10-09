const returnResponse = (
  response: any,
  status: any,
  message: any,
  logout = false,
  tokens = null,
) => {
  return {
    status: status,
    body: response,
    message: message,
    logout: logout,
    tokens,
  };
};

export default returnResponse;
