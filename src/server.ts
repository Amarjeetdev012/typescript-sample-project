import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import router from './route/router'
import { connectDatabase } from './service/mongoose.service'

const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/', router)

connectDatabase()

app.listen(PORT, () => {
    console.log(`app is running on PORT ${PORT}`);
})
