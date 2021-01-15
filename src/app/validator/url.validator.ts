import Joi from 'joi';

export class UrlValidator {
  validate(body: unknown): ValidationResult {
    const schema = Joi.object({
      url: Joi.string().required(),
    });

    return schema.validate(body, { stripUnknown: true });
  }
}

interface ValidationResult extends Joi.ValidationResult {
  value: {
    url: string;
  };
}
