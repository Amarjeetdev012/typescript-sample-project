"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ajv_middleware_js_1 = __importDefault(require("../middleware/ajv.middleware.js"));
const schema = {
    type: 'object',
    properties: {
        email: { type: 'string', format: 'email' },
        password: { type: 'string' },
    },
    required: ['email', 'password'],
    additionalProperties: false,
};
const loginSchema = ajv_middleware_js_1.default.compile(schema);
exports.default = loginSchema;
