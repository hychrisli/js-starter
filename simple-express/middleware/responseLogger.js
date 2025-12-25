const responseLogger = (req, res, next) => {
  const start = new Date();

  res.on('finish', () => {
    const end = new Date();
    const timestamp = end.toISOString();
    const duration = end.getTime() - start.getTime();
    const { method, originalUrl } = req;
    const { statusCode } = res;
    console.log(`[${timestamp}] ${method} ${originalUrl} ${statusCode} ${duration} ms`);
  });

  next();
};

export default responseLogger;