"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
const transport_file = [
    new winston_1.transports.File({
        filename: 'error.log',
        level: 'error',
    }),
    new winston_1.transports.File({ filename: 'logger.log' }),
];
exports.logger = (0, winston_1.createLogger)({
    level: process.env.DEBUG === 'true' ? 'debug' : 'info',
    format: winston_1.format.combine(winston_1.format.splat(), winston_1.format.simple()),
    transports: transport_file,
});
