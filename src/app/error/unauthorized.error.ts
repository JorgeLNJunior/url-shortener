import { HttpError } from './http.error';

export class UnauthorizedError extends HttpError {
  constructor(errors?: string[], message?: string) {
    super(401, message || 'unauthorized', errors);
  }
}
