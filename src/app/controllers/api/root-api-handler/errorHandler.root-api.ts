const errorHandler = (error: any, from = '') => {
  console.log({
    from: from,
    data: error,
  });
};
export default errorHandler;
