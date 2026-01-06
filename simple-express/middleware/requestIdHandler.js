import { logger } from '../lib/logging.js';
import { storage } from '../lib/context.js';
import { v4 as uuidV4 } from 'uuid';

export const requestIdHandler = (req, res, next) => {

  const requestId = req.headers['x-request-id'] || uuidV4();

  // create a child pino logger with the request uuid pre-attached
  const childLogger = logger.child({ requestId });

  // run the rest of thr request lifecycle inside the store 
  storage.run({
    requestId, logger: childLogger,
  }, () => {
    next();
  });
};