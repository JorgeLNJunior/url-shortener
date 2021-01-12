import Joi from 'joi';

export class UserValidator {
  create(body: unknown): Joi.ValidationResult {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });

    return schema.validate(body, { stripUnknown: true });
  }
}
