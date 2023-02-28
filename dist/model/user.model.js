"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    userId: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});
// userSchema.pre('save', function (next) {
//     var user = this;
//     // only hash the password if it has been modified (or is new)
//     if (!user.isModified('password')) return next();
//     bcrypt.hash(user.password, 10, function (err, hash) {
//         if (err) return next(err);
//         // override the cleartext password with the hashed one
//         user.password = hash;
//         next();
//     });
// });
// userSchema.methods.comparePassword = function (candidatePassword: string | Buffer, cb: (arg0: Error | null, arg1?: boolean | undefined) => void) {
//     bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// };
exports.User = mongoose_1.default.model('user', userSchema);
