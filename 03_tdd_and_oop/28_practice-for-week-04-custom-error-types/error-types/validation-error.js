// Your code here
class ValidationError extends Error {
  constructor(message, ...params) {
    super(...params);

    this.name = 'ValidationError'

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.name)
    }

    if (message) {
      this.message = message;
    } else {
      this.message = 'Invalid input'
    }
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}
