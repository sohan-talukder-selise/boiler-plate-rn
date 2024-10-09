const requestAuthMultiPartHeader = (token: any) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return headers;
};
export default requestAuthMultiPartHeader;
