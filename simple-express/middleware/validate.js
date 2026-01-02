import { logger } from '../lib/logging.js';

// TODO explain these arrows
export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse({
    body: req.body,
    query: req.query,
    params: req.params,
  });

  if (!result.success) {
    logger.error({
      error: {
        name: 'ZodError',
        issues: result.error.issues,
      },
    }, 'Validation Failed');

    return res.status(400).json({
      status: 'client error',
      errors: result.error.issues.map((issue) => ({
        path: issue.path.join('.'),
        message: issue.message,
      })),
    });
  }

  logger.info(result);
  req.validatedData = result.data;
  next();
};