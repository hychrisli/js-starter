import { getContextLogger } from '../lib/context.js';

export const accessLogger = (req, res, next) => {
  const logger = getContextLogger();
  const start = new Date();

  res.on('finish', () => {
    const end = new Date();
    const duration = end.getTime() - start.getTime();
    const { method, originalUrl } = req;
    const { statusCode } = res;
    logger.info(`${method} ${originalUrl} ${statusCode} ${duration} ms`);
  });

  next();
};