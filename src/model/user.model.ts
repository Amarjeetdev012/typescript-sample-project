import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export interface IUser {
    name: string;
    email: string;
    userId: string;
    password: string;
}

const userSchema = new mongoose.Schema<IUser>({
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
})

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

export const User = mongoose.model('user', userSchema)
