// src/utils/errors.js

/**
 * Base class for custom application errors.
 * Includes a status code property.
 */
class AppError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
      // Capture the stack trace, excluding the constructor call itself
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  /**
   * 400 Bad Request Error: For client errors like invalid input or business rule violations (e.g., already exists, already booked).
   */
  class BadRequestError extends AppError {
    constructor(message = 'Bad Request') {
      super(message, 400);
    }
  }
  
  /**
   * 401 Unauthorized Error: For authentication failures (e.g., invalid credentials, missing or invalid token).
   */
  class AuthenticationError extends AppError {
    constructor(message = 'Authentication Failed') {
      super(message, 401);
    }
  }
  
  /**
   * 403 Forbidden Error: For authorization failures (e.g., user doesn't have permission). (Not strictly needed for this assignment but good to have).
   */
  // class ForbiddenError extends AppError {
  //   constructor(message = 'Forbidden') {
  //     super(message, 403);
  //   }
  // }
  
  /**
   * 404 Not Found Error: For resources that do not exist.
   */
  class NotFoundError extends AppError {
    constructor(message = 'Resource Not Found') {
      super(message, 404);
    }
  }
  
  /**
   * 409 Conflict Error: For conflicts, like a resource already existing when trying to create it.
   * (Can sometimes be covered by BadRequest, but 409 is more specific for unique constraints)
   */
  class ConflictError extends AppError {
      constructor(message = 'Conflict') {
          super(message, 409);
      }
  }
  
  
  /**
   * 500 Internal Server Error: For unexpected errors on the server side.
   */
  class InternalServerError extends AppError {
    constructor(message = 'Internal Server Error') {
      super(message, 500);
    }
  }
  
  
  module.exports = {
    AppError,
    BadRequestError,
    AuthenticationError,
    NotFoundError,
    ConflictError,
    InternalServerError,
  };