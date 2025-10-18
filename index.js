import express from 'express';
import cookieParser from 'cookie-parser';
import connectDB from './utils/db.js';
import userRoute from './routes/user.route.js';
import expenseRoute from './routes/expense.route.js'
import dotenv from 'dotenv';
dotenv.config({})

const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

//routes
app.use('/api/user', userRoute);
app.use('/api/expense', expenseRoute);


app.listen(PORT, () => {
    console.log(`Server runnning at port ${PORT}`);
    connectDB();
})