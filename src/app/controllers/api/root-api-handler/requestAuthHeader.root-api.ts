import requestHeader from './requestHeader.root-api';

const requestAuthHeader = (token: any) => {
  const headers: any = {...requestHeader()};
  headers.Authorization = `Bearer ${token}`;
  return headers;
};

export default requestAuthHeader;
