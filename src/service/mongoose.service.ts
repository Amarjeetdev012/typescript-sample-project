import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
import { logger } from '../logger';
import { error } from 'winston';

const MONGO_CONNECTION_URL = process.env.MONGO_URL

export const connectDatabase = () => {
    console.log('mongodb is connecting...');
    mongoose.connect(`${MONGO_CONNECTION_URL}`)
        .then(() => {
            console.log('mongodb is connected');
        })
        .catch((err) => {
            logger.error(error);
            console.log(err);
        })
}
