import ajv from '../middleware/ajv.middleware.js';

const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    email: { type: 'string', format: 'email' },
    userId: { type: 'string' },
    password: { type: 'string' },
  },
  required: ['name', 'email', 'userId', 'password'],
  additionalProperties: false,
};

const registerSchema = ajv.compile(schema);
export default registerSchema;
