import { HttpError } from './http.error';

export class NotFoundError extends HttpError {
  constructor(errors?: string[], message?: string) {
    super(404, message || 'not found', errors);
  }
}
