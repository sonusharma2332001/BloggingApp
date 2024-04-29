import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import UserRoute from './Routes/user.route.js';
import AuthRoute from './Routes/auth.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(
    () => {
        console.log("mongodb is connected")
    }
).catch((e) => {
    console.log("mongo is not connected")
});
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000' 
}));


app.listen(3000, () => {
    console.log('Server is Running on port 3000')
});

app.use('/api/user', UserRoute);
app.use('/api/auth', AuthRoute);

app.use((error, req, res, next) => {
    const statuscode = error.statuscode || 500;
    const message = error.message || "Internal Server Error";
    return res.status(statuscode).json({
        success: false,
        statuscode,
        message,
    })
});
