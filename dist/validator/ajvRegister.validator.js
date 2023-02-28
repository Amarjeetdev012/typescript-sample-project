"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ajv_middleware_js_1 = __importDefault(require("../middleware/ajv.middleware.js"));
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
const registerSchema = ajv_middleware_js_1.default.compile(schema);
exports.default = registerSchema;
