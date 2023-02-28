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
exports.generateQR = void 0;
const qrcode_1 = __importDefault(require("qrcode"));
// With async/await
const generateQR = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = {
            name: "test",
            age: 27,
            department: "Police",
            id: "aisuoiqu3234738jdhf100223"
        };
        // Converting into String data
        let stringdata = JSON.stringify(data);
        // Print the QR code to terminal
        qrcode_1.default.toString(stringdata, { type: 'terminal' }, function (err, url) {
            if (err)
                return console.log("error occurred");
            console.log(url);
        });
    }
    catch (err) {
        console.error(err);
    }
});
exports.generateQR = generateQR;
