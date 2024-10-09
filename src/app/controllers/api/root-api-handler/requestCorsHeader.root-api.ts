const requestCorsHeader = () => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // "Access-Control-Allow-Origin": '*',
    // "Access-Control-Allow-Headers": '*'
  };
  return headers;
};

export default requestCorsHeader;
