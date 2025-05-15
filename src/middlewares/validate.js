const { validationResult } = require("express-validator");

exports.validate = (schemas) => async (req, _res, next) => {
  await Promise.all(schemas.map((schema) => schema.run(req)));
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    const formatted = errors.array().map(err => ({ field: err.path, message: err.msg }));
    return next({ status: 422, message: "Validation failed", errors: formatted });
  }
  next();
};
