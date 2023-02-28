"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_js_1 = require("../controller/user.controller.js");
const ajvRegister_validator_js_1 = __importDefault(require("../validator/ajvRegister.validator.js"));
const ajv_validator_js_1 = __importDefault(require("../validator/ajv.validator.js"));
const ajvLogin_validator_js_1 = __importDefault(require("../validator/ajvLogin.validator.js"));
const router = express_1.default.Router();
router.post('/register', (0, ajv_validator_js_1.default)(ajvRegister_validator_js_1.default), user_controller_js_1.register);
router.post('/login', (0, ajv_validator_js_1.default)(ajvLogin_validator_js_1.default), user_controller_js_1.login);
router.post('/qrcode', user_controller_js_1.generateQRCode);
exports.default = router;
