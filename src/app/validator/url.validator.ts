import Joi from 'joi';

export class UrlValidator {
  validate(body: unknown): ValidationResult {
    const schema = Joi.object({
      url: Joi.string().required(),
      slug: Joi.string().optional().min(5).max(12).replace(' ', ''),
    });

    return schema.validate(body, { stripUnknown: true });
  }
}

interface ValidationResult extends Joi.ValidationResult {
  value: {
    url: string;
    slug?: string;
  };
}
