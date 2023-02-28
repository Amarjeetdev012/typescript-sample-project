import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { User } from "../model/user.model.js";
import jwt from 'jsonwebtoken'
import QRCode from 'qrcode'

const secretKey = process.env.JWT_SECRET

export const register = async (req: Request, res: Response) => {
    const data = req.body
    let { name, email, userId, password } = data
    const checkMail = await User.findOne({ email: email })
    if (checkMail) {
        return res.status(400).send({ status: false, message: 'email already used' })
    }
    const hash = await bcrypt.hash(password, 10)
    data.password = hash
    const save = await User.create(data)
    return res.status(201).send({ status: true, message: 'user registered', data: save })
}

export const login = async (req: Request, res: Response) => {
    const data = req.body
    const { email, password } = data
    const user = await User.findOne({ email: email })
    console.log('user', user);
    if (!user) {
        return res.status(404).send({ status: false, message: 'user not found' })
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.status(400).send({ status: false, message: 'password not matched' })
    }
    const token = jwt.sign({ _id: user._id }, secretKey!)
    console.log('token', token);
    res.status(200).send({ status: true, message: 'login succesfully', token: token })
}

export const generateQRCode = async (req: Request, res: Response) => {
    const data = req.body as {url:string}
    const url = data.url
    QRCode.toString(url, { type: 'terminal' }, function (err, string) {
        if (err) throw err
        console.log(string)
    })
    res.status(201).send({ status: true, message: 'qr code generated' })
}
