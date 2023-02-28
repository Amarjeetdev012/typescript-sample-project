"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const router_1 = __importDefault(require("./route/router"));
const mongoose_service_1 = require("./service/mongoose.service");
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/', router_1.default);
(0, mongoose_service_1.connectDatabase)();
app.listen(PORT, () => {
    console.log(`app is running on PORT ${PORT}`);
});
