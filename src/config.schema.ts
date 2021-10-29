import * as Joi from "joi"

export const configValidationSchema = Joi.object({
    PORT: Joi.number().default(8000),
    PG_HOST: Joi.string().required(),
    PG_PORT: Joi.number().default(5432),
    PG_USERNAME: Joi.string().required(),
    PG_PASSWORD: Joi.string().required(),
    PG_DATABASE: Joi.string().required()
})