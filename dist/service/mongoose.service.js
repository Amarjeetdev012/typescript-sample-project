"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const logger_1 = require("../logger");
const winston_1 = require("winston");
const MONGO_CONNECTION_URL = process.env.MONGO_URL;
const connectDatabase = () => {
    console.log('mongodb is connecting...');
    mongoose_1.default.connect(`${MONGO_CONNECTION_URL}`)
        .then(() => {
        console.log('mongodb is connected');
    })
        .catch((err) => {
        logger_1.logger.error(winston_1.error);
        console.log(err);
    });
};
exports.connectDatabase = connectDatabase;
