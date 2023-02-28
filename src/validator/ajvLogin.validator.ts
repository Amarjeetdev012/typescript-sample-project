import ajv from '../middleware/ajv.middleware.js';

const schema = {
    type: 'object',
    properties: {
        email: { type: 'string', format: 'email' },
        password: { type: 'string' },
    },
    required: ['email', 'password'],
    additionalProperties: false,
};

const loginSchema = ajv.compile(schema);
export default loginSchema;
