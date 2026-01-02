import { Prisma } from '../generated/prisma/index.js';
import { logger } from '../lib/logging.js';

export const errorHandler = (err, req, res, next) => {
  // 1. Default values
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';
  let status = err.status || 'error';

  // 2. Catch Specific Prisma Errors
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    // P2002: Unique constraint failed (e.g., duplicate email)
    if (err.code === 'P2002') {
      statusCode = 400;
      status = 'fail';
      message = `Duplicate value for ${err.meta.modelName}. 
      ${err.message}. Please use another value.`;
    }

    // P2025: Record to update/delete not found
    if (err.code === 'P2025') {
      statusCode = 404;
      status = 'fail';
      message = 'The requested record was not found.';
    }
  }

  // 3. Catch Validation Errors (e.g., passing a string to an Int field)
  if (err instanceof Prisma.PrismaClientValidationError) {
    statusCode = 400;
    status = 'fail';
    message = 'Invalid data provided to the database.';
  }

  // console.log(err);
  logger.error(err);
  // 4. Send the Response
  res.status(statusCode).json({
    status: status,
    message: message.replace(/\n/g, ' ').replace(/\s+/g, ' '),
  });
};