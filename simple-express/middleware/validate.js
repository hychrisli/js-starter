// TODO explain these arrows
export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse({
    body: req.body,
    query: req.query,
    params: req.params,
  });

  console.log(result);
  if (!result.success) {
    return res.status(400).json({
      status: 'client error',
      errors: result.error.issues.map((issue) => ({
        path: issue.path.join('.'),
        message: issue.message,
      })),
    });
  }
  req.validatedData = result.data;
  next();
};