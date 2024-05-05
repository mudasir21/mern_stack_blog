import express from 'express'      // changes type to module in json so would work now
// const express = require('express')


const app = express();
app.use(express.json());            // this will allow json to be sent through post req

import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'


dotenv.config();

mongoose.connect(process.env.MONGOURL)
.then(() => {
    console.log("mongodb connected successfully");
}).catch(error => {
    console.log(error)
})



app.use('/api/user',userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        success: false,
        statusCode,
        message

    })
});


app.listen(3000, () => {
    console.log("listening to port 3000...");
});




