import Joi from 'joi';

export class AuthValidator {
  login(body: unknown): Joi.ValidationResult {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    return schema.validate(body, { stripUnknown: true });
  }
}
