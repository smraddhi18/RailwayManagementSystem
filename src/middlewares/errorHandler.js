exports.errorHandler = (err, req, res, next) => {
  console.error(err);
  if (err.code === "ER_DUP_ENTRY") return res.status(409).json({ error: "Duplicate entry" });
  if (err.errors) return res.status(err.status || 400).json({ error: err.message, details: err.errors });
  res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
};
