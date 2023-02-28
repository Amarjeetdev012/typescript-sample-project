"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateQRCode = exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_js_1 = require("../model/user.model.js");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const qrcode_1 = __importDefault(require("qrcode"));
const secretKey = process.env.JWT_SECRET;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    let { name, email, userId, password } = data;
    const checkMail = yield user_model_js_1.User.findOne({ email: email });
    if (checkMail) {
        return res.status(400).send({ status: false, message: 'email already used' });
    }
    const hash = yield bcrypt_1.default.hash(password, 10);
    data.password = hash;
    const save = yield user_model_js_1.User.create(data);
    return res.status(201).send({ status: true, message: 'user registered', data: save });
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const { email, password } = data;
    const user = yield user_model_js_1.User.findOne({ email: email });
    console.log('user', user);
    if (!user) {
        return res.status(404).send({ status: false, message: 'user not found' });
    }
    const match = yield bcrypt_1.default.compare(password, user.password);
    if (!match) {
        return res.status(400).send({ status: false, message: 'password not matched' });
    }
    const token = jsonwebtoken_1.default.sign({ _id: user._id }, secretKey);
    console.log('token', token);
    res.status(200).send({ status: true, message: 'login succesfully', token: token });
});
exports.login = login;
const generateQRCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const url = data.url;
    qrcode_1.default.toString(url, { type: 'terminal' }, function (err, string) {
        if (err)
            throw err;
        console.log(string);
    });
    res.status(201).send({ status: true, message: 'qr code generated' });
});
exports.generateQRCode = generateQRCode;
