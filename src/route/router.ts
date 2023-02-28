import express from 'express'
import { generateQRCode, login, register } from '../controller/user.controller.js'
import registerSchema from '../validator/ajvRegister.validator.js'
import validateSchema from '../validator/ajv.validator.js'
import loginSchema from '../validator/ajvLogin.validator.js'

const router = express.Router()

router.post('/register', validateSchema(registerSchema), register)
router.post('/login', validateSchema(loginSchema), login)
router.post('/qrcode', generateQRCode)

export default router