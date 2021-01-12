import { HttpError } from './http.error';

export class BadRequestError extends HttpError {
  constructor(errors: string[] | undefined, message?: string) {
    super(400, message || 'bad request', errors);
  }
}
