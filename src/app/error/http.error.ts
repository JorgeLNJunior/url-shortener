export class HttpError implements Error {
  constructor(status: number, message: string, errors?: string[]) {
    this.status = status;
    this.message = message;
    this.errors = errors;
  }

  name: string;
  message: string;
  stack?: string | undefined;
  status: number;
  errors?: string[];
}
